"use client";
import { useState, useCallback } from "react";

// Helper: Convert plain object to FormData
function objectToFormData(obj) {
  const formData = new FormData();
  Object.entries(obj).forEach(([key, value]) => {
    formData.append(key, value);
  });
  return formData;
}

export function useApi(baseUrl) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(
    async (endpoint = "", method = "GET", body = null, headers = {}) => {
      setLoading(true);
      setError(null);

      try {
        // Get token from localStorage
        const token = localStorage.getItem("adminToken");

        // Merge headers, adding Authorization if token exists
        const combinedHeaders = {
          ...headers,
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        };

        const options = { method, headers: combinedHeaders };

        // Handle body types
        if (body) {
          if (body instanceof FormData) {
            // Already FormData (keep as is)
            options.body = body;
            // Remove Content-Type for FormData (browser will set it)
            if (options.headers["Content-Type"]) {
              delete options.headers["Content-Type"];
            }
          } else if (typeof body === "object") {
            // Convert plain object to FormData
            options.body = objectToFormData(body);
            if (options.headers["Content-Type"]) {
              delete options.headers["Content-Type"];
            }
          } else {
            // JSON or raw text
            options.body = typeof body === "string" ? body : JSON.stringify(body);
            options.headers["Content-Type"] = "application/json";
          }
        }

        const res = await fetch(baseUrl + endpoint, options);

        const contentType = res.headers.get("content-type");
        let data;
        if (contentType && contentType.includes("application/json")) {
          data = await res.json();
        } else {
          data = await res.text();
        }

        if (!res.ok) {
          throw data;
        }

        setLoading(false);
        return data;
      } catch (err) {
        setLoading(false);
        setError(err.message);
        throw err;
      }
    },
    [baseUrl]
  );

  // Shortcut methods
  const get = useCallback(
    (endpoint = "", headers = {}) => request(endpoint, "GET", null, headers),
    [request]
  );
  const post = useCallback(
    (endpoint = "", body, headers = {}) => request(endpoint, "POST", body, headers),
    [request]
  );
  const update = useCallback(
    (endpoint = "", body, headers = {}) => request(endpoint, "PATCH", body, headers),
    [request]
  );
  const edit = useCallback(
    (endpoint = "", body, headers = {}) => request(endpoint, "GET", body, headers),
    [request]
  );
  const del = useCallback(
    (endpoint = "", headers = {}) => request(endpoint, "DELETE", null, headers),
    [request]
  );

  return { loading, error, get, post, update, edit, del };
}
