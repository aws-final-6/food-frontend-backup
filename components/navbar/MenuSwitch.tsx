"use client";
import React from "react";
import { Switch } from "@nextui-org/switch";
import { BiSolidFoodMenu } from "react-icons/bi";
import { FaShoppingBag } from "react-icons/fa";
export const MenuSwitch = () => {
  return (
    <Switch
      defaultSelected
      size="lg"
      color="warning"
      startContent={<BiSolidFoodMenu />}
      endContent={<FaShoppingBag />}
    />
  );
};
