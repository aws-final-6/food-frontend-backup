import React from "react";

// 이름, 넣은날, 유통기한, 넣는 칸

const FloatingButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="fixed bottom-20 right-20 flex flex-col gap-3">
      {children}
    </div>
  );
};

export default FloatingButton;
