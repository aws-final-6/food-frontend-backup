"use server";

const API_URL = process.env.API_URL;

export async function SearchRecipeAPI(keyword: string) {
  const recipeName = {
    keyword: keyword,
  };
  //console.log(recipeName);

  try {
    const response = await fetch(`${API_URL}/search/getTitleSearchList`, {
      method: "POST",
      body: JSON.stringify(recipeName),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();
    //console.log(responseData.search_list);
    return responseData.search_list;
  } catch (error) {
    console.error("Error:", error);
    return "로그인 실패 했습니다.";
  }
}

export async function SearchIngredientAPI(keyword: string) {
  const recipeName = {
    keyword: keyword,
  };
  console.log(recipeName);

  try {
    const response = await fetch(`${API_URL}/search/getIngSearchList`, {
      method: "POST",
      body: JSON.stringify(recipeName),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();
    //console.log(responseData.search_list);
    return responseData.search_list;
  } catch (error) {
    console.error("Error:", error);
    return "로그인 실패 했습니다.";
  }
}
