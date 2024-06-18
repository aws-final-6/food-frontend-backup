"use client";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";
import { Chip } from "@nextui-org/chip";

const tag_one = [
  "밑반찬",
  "메인반찬",
  "국/탕",
  "찌개",
  "디저트",
  "면/만두",
  "밥/죽/떡",
  "퓨전",
  "김치/젓갈/장류",
  "양념/소스/잼",
  "양식",
  "샐러드",
  "스프",
  "빵",
  "과자",
  "차/음료/술",
];
const tag_two = [
  "일상",
  "초스피드",
  "손님접대",
  "술안주",
  "다이어트",
  "도시락",
  "영양식",
  "간식",
  "야식",
  "푸드스타일링",
  "해장",
  "명절",
  "이유식",
];
const SignUppage = () => {
  const { theme } = useTheme();
  return (
    <div className="flex flex-1 justify-center items-center">
      <Card className="p-5 md:w-1/3">
        <CardHeader className="flex flex-col gap-5">
          <Image
            src={
              theme === "light" || theme == null
                ? "/logo_light.png"
                : "/logo_dark.png"
            }
            alt="Logo"
            width={200}
            height={50}
          />
          <h1 className="font-jua text-xl">회원가입</h1>
        </CardHeader>
        <CardBody className="flex flex-col gap-10">
          <Input type="email" label="이메일" w-full />
          <Input type="text" label="닉네임" w-full />
          <div>
            <p className="font-jua">Q. 주로 어떤 요리를 하시나요?</p>
            <div className="pt-2">
              {tag_one.map((tag, i) => (
                <Chip key={tag} className="m-1 bg-main hover:bg-orange-500">
                  {tag}
                </Chip>
              ))}
            </div>
          </div>
          <div>
            <p className="font-jua">Q. 주로 어떤 목적으로 요리를 하시나요?</p>
            <div className="pt-2">
              {tag_two.map((tag, i) => (
                <Chip key={tag} className="m-1 bg-sub hover:bg-yellow-500 ">
                  {tag}
                </Chip>
              ))}
            </div>
          </div>
        </CardBody>
        <CardFooter className="flex flex-col justify-center items-center py-10 gap-5">
          <Checkbox>
            <p className="text-sm">
              최신 레시피 정보를 이메일 또는 카카오톡으로 받겠습니다.
            </p>
          </Checkbox>
          <Button
            className="bg-subdark w-1/4 text-white"
            variant="flat"
            size="lg"
          >
            회원가입
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUppage;
