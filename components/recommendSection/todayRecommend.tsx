import React from "react";
import { Card, CardBody, CardHeader, CardFooter } from "@nextui-org/card";
import Image from "next/image";

const sampleData = [
  {
    name: "연두부",
    calories: 215,
    img_url: "http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00028_1.png",
  },
  {
    name: "애호박 무침",
    calories: 215,
    img_url: "https://www.foodsafetykorea.go.kr/uploadimg/cook/10_00032_1.png",
  },
  {
    name: "곰국",
    calories: 500,
    img_url: "https://www.foodsafetykorea.go.kr/uploadimg/cook/10_00037_1.png",
  },
  {
    name: "계란 푸딩",
    calories: 500,
    img_url: "https://www.foodsafetykorea.go.kr/uploadimg/cook/10_00040_1.png",
  },
];

const TodayRecommend = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {sampleData.map((food, i) => (
        <Card key={i} className="py-4" isPressable>
          <CardHeader className="pb-0 pt-2 px-4 flex-col">
            <h4 className="font-bold text-large">{food.name}</h4>
            <small className="text-default-500">{food.calories} KCAL</small>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt={food.name}
              className="object-cover rounded-xl"
              src={food.img_url}
              width={200}
              height={200}
            />
          </CardBody>
          <CardFooter className="justify-center">레시피 보기</CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default TodayRecommend;
