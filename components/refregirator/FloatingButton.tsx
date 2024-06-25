import React from "react";
import SearchButton from "./SearchButton";
import AddFoodButton from "./AddFoodButton";

// 이름, 넣은날, 유통기한, 넣는 칸

const FloatingButton = () => {
  return (
    <div className="fixed bottom-20 right-20 flex flex-col gap-3">
      <SearchButton />
    </div>
  );
};

export default FloatingButton;
