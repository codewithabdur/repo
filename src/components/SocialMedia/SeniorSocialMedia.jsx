import React, { useState } from 'react';
import "./SeniorSocialMedia.css";
function SeniorSocialMedia() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  const handlePostSubmit = (event) => {
    event.preventDefault();
    setPosts([...posts, { content: newPost }]);
    setNewPost('');
  };

  return (
    <div>
      <h1>Senior-Friendly Social Media Platform</h1>
      <form onSubmit={handlePostSubmit}>
        <label>
          New Post:
          <textarea
            value={newPost}
            onChange={(event) => setNewPost(event.target.value)}
            rows="5"
            cols="30"
          ></textarea>
        </label>
        <button type="submit">Post</button>
      </form>
      <h2>Recent Posts</h2>
      {posts.map((post, index) => (
        <div key={index}>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default SeniorSocialMedia;
