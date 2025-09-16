"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";  // ✅ correct hook
import { toast } from "react-toastify";
import { BASE_ADMIN } from "@/config";

const ProtectedAdminRoute = ({ children }) => {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const validateToken = async () => {
      const token = localStorage.getItem("adminToken");
      if (!token) {
        router.replace("/admin/login");
        return;
      }

      try {
        const res = await fetch(`${BASE_ADMIN}validate-token`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error("Invalid token");
        }

        setChecking(false); // ✅ token valid
      } catch (err) {
        toast.error("Session expired. Please login again.");
        localStorage.removeItem("adminToken");
        router.replace("/admin/login");
      }
    };

    validateToken();
  }, [router]);

  if (checking) {
    return <p>Checking authentication...</p>;
  }

  return <>{children}</>;
};

export default ProtectedAdminRoute;
