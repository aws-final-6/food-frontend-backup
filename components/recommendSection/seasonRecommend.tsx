import React from "react";
import { Card, CardBody, CardHeader, CardFooter } from "@nextui-org/card";
import Image from "next/image";

const sampleData = [
  {
    name: "쑥갓무침 만들기",
    calories: 215,
    img_url:
      "https://postfiles.pstatic.net/MjAyNDA2MDJfMTM1/MDAxNzE3MzIyNTM5NDA5.axzEis6opR32g3GFhYmAYsvLvTVdkd9EN-PfxBeFw1kg.c3cy9fXQve-fs69WQWY3_fhxUS7O3ZQZE_Z0xvvi7rEg.JPEG/20240529%EF%BC%BF210603.jpg?type=w773",
  },
  {
    name: "통닭다리구이",
    calories: 215,
    img_url:
      "https://mblogthumb-phinf.pstatic.net/MjAyMzA2MDRfMjQ0/MDAxNjg1ODY2OTEyNjUz.SiM30yCctVCyqIKtzqUsQVSiRjFrsU6SV36WqbBV8wcg.EFpg_0r62w-EStSSgaBR5g_pAtdbHuQyCzMwnCeXh84g.JPEG.cleostar/%C5%EB%B4%DF%B4%D9%B8%AE%B1%B8%C0%CC.JPG?type=w210",
  },
  {
    name: "초당 옥수수",
    calories: 500,
    img_url:
      "https://blogfiles.pstatic.net/MjAyNDA1MDZfMTQw/MDAxNzE0OTI1MTM2NDg4.PsdwJRAKSf7d4GGcH1y4TZoDhtWRky_OiKaAnHl-f-Yg.GRrY7PMULnIOtWNmEiZLlFDDJzgNLarpf-KVVnpcKQcg.JPEG/SE-23c6d810-91b1-4215-add1-36d4d3318b23.jpg",
  },
  {
    name: "마늘쫑 무침",
    calories: 500,
    img_url:
      "https://blogfiles.pstatic.net/MjAyNDA1MTRfMjk3/MDAxNzE1NjE5ODEzOTMx.MaXEpIg1BMBBZ5OT9YBkO8mrTi1hLWPAKAmm9ypOzb8g.lxZ2j-3xd0OVCCg15bQgqxnDL2FKbsdMTMqtXeWAmTAg.PNG/SE-a512ea60-d058-4a96-8980-becdd7ac196f.png",
  },
];
const SeasonRecommend = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {sampleData.map((food, i) => (
        <Card key={i} className="py-4" isPressable>
          <CardHeader className="pb-0 pt-2 px-4 flex-col">
            <h4 className="font-bold text-large">{food.name}</h4>
            <small className="text-default-500">{food.calories} KCAL</small>
          </CardHeader>
          <CardBody className="overflow-visible py-2 flex items-center">
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

export default SeasonRecommend;
