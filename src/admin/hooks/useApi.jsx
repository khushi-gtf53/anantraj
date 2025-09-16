"use client";
import { useState, useCallback } from "react";

// Helper: Convert object to FormData
function objectToFormData(obj) {
  const formData = new FormData();
  Object.entries(obj).forEach(([key, value]) => formData.append(key, value));
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
        // ✅ Get token directly from localStorage for every request
        let token;
        if (typeof window !== "undefined") {
          token = localStorage.getItem("adminToken");
        }

        const combinedHeaders = {
          ...headers,
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        };

        const options = { method, headers: combinedHeaders };

        if (body) {
          if (body instanceof FormData) {
            options.body = body;
            delete options.headers["Content-Type"];
          } else if (typeof body === "object") {
            options.body = objectToFormData(body);
            delete options.headers["Content-Type"];
          } else {
            options.body = typeof body === "string" ? body : JSON.stringify(body);
            options.headers["Content-Type"] = "application/json";
          }
        }

        const res = await fetch(baseUrl + endpoint, options);

        const contentType = res.headers.get("content-type");
        const data =
          contentType?.includes("application/json") ? await res.json() : await res.text();

        if (!res.ok) throw data;

        setLoading(false);
        return data;
      } catch (err) {
        setLoading(false);
        setError(err?.message || "Unknown error");
        throw err;
      }
    },
    [baseUrl]
  );

  return {
    loading,
    error,
    get: (ep, headers) => request(ep, "GET", null, headers),
    post: (ep, body, headers) => request(ep, "POST", body, headers),
    update: (ep, body, headers) => request(ep, "PATCH", body, headers),
    edit: (ep, body, headers) => request(ep, "GET", body, headers),
    del: (ep, headers) => request(ep, "DELETE", null, headers),
  };
}
