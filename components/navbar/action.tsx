"use server";
import { promises as fs } from "fs";
import path from "path";

export async function Datahandler() {
  const filePath = path.join(process.cwd(), "data.txt");
  const fileContents = await fs.readFile(filePath, "utf-8");
  const data = fileContents
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  //console.log(data);

  return data;
}
