"use client";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader, CardFooter } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { Input } from "@nextui-org/input";
import { MyPageAPI } from "./action";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../providers";

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

interface IUser {
  user_id: string;
  user_email: string;
  user_nickname: string;
  user_subscription: boolean;
  user_prefer: [
    {
      cate_no: number;
      situ_no: number;
    }
  ];
}

export default function MyPage() {
  const { userData } = useContext(UserContext);
  const [data, setData] = useState<IUser | null>(null);
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await MyPageAPI(userData[0].id);
      setData(result);
      setNickname(result.user_nickname);
      console.log(result);
    };
    fetchData();
  }, [userData]);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <Card className="p-10">
        <CardHeader>마이 페이지</CardHeader>
        <CardBody className="flex flex-col gap-5">
          <Input label="이메일" value={data.user_email} isDisabled />
          <Input
            label="닉네임"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <div>
            <p className="font-jua">Q. 주로 어떤 요리를 하시나요?</p>
            <div className="pt-2">
              {tag_one.map((tag, i) => (
                <Chip key={tag.id} className="m-1 bg-main hover:bg-orange-500">
                  {tag.label}
                </Chip>
              ))}
            </div>
          </div>
          <div>
            <p className="font-jua">Q. 주로 어떤 목적으로 요리를 하시나요?</p>
            <div className="pt-2">
              {tag_two.map((tag, i) => (
                <Chip key={tag.id} className="m-1 bg-sub hover:bg-yellow-500 ">
                  {tag.label}
                </Chip>
              ))}
            </div>
          </div>
          <p>즐겨찾기</p>

          <p>구독</p>
          <Button>저장</Button>
        </CardBody>
      </Card>
    </div>
  );
}
