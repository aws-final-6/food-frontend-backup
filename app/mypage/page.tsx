"use client";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader, CardFooter } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { Input } from "@nextui-org/input";

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

export default function MyPage() {
  return (
    <div>
      <Card className="p-10">
        <CardHeader>마이 페이지</CardHeader>
        <CardBody className="flex flex-col gap-5">
          <Input label="이메일" isDisabled />
          <Input label="닉네임" />
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
          <p>즐겨찾기</p>

          <p>구독</p>
          <Button>저장</Button>
        </CardBody>
      </Card>
    </div>
  );
}
