"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { executeServerActionFromClient } from "../actions/postActions";
import { useReadingList } from "../context/ReadingListContext";

interface PostItemProps {
  id: string;
  title: string;
  body: string;
}

const PostItem: React.FC<PostItemProps> = ({ id, title, body }) => {
  const [views, setViews] = useState<number>(0);
  const { addToReadingList } = useReadingList();

  // clear the views counter every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setViews(0);
    }, 10000);

    return () => clearInterval(interval);
  }, [views]);

  const titleAction = executeServerActionFromClient.bind(null, { title });

  return (
    <div
      onMouseEnter={() => {
        setViews((prev) => prev + 1);
        addToReadingList(title);
      }}
    >
      <h2 className="text-2xl font-bold">
        {title}, {views} views
      </h2>
      <p>{body}</p>
      <div className="flex flex-row gap-4">
        <button
          className="border-2 p-1 my-2"
          onClick={() => executeServerActionFromClient({ title })}
        >
          Action with params
        </button>
        <button className="border-2 p-1 my-2" onClick={() => titleAction()}>
          Bound action
        </button>
        <Link className="border-2 p-1 my-2" href={`/posts/${id}`}>
          Open Post
        </Link>
      </div>
    </div>
  );
};

export default PostItem;
