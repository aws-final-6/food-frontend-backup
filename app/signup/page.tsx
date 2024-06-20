"use client";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import React, {
  FormEvent,
  useState,
  useContext,
  useEffect,
  useLayoutEffect,
} from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";
import { Chip } from "@nextui-org/chip";
import clsx from "clsx";
import { UserContext } from "../providers";
import { SignupAPI } from "./action";
import { notFound, useRouter } from "next/navigation";

const tag_one = [
  { id: 63, label: "밑반찬" },
  { id: 56, label: "메인반찬" },
  { id: 54, label: "국/탕" },
  { id: 55, label: "찌개" },
  { id: 60, label: "디저트" },
  { id: 53, label: "면/만두" },
  { id: 52, label: "밥/죽/떡" },
  { id: 61, label: "퓨전" },
  { id: 57, label: "김치/젓갈/장류" },
  { id: 58, label: "양념/소스/잼" },
  { id: 65, label: "양식" },
  { id: 64, label: "샐러드" },
  { id: 68, label: "스프" },
  { id: 66, label: "빵" },
  { id: 69, label: "과자" },
  { id: 59, label: "차/음료/술" },
  { id: 62, label: "기타" },
];
const tag_two = [
  { id: 12, label: "일상" },
  { id: 18, label: "초스피드" },
  { id: 13, label: "손님접대" },
  { id: 19, label: "술안주" },
  { id: 21, label: "다이어트" },
  { id: 15, label: "도시락" },
  { id: 43, label: "영양식" },
  { id: 17, label: "간식" },
  { id: 45, label: "야식" },
  { id: 46, label: "해장" },
  { id: 44, label: "명절" },
  { id: 14, label: "이유식" },
  { id: 22, label: "기타" },
];
const SignUppage = () => {
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [firstTag, setFirstTag] = useState<number | null>(null);
  const [secondTag, setSecondTag] = useState<number | null>(null);
  const [subscribe, setSubscribe] = useState(false);
  const { userData } = useContext(UserContext);
  const router = useRouter();

  useLayoutEffect(() => {
    if (userData.length === 0) {
      notFound();
    }
  }, []);

  async function hanldeSignupButton(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formdata = new FormData(event.currentTarget);
    formdata.append("subscription", subscribe.toString());
    if (firstTag) formdata.append("prefer_one", firstTag.toString());
    if (secondTag) formdata.append("prefer_two", secondTag.toString());

    formdata.append("id", userData[0].id);
    formdata.append("provider", userData[0].provider);
    const data = await SignupAPI(formdata);
    if (data === 201) router.push("/");
  }

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
        <form onSubmit={hanldeSignupButton}>
          <CardBody className="flex flex-col gap-10">
            <Input
              type="email"
              name="email"
              label="이메일"
              w-full
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isRequired
            />
            <Input
              type="text"
              label="닉네임"
              name="nickname"
              w-full
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              isRequired
            />
            <div>
              <p className="font-jua">Q. 주로 어떤 요리를 하시나요?</p>
              <div className="pt-2">
                {tag_one.map((tag, i) => (
                  <Chip
                    key={tag.id}
                    className={clsx(
                      "m-1 hover:bg-orange-500 dark:text-subdark",
                      {
                        "bg-orange-900": firstTag === tag.id,
                        "text-white dark:text-white": firstTag === tag.id,
                        "bg-main": firstTag !== tag.id,
                      }
                    )}
                    onClick={() => setFirstTag(tag.id)}
                  >
                    {tag.label}
                  </Chip>
                ))}
              </div>
            </div>
            <div>
              <p className="font-jua">Q. 주로 어떤 목적으로 요리를 하시나요?</p>
              <div className="pt-2">
                {tag_two.map((tag, i) => (
                  <Chip
                    key={tag.id}
                    className={clsx(
                      "m-1 hover:bg-yellow-500 dark:text-subdark",
                      {
                        "bg-yellow-700": secondTag === tag.id,
                        "text-white dark:text-white": secondTag === tag.id,
                        "bg-sub": secondTag !== tag.id,
                      }
                    )}
                    onClick={() => setSecondTag(tag.id)}
                  >
                    {tag.label}
                  </Chip>
                ))}
              </div>
            </div>
          </CardBody>
          <CardFooter className="flex flex-col justify-center items-center py-10 gap-5">
            <Checkbox
              onChange={() => setSubscribe(!subscribe)}
              isSelected={subscribe}
            >
              <p className="text-sm">
                최신 레시피 정보를 이메일 또는 카카오톡으로 받겠습니다.
              </p>
            </Checkbox>
            <Button
              className="bg-subdark w-1/4 text-white"
              variant="flat"
              size="lg"
              type="submit"
            >
              회원가입
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default SignUppage;
