import React from "react";
import { formatDate } from "../utils/formatDate";

export default function RightPost({ title, date, description }) {
  return (
    <div className="flex flex-col justify-between gap-4 mb-2 lg:mb-0">
      <div className="flex-1">
        <h3 className="font-semibold mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-xs mb-2 line-clamp-3">
          {description}
        </p>
        <p className="text-xs opacity-80">{formatDate(date)}</p>
      </div>
    </div>
  );
}
