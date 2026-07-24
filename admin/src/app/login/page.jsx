"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/authSlice";
import { useRouter } from "next/navigation";
import api from "../../services/api";

export default function Login() {
  const router = useRouter();

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      dispatch(loginSuccess(res.data.token));

      router.push("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="w-96 rounded-lg bg-white p-6 shadow"
      >
        <h1 className="mb-6 text-3xl font-bold">
          Admin Login
        </h1>

        <input
          className="mb-4 w-full rounded border p-3"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="mb-4 w-full rounded border p-3"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full rounded bg-blue-600 p-3 text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
}