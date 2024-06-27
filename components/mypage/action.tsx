"use server";

const API_URL = process.env.API_URL;

export async function mypageBookmark(userId: string) {
  const userInfo = {
    user_id: userId,
  };
  try {
    const response = await fetch(`${API_URL}/bookmark/getBookmarkList`, {
      method: "POST",
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();
    return responseData.user_bookmark;
  } catch (error) {
    console.error("Error:", error);
    return "로그인 실패 했습니다.";
  }
}
