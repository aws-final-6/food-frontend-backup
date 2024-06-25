"use client";

import React, { useState, DragEvent, FormEvent, ChangeEvent } from "react";
import { FiPlus, FiTrash } from "react-icons/fi";
import { motion } from "framer-motion";
import { FaFire } from "react-icons/fa";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import FloatingButton from "@/components/refregirator/FloatingButton";
import SearchButton from "@/components/refregirator/SearchButton";
import AddFoodButton from "@/components/refregirator/AddFoodButton";

export interface CardType {
  title: string;
  id: string;
  column: string;
  date: string;
}

export interface ColumnProps {
  title: string;
  cards: CardType[];
  column: string;
  setCards: React.Dispatch<React.SetStateAction<CardType[]>>;
}

export interface CardProps {
  title: string;
  id: string;
  column: string;
  date: string;
  handleDragStart: (
    e: DragEvent<HTMLDivElement>,
    card: { title: string; id: string; column: string; date: string }
  ) => void;
}

export interface DropIndicatorProps {
  beforeId: string | null;
  column: string;
}

export interface AddCardProps {
  column: string;
  setCards: React.Dispatch<React.SetStateAction<CardType[]>>;
}

const DEFAULT_CARDS: CardType[] = [
  { title: "비엔나 소세지", id: "1", column: "ref_2", date: "2024-03-20" },
  { title: "간장", id: "2", column: "ref_1", date: "2024-03-20" },
  {
    title: "참기름",
    id: "3",
    column: "ref_1",
    date: "2024-03-20",
  },
  {
    title: "어묵볶음",
    id: "5",
    column: "ref_3",
    date: "2024-03-20",
  },
  { title: "신라면", id: "6", column: "ref_4", date: "2024-03-20" },
  {
    title: "불닭볶음면",
    id: "7",
    column: "ref_1",
    date: "2024-03-20",
  },
  { title: "비빔면", id: "8", column: "ref_3", date: "2024-03-20" },
  {
    title: "진미채",
    id: "9",
    column: "ref_1",
    date: "2024-03-20",
  },
];

const Column: React.FC<ColumnProps> = ({ title, cards, column, setCards }) => {
  const [active, setActive] = useState(false);

  const handleDragStart = (e: DragEvent<HTMLDivElement>, card: CardType) => {
    e.dataTransfer.setData("cardId", card.id);
  };

  const handleDragEnd = (e: DragEvent<HTMLDivElement>) => {
    const cardId = e.dataTransfer.getData("cardId");

    setActive(false);
    clearHighlights();

    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);

    const before = element.dataset.before || "-1";

    if (before !== cardId) {
      let copy = [...cards];

      let cardToTransfer = copy.find((c) => c.id === cardId);
      if (!cardToTransfer) return;
      cardToTransfer = { ...cardToTransfer, column };

      copy = copy.filter((c) => c.id !== cardId);

      const moveToBack = before === "-1";

      if (moveToBack) {
        copy.push(cardToTransfer);
      } else {
        const insertAtIndex = copy.findIndex((el) => el.id === before);
        if (insertAtIndex === undefined) return;

        copy.splice(insertAtIndex, 0, cardToTransfer);
      }

      setCards(copy);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    highlightIndicator(e);

    setActive(true);
  };

  const clearHighlights = (els?: HTMLElement[]) => {
    const indicators = els || getIndicators();

    indicators.forEach((i) => {
      i.style.opacity = "0";
    });
  };

  const highlightIndicator = (e: DragEvent<HTMLDivElement>) => {
    const indicators = getIndicators();

    clearHighlights(indicators);

    const el = getNearestIndicator(e, indicators);

    el.element.style.opacity = "1";
  };

  const getNearestIndicator = (
    e: DragEvent<HTMLDivElement>,
    indicators: HTMLElement[]
  ) => {
    const DISTANCE_OFFSET = 50;

    const el = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();

        const offset = e.clientY - (box.top + DISTANCE_OFFSET);

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    );

    return el;
  };

  const getIndicators = () => {
    return Array.from(
      document.querySelectorAll(`[data-column="${column}"]`)
    ) as HTMLElement[];
  };

  const handleDragLeave = () => {
    clearHighlights();
    setActive(false);
  };

  const filteredCards = cards.filter((c) => c.column === column);

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-center">
        <p>{title}</p>
      </CardHeader>
      <CardBody className="min-h-30">
        <AddCard column={column} setCards={setCards} />
        <div
          onDrop={handleDragEnd}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`grid sm:grid-cols-3 grid-cols-2 gap-4 h-full w-full transition-colors ${
            active ? "bg-neutral-800/50" : "bg-neutral-800/0"
          }`}
        >
          {filteredCards.map((c) => {
            return (
              <StickyNote key={c.id} {...c} handleDragStart={handleDragStart} />
            );
          })}
          <DropIndicator beforeId={null} column={column} />
        </div>
      </CardBody>
    </Card>
  );
};

