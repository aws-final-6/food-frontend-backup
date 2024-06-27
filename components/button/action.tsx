"use server";

const API_URL = process.env.API_URL;

export async function updateBookmark(userId: string, recipeNo: number) {
  const favoriteInfo = {
    user_id: userId,
    recipe_no: recipeNo,
  };
  try {
    const response = await fetch(`${API_URL}/bookmark/updateBookmark`, {
      method: "POST",
      body: JSON.stringify(favoriteInfo),
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

export async function removeBookmark(userId: string, recipeNo: number) {
  const favoriteInfo = {
    user_id: userId,
    recipe_no: recipeNo,
  };
  try {
    const response = await fetch(`${API_URL}/bookmark/removeBookmark`, {
      method: "POST",
      body: JSON.stringify(favoriteInfo),
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
