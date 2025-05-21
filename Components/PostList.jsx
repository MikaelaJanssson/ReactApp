import React from "react";
import Post from "./Post";
import "../Styles/PostList.css";

function PostList() {
  const posts = [
    { id: 1, title: "This is The Post Title", body: "The Post Body" },
    { id: 2, title: "Another Title", body: "Another Body" },
    { id: 3, title: "Third Title", body: "Third Body" },
  ];

  return (
    <div className="post-list">
      {posts.map((post) => (
        <Post key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
}

export default PostList;
