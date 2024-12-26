import React from "react";
import CardList from "../components/posts/cardList";
import ViewButton from "../components/posts/viewButton";
import Link from "next/link";
const base_url = "https://jsonplaceholder.typicode.com/posts";

interface Iposts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const posts = async () => {
  const response = await fetch(base_url, {
    cache: "no-store",
  });
  const posts: Iposts[] = await response.json();
  return (
    <div className="grid grid-rows justify-items-center p-8 pb-20 gap-6 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl"> Posts List</h1>
      {posts.map((post) => {
        return (
          <CardList key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <h2 className="card-title">{post.title}</h2>
            </Link>
            <p>{post.body}</p>
            <div className="card-actions justify-end">
              <ViewButton post={post} />
            </div>
          </CardList>
        );
      })}
    </div>
  );
};

export default posts;
