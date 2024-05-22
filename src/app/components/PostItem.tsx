"use client";

import { useState } from "react";

export default function PostItem({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  const [views, setViews] = useState(0);
  return (
    <div onMouseEnter={() => setViews((prev) => prev + 1)}>
      <h2 className="text-2xl font-bold">
        {title}, {views} views
      </h2>
      <p>{body}</p>
    </div>
  );
}
