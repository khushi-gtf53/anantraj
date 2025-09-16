"use client"
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export const useCrud = (api, endpoint, tableHeader,autoFetch = true) => {
  const { get, post, update, del, edit } = api;

  const [tableData, setTableData] = useState([]);
  const [pagination, setPagination] = useState({});
  const [editData, setEditData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  

  const fetchTableData = async (page = 1) => {
  if (!endpoint) return;

  try {
    const response = await get(`${endpoint}?page=${page}&limit=10`);

    if (response) {
      let records = [];

if (Array.isArray(response.data)) {
  records = response.data;
} else if (Array.isArray(response.data?.data)) {
  records = response.data.data;
} else if (response.data && typeof response.data === "object") {
  // wrap single object in array
  records = [response.data];
}
      let formatted;

      if (Array.isArray(tableHeader) && tableHeader.length > 0) {
        formatted = records.map((item) => {
          const row = tableHeader.map((key) => item[key]);
          row.push(item.id); 
          return row;
        });
      } else {
        formatted = records;
      }

      setTableData(formatted);
      setPagination(response?.pagination || response?.data?.pagination || {});
    }
  } catch (err) {
    console.log("fetch error", err);
    toast.error("Failed to fetch records");
  }
};

useEffect(() => {
  if (!autoFetch || !endpoint) return;  // 👈 only run when endpoint is valid
  fetchTableData(currentPage);
}, [endpoint, currentPage, autoFetch]);


  // ✅ Handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // ✅ Add or update
  const handleAddOrUpdate = async (data,skipFetch = false) => {
    if (!endpoint) return;

    try {
      const formData = new FormData();
      Object.entries(data).forEach(([k, v]) =>{if (k !== "id") formData.append(k, v);});

      if (editData) {
        // Update existing record
        const response = await update(`${endpoint}/${editData.id}`, formData);

        if (response) {
          toast.success("Updated successfully");
          setEditData(null);
          fetchTableData(currentPage);
        }
      } else {
        // Add new record
        const response = await post(endpoint, formData);

        if (response) {
          toast.success("Added successfully");
         if (!skipFetch) fetchTableData(currentPage);
        }
      }
    } catch (error) {
        console.error(error?.messages);
        toast.error(error?.error);
    }
  };

  // ✅ Delete
  const handleDelete = async (id) => {
    if (!endpoint) return;

    try {
      await del(`${endpoint}/${id}`);
      setTableData((prev) => prev.filter((row) => row[2] !== id)); // assumes ID is at index 2
      toast.success("Deleted successfully");
      fetchTableData(currentPage);
    } catch (err) {
      console.error(err?.err);
      toast.error("Error deleting");
    }
  };

  // ✅ Edit (fetch one record)
  const handleEdit = async (id) => {
    if (!endpoint) return;

    try {
      const response = await edit(`${endpoint}/${id}`);
      setEditData(response?.data);
      toast.success("Data loaded for edit");
      fetchTableData(currentPage);
    } catch (err) {
      console.error(err);
      toast.error("Error loading data");
    }
  };

  return {
    tableData,
    pagination,
    currentPage,
    handlePageChange,
    editData,
    handleAddOrUpdate,
    handleDelete,
    handleEdit,
    fetchTableData,
  };
};
