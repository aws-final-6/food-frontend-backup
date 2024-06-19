"use client";
import React, { useContext, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { UserContext } from "@/app/providers";
import { useRouter } from "next/navigation";

const CheckAuth = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { updateUserData } = useContext(UserContext);

  const user_id = searchParams.get("user_id");
  const access_token = searchParams.get("access_token");
  const refresh_token = searchParams.get("refresh_token");
  const is_new = searchParams.get("new");

  useEffect(() => {
    if (user_id && access_token && refresh_token) {
      updateUserData({
        id: user_id,
        accessToken: access_token,
        refreshToken: refresh_token,
      });
      if (is_new == "true") {
        router.push("/signup");
      } else {
        router.push("/");
      }
    }
  }, []);

  return <div></div>;
};

export default CheckAuth;
