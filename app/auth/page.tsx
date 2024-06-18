"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

const page = () => {
  const searchParams = useSearchParams();
  const user_id = searchParams.get("user_id");
  const access_token = searchParams.get("access_token");
  const refresh_token = searchParams.get("refresh_token");
  const is_new = searchParams.get("new");
  return (
    <div>
      <p>{user_id}</p>
      <p>{access_token}</p>
      <p>{refresh_token}</p>
      <p>{is_new}</p>
    </div>
  );
};

export default page;
