import React from "react";
import { Button } from "@nextui-org/button";

const FloatingButton = () => {
  return (
    <Button className="fixed bottom-20 right-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition ease-in-out duration-300">
      + 칸 추가
    </Button>
  );
};

export default FloatingButton;
