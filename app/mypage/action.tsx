"use server";

const API_URL = process.env.API_URL;

export async function MyPageAPI(userId: string) {
  const userInfo = {
    user_id: userId,
  };

  try {
    const response = await fetch(`${API_URL}/mypage/getProfile`, {
      method: "POST",
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();
    //console.log(responseData);
    return responseData;
  } catch (error) {
    console.error("Error:", error);
    return "로그인 실패 했습니다.";
  }
}
