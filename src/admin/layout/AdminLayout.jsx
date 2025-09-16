"use client";

import Header from "@/src/admin/components/header/Header";
import LeftSidebar from "@/src/admin/components/header/LeftSidebar";
import RightSidebar from "@/src/admin/components/header/RightSidebar";
import { ToastContainer } from "react-toastify";
import { usePathname, useParams } from "next/navigation";
import { useEffect } from "react";

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const params = useParams(); // { id, slug } if route is /admin/[id]/[slug]

  const isLoginPage = pathname === "/admin/login";
  const hasProjectId = Boolean(params?.id);

  useEffect(() => {
    document.body.className = "admin-body";
  }, []);

  return (
    <>
      {!isLoginPage && (
        <Header
          onLogout={() => {
            localStorage.removeItem("adminToken");
            window.location.href = "/admin/login";
          }}
        />
      )}

      {!isLoginPage && <LeftSidebar />}
      {!isLoginPage && hasProjectId && (
        <RightSidebar projectId={params.id} activeSlug={params.slug} />
      )}

      <ToastContainer position="top-right" autoClose={1000} />

      <main
        className={
          !isLoginPage
            ? `px-[50px] ${hasProjectId ? "ml-[80px] mr-[80px]" : "ml-[80px]"}`
            : ""
        }
      >
        {children}
      </main>
    </>
  );
}
