"use server";
const API_URL = process.env.API_URL;

export async function SignupAPI(formData: FormData) {
  const userInfo = {
    user_id: formData.get("id"),
    user_email: formData.get("email"),
    user_nickname: formData.get("nickname"),
    user_provider: formData.get("provider"),
    user_subscription: formData.get("subscription"),
    user_prefer: [
      {
        cate_no: formData.get("prefer_one"),
        situ_no: formData.get("prefer_two"),
      },
    ],
  };
  //console.log(userInfo);
  try {
    const response = await fetch(`${API_URL}/auth/signup`, {
      method: "POST",
      body: JSON.stringify(userInfo),
      headers: {
        "content-type": "application/json",
      },
    });

    const responseData = await response.status;
    //console.log(responseData);
    return responseData;
  } catch (error) {
    console.error("Error:", error);
    return "회원가입 실패했습니다.";
  }
}
