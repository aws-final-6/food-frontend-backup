import React from "react";
import { Button } from "@nextui-org/button";
import { FaSearch } from "react-icons/fa";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
const SearchButton = () => {
  return (
    <div>
      <Button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition ease-in-out duration-300">
        <FaSearch /> 검색
      </Button>
    </div>
  );
};

export default SearchButton;
