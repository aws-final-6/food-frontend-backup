import { Button } from "@nextui-org/button";
import { Card, CardFooter, CardHeader, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";

const food_one = [
  { name: "계란", date: "2024-06-13", color: "#EDB8B8" },
  { name: "오이", date: "2024-06-13", color: "#EDB8B8" },
];
export default function MyRefrigeratorPage() {
  return (
    <>
      <Card>
        <CardHeader className="flex flex-col font-jua">냉장고</CardHeader>
        <CardBody>
          <ul className="flex flex-wrap gap-2">
            {food_one.map((food, i) => (
              <li
                key={i}
                className="shadow-lg transition-transform transform duration-150 bg-blue-200 w-40 h-40"
              >
                <div className="p-6">
                  <p className="font-gamja">{food.name}</p>
                  <p className="font-gamja">{food.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
      <Card>
        <CardHeader className="flex flex-col gap-5 font-jua min-h-96">
          냉동고
        </CardHeader>
      </Card>
    </>
  );
}
