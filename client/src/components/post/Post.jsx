import React from "react";
// import PostImg from '../../images/img6.jpg'
import "./post.css";
import { Link } from "react-router-dom";
export default function Post({ posts }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      {posts.photo && <img src={PF + posts.photo} alt="" className="postImg" />}
      <div className="postInfo">
        <div className="postCats">
          {posts.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${posts._id}`} className="link">
          <span className="postTitle">{posts.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(posts.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{posts.desc}</p>
      <div className="likeAndCommentWrapper d-flex">
        <i class="fa fa-thumbs-up" aria-hidden="true" />
        <i class="fa fa-comment" aria-hidden="true" style={{marginLeft: "5px"}} />
      </div>
    </div>
  );
}
