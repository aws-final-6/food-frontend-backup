"use client";

import React, { useContext, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { UserContext } from "@/app/providers";
import { useRouter } from "next/navigation";
import { getBookmark } from "./action";

const CheckAuth = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { updateUserData } = useContext(UserContext);

  const user_id = searchParams.get("user_id");
  const access_token = searchParams.get("access_token");
  const refresh_token = searchParams.get("refresh_token");
  const is_new = searchParams.get("new");

  useEffect(() => {
    const fetchDataAndSetUserData = async (userId: string) => {
      try {
        const favorite = await getBookmark(userId); // Wait for the promise to resolve
        updateUserData({
          id: userId,
          accessToken: access_token || "",
          refreshToken: refresh_token || "",
          favorite: favorite || [], // Initialize as empty array if favorite is undefined
        });

        // Redirect based on is_new flag
        if (is_new === "true") {
          router.push("/signup");
        } else {
          router.push("/");
        }
      } catch (error) {
        console.error("Error fetching bookmark:", error);
        // Handle error appropriately (e.g., show error message)
      }
    };

    if (user_id && access_token && refresh_token) {
      fetchDataAndSetUserData(user_id);
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
