import React from 'react';
import RightPost from './RightPost';

export default function RightSidebar({ posts }) {
  return (
    <aside className="w-full lg:w-1/4 p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-md font-semibold font-libre mb-1">Most Popular</h2>
        <a href="/archive" className="font-cinzel font-bold text-xs">View All</a>
      </div>
      <div className="flex h-full flex-col gap-0 md:flex-row md:gap-8 lg:flex-col">
        {posts.map((post) => (
          <RightPost
            key={post.id}
            title={post.title}
            date={post.date}
            description={post.description}
          />
        ))}
      </div>
    </aside>
  );
}
