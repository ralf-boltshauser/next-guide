"use client";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface ReadingListContextType {
  readingList: string[];
  addToReadingList: (title: string) => void;
}

const ReadingListContext = createContext<ReadingListContextType | undefined>(
  undefined
);

export const useReadingList = (): ReadingListContextType => {
  const context = useContext(ReadingListContext);
  if (!context) {
    throw new Error("useReadingList must be used within a ReadingListProvider");
  }
  return context;
};

interface ReadingListProviderProps {
  children: ReactNode;
}

export const ReadingListProvider: React.FC<ReadingListProviderProps> = ({
  children,
}) => {
  const [readingList, setReadingList] = useState<string[]>([]);

  const addToReadingList = (title: string) => {
    setReadingList((prevList) => {
      if (!prevList.includes(title)) {
        return [...prevList, title];
      }
      return prevList;
    });
  };

  return (
    <ReadingListContext.Provider value={{ readingList, addToReadingList }}>
      {children}
    </ReadingListContext.Provider>
  );
};
