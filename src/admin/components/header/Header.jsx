"use client";

import React from "react";
import { useParams } from "next/navigation"; // ✅ Next.js hook
import { IoLogOut, IoPersonCircle } from "react-icons/io5";

const Header = ({ onLogout }) => {
  const params = useParams(); // { id, slug } if /admin/[id]/[slug]
  const id = params?.id;

  return (
    <header
      className={`flex justify-between max-w-[100%] items-center py-[25px] px-[50px] ml-[80px] ${
        id ? "mr-[80px]" : ""
      }`}
    >
      <div>
        <img
          src="/assets/white-anant.png"
          alt="logo"
          className="w-[100px] block"
        />
      </div>
      <div className="flex gap-[100px] items-center">
        <button className="flex gap-[5px] items-center text-[#fff]">
          <IoPersonCircle className="text-[25px] filter" />
          Admin
        </button>
        <button
          onClick={onLogout}
          className="flex gap-[5px] items-center text-[#fff]"
        >
          <IoLogOut className="text-[25px] filter" />
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
