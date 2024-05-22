"use client";

import Link from "next/link";
import { useState } from "react";
import { executeServerActionFromClient } from "../actions/postActions";

export default function PostItem({
  id,
  title,
  body,
}: {
  id: string;
  title: string;
  body: string;
}) {
  const [views, setViews] = useState(0);
  const titleAction = executeServerActionFromClient.bind(null, { title });
  return (
    <div onMouseEnter={() => setViews((prev) => prev + 1)}>
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
}
