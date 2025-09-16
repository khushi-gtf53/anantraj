"use client"; // required in Next.js App Router for hooks like useState/useRouter

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { BASE_ADMIN } from "@/config";
import { useApi } from "@/src/admin/hooks/useApi";

const Login = () => {
  const router = useRouter();
  const { post, loading, error } = useApi(BASE_ADMIN);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [localError, setLocalError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError("");

    try {
      const res = await post(
        "auth/login",
        JSON.stringify({ email, password }),
        { "Content-Type": "application/json" }
      );
      console.log(res)
      localStorage.setItem("adminToken", res.data.token);
      router.replace("/admin"); // same as navigate("/admin", { replace: true })
    } catch (err) {
      setLocalError(err.message || "Invalid email or password");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Image */}
      <div className="hidden md:flex w-1/2 bg-gray-200">
        <img
          src="/assets/admin/login.jpg"
          alt="Login"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-8 bg-[linear-gradient(#181a26_1px,transparent_1px),linear-gradient(to_right,#181a26_1px,#292b37_1px)]">
        <div className="max-w-md w-full space-y-6">
          <h2 className="text-3xl font-bold text-center text-white tracking-[2px]">
            Login
          </h2>

          {(localError || error) && (
            <p className="text-red-500 text-center text-sm">
              {localError || error}
            </p>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 text-white">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 text-[14px] text-white py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-white">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-2 text-[14px] text-white border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[var(--admin-secondary)] text-white py-2 rounded-lg hover:bg-[var(--admin-yellow)] transition disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
