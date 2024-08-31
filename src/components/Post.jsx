import React from "react";
import { formatDate } from "../utils/formatDate";

export default function Post({ image, title, description, date }) {
  return (
    <div>
      <div className="aspect-w-1 aspect-h-1 mb-4 rounded-lg overflow-hidden">
        <img src={image} alt="image" className="w-full h-full object-cover" />
      </div>
      <h2 className="text-lg font-semibold font-libre mb-1">{title}</h2>
      <p className="text-xs mb-2 line-clamp-3">{description}</p>
      <p className="text-xs opacity-80">{formatDate(date)}</p>
    </div>
  );
}