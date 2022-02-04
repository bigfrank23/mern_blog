import React, {useEffect, useState} from 'react'
import ProfileImg from '../../images/profile3.jpg'
import './sidebar.css'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function SideBar() {
  const [cats, setCats] = useState([])

  useEffect(()=>{
    const getCats = async() =>{
      const res = await axios.get("http://localhost:5000/api/categories")
      setCats(res.data)
    }
    getCats()
  })

    return (
      <div className="sideBar">
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img src={ProfileImg} alt="profile" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
            officia laborum, mollitia recusandae necessitatibus.
          </p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            {cats.map((c)=> (
              <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
              </Link>

            ))}
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fa fa-facebook-square" aria-hidden="true"></i>
            <i className="sidebarIcon fa fa-twitter-square" aria-hidden="true"></i>
            <i className="sidebarIcon fa fa-pinterest-square" aria-hidden="true"></i>
            <i className="sidebarIcon fa fa-twitter-square" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    );
}
