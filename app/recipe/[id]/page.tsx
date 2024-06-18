import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";

import Image from "next/image";
const sampleData = {
  name: "잡채 황금레시피로 불지않게 맛있게 만드는법",
  image: [
    "https://recipe1.ezmember.co.kr/cache/recipe/2021/02/17/d9510262b90bf7b3a1fde8ebe200eb0e1_f.jpg",
    "https://recipe1.ezmember.co.kr/cache/recipe/2021/02/17/d9510262b90bf7b3a1fde8ebe200eb0e1.jpg",
  ],
  author: "쿡딱",
  datePublished: "2021-02-17T21:05:05+09:00",
  description:
    "명절, 손님초대 음식으로 가장 좋아하는 음식이 잡채인데요. 당면 삶지 않고 절대 불지 않게 만드는 잡채 레시피 가지고 와봤습니다. 일상의 특별함을 만들고 싶을 때나 명절때 이 레시피 하나면 무조건 칭찬받습니다.~",
  recipeIngredient: [
    "당면 300g",
    "돼지고기 300g",
    "말린 목이버섯 3개",
    "시금치 1/2단",
    "당근 1/2개",
    "양파 1개",
    "노란파프리카 1/2개",
    "빨간파프리카 1/2개",
    "생 표고버섯 3개",
    "진간장 2Ts",
    "맛술 1Ts",
    "설탕 1Ts",
    "참기름 1Ts",
    "다진마늘 1Ts",
    "후추 조금",
    "진간장 1/3컵",
    "설탕 2Ts",
    "올리고당 2Ts",
    "식용유 3Ts",
    "후추 약간 ",
    "굴소스 1ts",
    "물 1컵",
  ],
  recipeInstructions: [
    {
      "@type": "HowToStep",
      text: "당면과 건 목이버섯은 각각 1시간, 20분정도 불려주세요.",
      image:
        "https://recipe1.ezmember.co.kr/cache/recipe/2021/02/17/746bf59b5384cc8167cd91ca0a4d9dbd1.jpg",
    },
    {
      "@type": "HowToStep",
      text: "잡채 야채 재료들을 길쭉하게 썰어 준비해줄께요. 목이버섯은 손가락크기정도로 썰어주세요.",
      image:
        "https://recipe1.ezmember.co.kr/cache/recipe/2021/02/17/e5c35aa6687d6e9a334cc8ff1065dc791.jpg",
    },
    {
      "@type": "HowToStep",
      text: "잡채용 돼지고기와 표고버섯에 밑간을 해줄께요.  볼에 고기와 표고버섯을 넣고 간장, 맛술, 설탕, 다진마늘, 참기름, 후추 넣고 밑간이 베이게 골고루 주물주물 해주세요.  ​",
      image:
        "https://recipe1.ezmember.co.kr/cache/recipe/2021/02/17/60dc187842bab0b2ba67c9a95a16f7901.jpg",
    },
    {
      "@type": "HowToStep",
      text: "끓는 물에 소금을 넣고 시금치 넣고 다시 끓어오르면 건져내어 찬물에 헹구고 물기를 꼭 짜주세요. 물기 짠 시금치에 소금과 참기름만 넣고 살살 무쳐줄께요.",
      image:
        "https://recipe1.ezmember.co.kr/cache/recipe/2021/02/17/5270085118a4447b6d829ddaffe2a8521.jpg",
    },
    {
      "@type": "HowToStep",
      text: "잡채양념 - 간장, 물, 후추, 올리고당, 설탕, 굴소스, 식용유를 정량대로 넣고 큰 볼에 잘 섞어주면 양념 완성입니다.  ​",
      image:
        "https://recipe1.ezmember.co.kr/cache/recipe/2021/02/17/d44752228ed924bce5749a3e8ff734501.jpg",
    },
    {
      "@type": "HowToStep",
      text: "먼저 달궈진 궁중팬에 기름을 살짝 둘러 센불에서 양파, 당근, 파프리카, 목이버섯을 넣고 볶아주세요. 적당히 숨이 죽으면 불을 끄고 따로 접시에 옮겨 담아 한김 식혀주세요.  ​",
      image:
        "https://recipe1.ezmember.co.kr/cache/recipe/2021/02/17/7d287672d3e3c816436c8374a5ed4d041.jpg",
    },
    {
      "@type": "HowToStep",
      text: "같은 팬에 바로 밑간 해 놓은 돼지고기와 표고버섯도 달달달 ~ 볶아주세요. 볶아진 고기도 접시에 펼쳐 한김 식혀줄께요.",
      image:
        "https://recipe1.ezmember.co.kr/cache/recipe/2021/02/17/e2a18f721114182b095919eba8b42ab41.jpg",
    },
    {
      "@type": "HowToStep",
      text: "고기 볶았던 팬에 강불로 불을 올리고  잡채양념을 넣고 끓이다가 끓어오르면 바로 불린 당면을 넣고 볶듯이 끓여주세요.",
      image:
        "https://recipe1.ezmember.co.kr/cache/recipe/2021/02/17/cb35c74ff32af412201ba29d232499e91.jpg",
    },
    {
      "@type": "HowToStep",
      text: "당면이 익으면 가위로 먹기 좋게 한번씩 잘라주고, 양념이 없어질때 까지 볶다가 불을 꺼주세요.",
      image:
        "https://recipe1.ezmember.co.kr/cache/recipe/2021/02/17/84fc11354957a05ff8825f4c60f19afa1.jpg",
    },
    {
      "@type": "HowToStep",
      text: "당면까지 다 볶으면 미리 준비해놓은 야채와 고기를 바로 위에 붓고 참기름 뿌려서 골고루 무쳐주세요.  뜨거우니 면장갑과 위생장갑 이용해주세요.",
      image:
        "https://recipe1.ezmember.co.kr/cache/recipe/2021/02/17/e258b465e1705eb89d7516291a15e8da1.jpg",
    },
    {
      "@type": "HowToStep",
      text: "참깨 솔솔 뿌려 고소함 업 시키면 잡채 완성입니다. 비주얼도 맛도 끝내줍니다. ^^",
      image:
        "https://recipe1.ezmember.co.kr/cache/recipe/2021/02/17/b90a6b16bdad284c75ff5a80d7cf86721.jpg",
    },
  ],
};
const RecipePage = () => {
  return (
    <div>
      <Card>
        <CardHeader className="flex flex-col justify-center items-center gap-5 py-20">
          <Image
            src={sampleData.image[0]}
            alt="food"
            width={400}
            height={400}
            className="rounded"
          />
          <h2 className="font-jua text-3xl">{sampleData.name}</h2>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-3">
            {sampleData.recipeIngredient.map((ingredient, i) => (
              <p key={i}>{ingredient}</p>
            ))}
          </div>

          {sampleData.recipeInstructions.map((recipe, i) => (
            <div className="grid grid-cols-3 mt-3" key={i}>
              <Image src={recipe.image} width={300} height={300} alt="image" />
              <p className="grid">{i}</p>
              <p>{recipe.text}</p>
            </div>
          ))}
        </CardBody>
      </Card>
    </div>
  );
};

export default RecipePage;