const StickyNote: React.FC<CardProps> = ({
  title,
  id,
  column,
  date,
  handleDragStart,
}) => {
  return (
    <div>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable="true"
        onDragStart={(e: any) =>
          handleDragStart(e, { title, id, column, date })
        }
        className="cursor-grab rounded border bg-blue-200 w-40 h-40 p-5 active:cursor-grabbing"
      >
        <p className="font-gaegu">{title}</p>
        <p className="font-gaegu">{date}</p>
      </motion.div>
    </div>
  );
};

const DropIndicator: React.FC<DropIndicatorProps> = ({ beforeId, column }) => {
  return (
    <div
      data-before={beforeId || "-1"}
      data-column={column}
      className="my-0.5 h-0.5 w-full bg-violet-400 opacity-0"
    />
  );
};

const AddCard: React.FC<AddCardProps> = ({ column, setCards }) => {
  const [text, setText] = useState("");
  const [adding, setAdding] = useState(false);
  const [date, setDate] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text.trim().length) return;

    const newCard: CardType = {
      column,
      title: text.trim(),
      id: Math.random().toString(),
      date,
    };

    setCards((pv) => [...pv, newCard]);

    setAdding(false);
  };

  return (
    <>
      {adding ? (
        <motion.form layout onSubmit={handleSubmit}>
          <textarea
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setText(e.target.value)
            }
            autoFocus
            placeholder="노트 추가"
            className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-600 placeholder-violet-300 focus:outline-0"
          />
          <div className="mt-1.5 flex items-center justify-end gap-1.5">
            <button
              onClick={() => setAdding(false)}
              className="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
            >
              Close
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-xs text-neutral-950 transition-colors hover:bg-neutral-300"
            >
              <span>Add</span>
              <FiPlus />
            </button>
          </div>
        </motion.form>
      ) : (
        <motion.button
          layout
          onClick={() => setAdding(true)}
          className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
        >
          <span>노트 추가</span>
          <FiPlus />
        </motion.button>
      )}
    </>
  );
};

export default function MyRefrigeratorPage() {
  const [cards, setCards] = useState<CardType[]>(DEFAULT_CARDS);
  return (
    <>
      <div className="w-full grid sm:grid-cols-2 gap-3 grid-cols-1">
        <Column
          title="냉장고"
          column="ref_1"
          cards={cards}
          setCards={setCards}
        />
        <Column
          title="냉동고"
          column="ref_2"
          cards={cards}
          setCards={setCards}
        />
        <Column
          title="아래 선반"
          column="ref_3"
          cards={cards}
          setCards={setCards}
        />
        <Column
          title="위에 선반"
          column="ref_4"
          cards={cards}
          setCards={setCards}
        />
        <Column
          title="김치 냉장고"
          column="ref_5"
          cards={cards}
          setCards={setCards}
        />
        <Column title="창고" column="ref_6" cards={cards} setCards={setCards} />
      </div>
      <div className="fixed bottom-20 right-20 flex flex-col gap-3">
        <SearchButton />
        <AddFoodButton setCards={setCards} column="에휴" />
      </div>
    </>
  );
}
