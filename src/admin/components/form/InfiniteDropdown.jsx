"use client";
import React, { useState, useEffect, useRef } from "react";
import Label from "./Label";
import { BASE_ADMIN } from "@/config";
import { useApi } from "../../hooks/useApi";

const InfiniteDropdown = ({
  name,
  label,
  value,
  onChange,
  required,
  defaultOptions = [],
  pageSize = 10,
}) => {
  const api = useApi(BASE_ADMIN);
  const [options, setOptions] = useState([]);
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false); // track dropdown open/close
  const dropdownRef = useRef(null);

  const normalizeOptions = (arr) =>
    Array.isArray(arr)
      ? arr.map((item) => ({
          value: item.value || item.id,
          label: item.label || item.name,
        }))
      : [];

  useEffect(() => {
    setOptions(normalizeOptions(defaultOptions));
  }, [defaultOptions]);

  // Load next page from API
  const loadMore = async () => {
    if (!hasMore || loading) return;
    setLoading(true);
    try {
      const res = await api.get(`amenities-logo?page=${page}&limit=${pageSize}`);
      const newItemsRaw = Array.isArray(res) ? res : res?.data?.data || [];
      if (newItemsRaw.length === 0) {
        setHasMore(false);
        return;
      }
      const newItems = normalizeOptions(newItemsRaw);
      setOptions((prev) => [...prev, ...newItems]);
      setPage((prev) => prev + 1);
      if (newItemsRaw.length < pageSize) setHasMore(false);
    } catch (err) {
      console.error("Error loading options:", err);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    const el = dropdownRef.current;
    if (!el) return;
    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 5) {
      loadMore();
    }
  };

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      {label && <Label name={name} label={label} required={required} />}

      <div
        className="w-full cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="w-full h-[50px] flex items-center px-3 border border-[#45464f] rounded bg-transparent text-white">
          {value
            ? options.find((opt) => opt.value === value)?.label
            : `Select ${label}`}
        </div>
      </div>

      {open && (
        <div
          ref={dropdownRef}
          onScroll={handleScroll}
          className="absolute w-full max-h-[300px] overflow-y-auto border border-[#45464f] rounded bg-white z-50 mt-1"
        >
          {options.map((opt) => (
            <div
              key={opt.value}
              className={`px-3 py-2 cursor-pointer hover:bg-gray-200 ${
                value === opt.value ? "bg-gray-300" : ""
              }`}
              onClick={() => {
                onChange(name, opt.value);
                setOpen(false); // close after select
              }}
            >
              {opt.label}
            </div>
          ))}

          {loading && (
            <div className="px-3 py-2 text-gray-500">Loading...</div>
          )}
          {!hasMore && options.length > 0 && (
            <div className="px-3 py-2 text-gray-500">No more options</div>
          )}
        </div>
      )}
    </div>
  );
};

export default InfiniteDropdown;
