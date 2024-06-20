import React from "react";
import { SearchIngredientAPI } from "@/components/navbar/action";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { subtitle } from "@/components/primitives";

interface IMeta {
  recipe_no: number;
  recipe_title: string;
  recipe_thumbnail: string;
}

const page = async ({ params }: { params: { slug: string } }) => {
  const keyword = decodeURIComponent(params.slug);
  const data = await SearchIngredientAPI(keyword);
  console.log(data);
  return (
    <>
      <p className={subtitle()}>{keyword}</p>
      {data && data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
          {data.map((food: IMeta, i: number) => (
            <Card key={i} className="py-4" isPressable>
              <CardHeader className="pb-0 pt-2 px-4 flex-col">
                <h4 className="font-bold text-large">{food.recipe_title}</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2 flex items-center">
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
                  <Button className="bg-sub">레시피 보기</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <p>아무런 레시피가 없네요 ㅠㅠ</p>
      )}
    </>
  );
};

export default page;
