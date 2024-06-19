"use server";
const API_URL = process.env.API_URL;

export async function getRecipe(id: number) {
  const res = await fetch(`${API_URL}/recipe/getRecipe/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const recipeList = await res.json();

  return recipeList;
}
