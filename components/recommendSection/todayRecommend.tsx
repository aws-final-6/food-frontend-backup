"use client";
import React, { useContext, useEffect, useState } from "react";
import { Card, CardBody, CardHeader, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { getPrefered } from "./action";
import { UserContext } from "@/app/providers";

interface IPrefer {
  recipe_no: number;
  recipe_title: string;
  recipe_thumbnail: string;
}
const TodayRecommend = () => {
  const { userData } = useContext(UserContext);
  const [data, setData] = useState<IPrefer[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getPrefered(userData[0].id);
      setData(result);
    };
    fetchData();
  }, [userData]);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {data.map((food, i) => (
        <Card key={i} className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-center justify-center">
            <h4 className="font-bold text-large">{food.recipe_title}</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2 flex items-center justify-center">
            <Image
              alt={food.recipe_title}
              className="object-cover rounded-xl"
              src={food.recipe_thumbnail}
              width={200}
              height={200}
            />
          </CardBody>
          <CardFooter className="justify-center">
            <Link href={`/recipe/${food.recipe_no}`}>
              <Button className="bg-sub" variant="flat">
                레시피 보기
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default TodayRecommend;
