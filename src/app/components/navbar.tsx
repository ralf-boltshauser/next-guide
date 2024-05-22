"use client";

import { useReadingList } from "../context/ReadingListContext";

export default function Navbar() {
  const { readingList } = useReadingList();
  return (
    <nav className="flex flex-row justify-between">
      <h1>My Posts</h1>
      <div className="absolute top-0 right-0 w-64">
        <span>Reading List ({readingList.length})</span>
        <ul>
          {readingList.map((title, index) => (
            <li className="w-64 truncate" key={index}>
              {title}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
