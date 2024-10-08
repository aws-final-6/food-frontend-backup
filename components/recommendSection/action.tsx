"use server";
import { getRandomItems } from "@/utils/RandomGen";
const API_URL = process.env.API_URL;

export async function getSeasonal() {
  const res = await fetch(`${API_URL}/recipe/getSeasonalList`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const seasonalList = await res.json();

  return getRandomItems(seasonalList.seasonal_list, 4);
}

export async function getPrefered(userid: string) {
  const userInfo = {
    user_id: userid,
  };

  try {
    const response = await fetch(`${API_URL}/recipe/getPreferList`, {
      method: "POST",
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();

    return getRandomItems(responseData.prefer_list, 4);
  } catch (error) {
    console.error("Error:", error);
    return "로그인 실패 했습니다.";
  }
}
