"use client";

import { useState } from "react";
import { executeServerActionFromClient } from "../actions/postActions";

export default function PostItem({
  title,
  body,
}: {
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
      <button
        className="border-2 p-1 my-2"
        onClick={() => executeServerActionFromClient({ title })}
      >
        Action with params
      </button>
      <br />
      <button className="border-2 p-1 my-2" onClick={() => titleAction()}>
        Bound action
      </button>
    </div>
  );
}
