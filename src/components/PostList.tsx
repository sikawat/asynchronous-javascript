import React from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <ul className="flex flex-col gap-6">
      {posts.map((post) => (
        <li
          key={post.id}
          className="border rounded-lg shadow-lg p-6 bg-white hover:bg-blue-50 hover:shadow-2xl transition-transform hover:scale-105 duration-300"
        >
          <h3 className="text-xl font-bold text-gray-800">{post.title}</h3>
          <p className="text-gray-600 mt-4">{post.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default PostList;