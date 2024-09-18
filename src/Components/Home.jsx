import React, { useState } from "react";
import BlogCard from "./BlogCard";

const Home = () => {
  const [posts, setPosts] = useState([
    {
      title: "This is my first blog",
      content:
        "This time i am trying to create a blog website everything by my own without any help form youtube. I already completed by backend and its working properly and is completely fine",
    },
  ]);

  return (
    <div>
      <BlogCard blogs={posts} />
    </div>
  );
};

export default Home;
