"use client";
import React from "react";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import { useTheme } from "next-themes";
import { KakaoLogo, NaverLogo, GoogleLogo } from "../icons";

const OauthButton = () => {
  const { theme } = useTheme();
  return (
    <Card>
      <CardBody className="p-10 flex flex-col gap-5">
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
        <Button
          variant="shadow"
          className="bg-kakao"
          startContent={<KakaoLogo className="w-5" />}
        >
          카카오로 로그인
        </Button>
        <Button
          variant="shadow"
          className="bg-naver text-white"
          startContent={<NaverLogo />}
        >
          네이버로 로그인
        </Button>
        <Button
          variant="shadow"
          className=" bg-slate-100"
          startContent={<GoogleLogo />}
        >
          구글로 로그인
        </Button>
      </CardBody>
    </Card>
  );
};

export default OauthButton;
