"use client";
import React, { useContext, useEffect, useState } from "react";
import { Card, CardBody } from "@nextui-org/card";
import { mypageBookmark } from "./action";
import { UserContext } from "@/app/providers";
import FavoriteButton from "../button/FavoriteButton";

interface IBookmark {
  _id: string;
  recipe_no: string;
  recipe_title: string;
}
const Bookmark = () => {
  const [bookmark, setBookmark] = useState<IBookmark[]>([]);
  const { userData } = useContext(UserContext);
  useEffect(() => {
    const fetchData = async () => {
      const result = await mypageBookmark(userData[0].id);
      console.log(result);
      setBookmark(result);
    };
    fetchData();
  }, []);
  return (
    <Card>
      <CardBody className="flex flex-col gap-3">
        {bookmark.map((book) => (
          <div className="flex flex-row gap-5">
            <FavoriteButton recipe_no={Number(book.recipe_no)} />
            <p key={book._id}>{book.recipe_title}</p>
          </div>
        ))}
      </CardBody>
    </Card>
  );
};

export default Bookmark;
