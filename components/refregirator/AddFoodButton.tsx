"use client";
import { Button } from "@nextui-org/button";
import React, { FormEvent, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import { Input } from "@nextui-org/input";
import { AddCardProps, CardType } from "@/app/myrefregirator/page";

const AddFoodButton = ({ setCards }: AddCardProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [adding, setAdding] = useState(false);
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newCard: CardType = {
      column: "ref_1",
      title: name,
      id: Math.random().toString(),
      date: startDate,
    };

    setCards((pv) => [...pv, newCard]);

    setAdding(false);
  };

  return (
    <div>
      <Button
        className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition ease-in-out duration-300"
        onPress={onOpen}
      >
        + 음식 추가
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                음식 추가
              </ModalHeader>
              <form onSubmit={handleSubmit}>
                <ModalBody>
                  <Input
                    type="text"
                    label="음식 이름"
                    isRequired
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <Input
                    type="date"
                    label="냉장고에 넣은 날짜"
                    isRequired
                    onChange={(e) => {
                      setStartDate(e.target.value);
                    }}
                  />
                  <Input
                    type="date"
                    label="유통기한"
                    onChange={(e) => {
                      e.target.value;
                    }}
                  />
                  <input type="file" />
                  <input type="color" />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    닫기
                  </Button>
                  <Button color="primary" onPress={onClose} type="submit">
                    추가
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AddFoodButton;
