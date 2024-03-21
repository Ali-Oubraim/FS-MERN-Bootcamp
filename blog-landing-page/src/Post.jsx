import React from "react";

function Post({ posts ,backgroundClr}) {
  return (
    <>
      {posts.length === 0 && (
        <div className="message">
          <p>There Is No Posts For Now ! Try Later</p>
        </div>
      )}
      {posts.length === 0 || (
        <div
          className="posts-section"
          style={{ backgroundColor: backgroundClr }}
        >
          {posts.map((post) => (
            <article key={post.id} className="post-card">
              <h3>{post.title}</h3>
              <p className="description">{post.description}</p>
              <a href="#">Read More</a>
            </article>
          ))}
        </div>
      )}
    </>
  );
}

export default Post;
