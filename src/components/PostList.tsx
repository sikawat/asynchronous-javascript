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
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <li
          key={post.id}
          className="border rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition-shadow"
        >
          <h3 className="text-lg font-bold text-gray-800">{post.title}</h3>
          <p className="text-gray-600 mt-2">{post.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
