"use server";
const API_URL = process.env.API_URL;

export async function LoginAPI(provider: string) {
  const loginInfo = {
    provider: provider,
  };
  console.log(loginInfo);

  try {
    const response = await fetch(`${API_URL}/auth/requestToken`, {
      method: "POST",
      body: JSON.stringify(loginInfo),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.text();
    //console.log(responseData);
    return responseData;
  } catch (error) {
    console.error("Error:", error);
    return "로그인 실패 했습니다.";
  }
}
