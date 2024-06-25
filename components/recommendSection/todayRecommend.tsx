"use client";
import React, { useContext, useEffect, useState } from "react";
import { Card, CardBody, CardHeader, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { getPrefered } from "./action";
import { UserContext } from "@/app/providers";
import { FaRegStar, FaStar } from "react-icons/fa";

interface IPrefer {
  recipe_no: number;
  recipe_title: string;
  recipe_thumbnail: string;
}
const TodayRecommend = () => {
  const { userData, isUserDataEmpty } = useContext(UserContext);
  const [data, setData] = useState<IPrefer[]>([]);
  const [star, setStar] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getPrefered(userData[0].id);
      setData(result);
    };
    if (!isUserDataEmpty()) {
      fetchData();
    }
  }, [userData]);

  if (data.length == 0)
    return (
      <div className="flex flex-col gap-3">
        <p>오늘의 요리를 보시려면 로그인해주세요!</p>
        <Button className="bg-sub">로그인</Button>
      </div>
    );

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
          <CardFooter className="justify-center flex flex-row gap-5">
            <Link href={`/recipe/${food.recipe_no}`}>
              <Button className="bg-sub" variant="flat">
                레시피 보기
              </Button>
            </Link>
            {/* <Button variant="bordered" startContent={<FaRegStar />}>
              즐겨찾기
            </Button> */}
            <Button
              variant="bordered"
              isIconOnly
              color="warning"
              onClick={() => {
                setStar(!star);
              }}
            >
              {star ? <FaStar /> : <FaRegStar />}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default TodayRecommend;
