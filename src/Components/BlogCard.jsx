import React from "react";

const BlogCard = ({ blogs }) => {
  return (
    <div className="w-1/2 mx-auto mt-2 space-y-2">
      {blogs.map((blog) => (
        <div className="bg-white p-5 shadow-lg">
          {blog.title}
          {blog.content}
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
