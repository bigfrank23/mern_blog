import React, { useContext, useEffect, useState } from "react";
// import SinglePostImg from '../../images/music3.jpg'
import './singlePost.css'
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import { Context } from './../../context/Context';

export default function SinglePost(props) {
  const location = useLocation()
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})
    const PF = "http://localhost:5000/images/";
    // console.log(location);
    // console.log(path);
    const { user } = useContext(Context);
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [updateMode, setUpdateMode] = useState(false)

    useEffect(() => {
      axios.get("http://localhost:5000/api/posts/" + path).then((response) => {
        setPost(response.data);
        // console.log(response);
        setTitle(response.data.title);
        setDesc(response.data.desc);
      });
    }, [path]);

    // useEffect(() => {
    //   const getPost = async () =>{
    //     const res = await axios.get("http://localhost:5000/api/posts/" + path);
    //     setPost(res.data)
    //     console.log(res);
    //   }
    //   getPost() 
    // }, [path])
    const handleDelete = async() => {
      try {
        await axios.delete(`http://localhost:5000/api/posts/${post._id}`, {data:{username: user.username}})
        window.location.replace("/");
      } catch (err) {
        
      }
    }

    const handleUpdate = async() => {
      try {
        await axios.put(`http://localhost:5000/api/posts/${post._id}`, 
          { username: user.username, title, desc }
        );
        // window.location.reload()
        setUpdateMode(false)
      } catch (err) {
        
      }
    }
    
    return (
      <div className="singlePost">
        <div className="singlePostWrapper">
          {post.photo && (
            <img src={PF + post.photo} alt="SPImg" className="singlePostImg" />
          )}
          {updateMode ? (
            <input
              type="text"
              value={title}
              className="singlePostTitleInput"
              autoFocus
               onChange={(e)=>setTitle(e.target.value)}
            />
          ) : (
            <h1 className="singlePostTitle">
              {title}
              {post.username === user?.username && (
                <div className="singlePostEdit">
                  <i
                    className="singlePostIcon fa fa-edit"
                    aria-hidden="true"
                    onClick={() => setUpdateMode(true)}
                  ></i>
                  <i
                    className="singlePostIcon fa fa-trash"
                    aria-hidden="true"
                    onClick={handleDelete}
                  ></i>
                </div>
              )}
            </h1>
          )}
          <div className="singlePostInfo">
            <span className="singlePostAuthor">
              Author:
              <Link to={`/?user=${post.username}`} className="link">
                <b>{post.username}</b>
              </Link>
            </span>
            <span className="singlePostDate">
              {new Date(post.createdAt).toDateString()}
            </span>
          </div>
          {updateMode ? (
            <textarea className="singlePostDescInput" value={desc} onChange={(e)=>setDesc(e.target.value)} />
          ) : (
            <p className="singlePostDesc">{desc}</p>
            )}
            {updateMode &&
              <button className="singlePostButton" onClick={handleUpdate}>Update</button>
            }
        </div>
      </div>
    );
}
