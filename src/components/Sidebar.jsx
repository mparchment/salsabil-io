import React from 'react';
import Post from './Post';

export default function Sidebar({ posts }) {
  return (
    <aside className="w-full md:w-1/3 lg:w-1/4 p-4 flex flex-col justify-start gap-12 order-2 md:order-1 md:h-[75vh]">
      {posts.map((post) => (
        <Post
          key={post.id}
          image={post.image}
          title={post.title}
          description={post.description}
          date={post.date}
        />
      ))}
    </aside>
  );
}
