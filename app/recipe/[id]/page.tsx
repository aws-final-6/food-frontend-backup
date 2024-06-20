import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import Image from "next/image";
import { subtitle } from "@/components/primitives";
import { Chip } from "@nextui-org/chip";
import { getRecipe } from "./action";

interface IIngredient {
  ingredient: string;
  amount: string;
}

interface IInstruction {
  step: string;
  image: string;
}

const RecipePage = async ({ params }: { params: { id: number } }) => {
  const recipe_id = params.id;
  const data = await getRecipe(recipe_id);
  console.log(data);

  return (
    <div>
      <Card>
        <CardHeader className="flex flex-col justify-center items-center gap-5 py-20">
          <Image
            src={data.image[0]}
            alt="food"
            width={400}
            height={400}
            className="rounded"
          />
          <h2 className="font-jua text-3xl">{data.name}</h2>
        </CardHeader>
        <CardBody className="flex flex-col justify-center items-center gap-10">
          <div className="w-1/2">
            <p className={subtitle()}>재료</p>
            <div className="grid grid-cols-3 border-main border-4 border-dashed">
              {data.recipeIngredient.map((ingredient: IIngredient) => (
                <p key={ingredient.ingredient} className="text-center">
                  {ingredient.ingredient} {ingredient.amount}
                </p>
              ))}
            </div>
          </div>
          <div>
            {data.recipeInstructions.map((recipe: IInstruction, i: number) => (
              <div className="grid grid-cols-2 w-9/12 mt-3" key={i}>
                <Image
                  src={recipe.image}
                  width={300}
                  height={300}
                  alt="image"
                />
                <div className="flex flex-row gap-2">
                  <Chip color="warning" variant="flat">
                    {i + 1}
                  </Chip>
                  <p>{recipe.step}</p>
                </div>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default RecipePage;
