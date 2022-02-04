import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import './home.css'
import Posts from './../../components/posts/Posts';
import SideBar from './../../components/sidebar/SideBar';
import axios from 'axios'
import { useLocation } from 'react-router-dom';

export default function Home() {
    const [posts, setPosts] = useState([])
    const {search} = useLocation()

    useEffect(() => {
      axios.get("http://localhost:5000/api/posts" + search).then((response) => {
        setPosts(response.data);
        // console.log(response);
      });
    }, [search]);

    // useEffect(() => {
    //     const fetchPosts = async () =>{
    //     const res = await axios.get("http://localhost:5000/api/posts");
    //     setPosts(res.data)
    //     // console.log(res);
    //     }
    //     fetchPosts()
    // }, [])
    return (
        <>
        <Header/>
        <div className="home">
            <Posts posts={posts} />
            <SideBar/>
        </div>
        </>
    )
}
