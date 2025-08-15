"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface LoginFormInputs {
  password: string;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { register, handleSubmit } = useForm<LoginFormInputs>();

  const onLogin = (data: LoginFormInputs) => {
    if (data.password === process.env.NEXT_PUBLIC_ADMIN) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <form onSubmit={handleSubmit(onLogin)} className="flex flex-col gap-4">
          <Input type="password" {...register("password")} placeholder="Password" />
          <Button type="submit">Login</Button>
        </form>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center min-h-screen bg-black text-white p-4 font-sans">
      <h1 className="text-5xl font-bold my-8 mt-30">Admin Panel</h1>
      <div className="w-full max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mt-12 mb-4">Generate Manifest</h2>
        <Button
          className="bg-white text-black hover:text-black hover:bg-gray-200 hover:cursor-pointer"
          onClick={async () => {
            const res = await fetch('/api/images');
            if (res.ok) {
              alert('Manifest generated successfully');
            } else {
              const error = await res.json();
              alert(error.error);
            }
          }}
        >
          Generate Manifest
        </Button>
      </div>
    </div>
  );
}
