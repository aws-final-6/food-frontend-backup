"use client";
import { Input } from "@nextui-org/input";
import React, { useEffect, useState } from "react";
import { SearchIcon } from "../icons";
// import { getSearchResult } from "./action";
import { Listbox, ListboxItem } from "@nextui-org/listbox";
import Fuse from "fuse.js";
import { Datahandler } from "./action";

interface SearchResult {
  refIndex: number;
  item: string;
}

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [data, setData] = useState<string[]>([]);

  const options = {
    keys: ["name"],
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await Datahandler();
      setData(res);
    };

    fetchData();
  }, []);

  const fuse = new Fuse(data, options);

  async function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    console.log(value);
    setSearchTerm(value);
    if (value.length > 1) {
      // const searchResult = await getSearchResult(value);
      const searchResult = fuse.search(value);
      console.log(searchResult);
      setResults(searchResult.slice(0, 10));
    } else {
      setResults([]);
    }
  }
  return (
    <div>
      <Input
        aria-label="Search"
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm",
        }}
        labelPlacement="outside"
        placeholder="레시피 검색하기.."
        startContent={
          <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
        }
        type="search"
        onChange={handleSearch}
        value={searchTerm}
      />
      {results.length > 0 && (
        <div className="absolute z-10 w-[300px] bg-white shadow-lg mt-2 rounded-lg">
          <Listbox
            classNames={{
              base: "max-w-xs",
              list: "max-h-[300px] overflow-scroll",
            }}
          >
            {results.map((result) => (
              <ListboxItem
                key={result.refIndex}
                className="p-4 border-b last:border-b-0"
              >
                <div className="font-bold text-wrap">{result.item || ""}</div>
                {/* <div className="font-bold text-wrap">{result.label || ""}</div> */}

                {/* <div className="text-sm">
                  {result.value || "검색 결과 없음"}
                </div> */}
              </ListboxItem>
            ))}
          </Listbox>
        </div>
      )}
    </div>
  );
};

export default Searchbar;
