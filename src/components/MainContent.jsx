import React from 'react';
import { formatDate } from '../utils/formatDate';

export default function MainContent({ post }) {
  const { image, title, description, date } = post || {};

  return (
    <section className="w-full md:w-2/3 lg:w-1/2 p-4 flex-grow order-1 md:order-2">
      <div className="bg-secondary-light placeholder:text-center md:border-l lg:border-r border-primary-dark md:px-8 h-full flex flex-col">
        <div className="h-[67%] mb-4 md:mb-8 rounded-lg overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="md:text-center flex flex-col gap-2 md:gap-4">
          <h2 className="text-lg font-semibold mb-1 sm:text-lg sm:font-semibold sm:mb-1 md:text-3xl md:font-bold">
            {title}
          </h2>
          <p className="text-xs sm:text-sm md:text-base line-clamp-3">
            {description}
          </p>
          <p className="text-xs opacity-80">{formatDate(date)}</p>
        </div>
      </div>
    </section>
  );
}
