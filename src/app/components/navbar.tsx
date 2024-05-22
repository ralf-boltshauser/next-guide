"use client";

import Link from "next/link";
import { useReadingList } from "../context/ReadingListContext";

export default function Navbar() {
  const { readingList } = useReadingList();
  return (
    <nav className="flex  flex-row justify-between">
      <Link href="/">
        <h1 className="border-b mb-5">My Posts</h1>
      </Link>
      <div className="absolute bg-black/90 p-3 top-5 right-5 w-64">
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
