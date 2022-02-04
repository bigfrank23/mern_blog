import React from 'react'
import './header.css'
import HeaderImg from "../../images/lifestyle2.jpg"
export default function Header() {
    return (
      <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm">React & Node</span>
          <span className="headerTitleLg">Blog</span>
        </div>
        <img src={HeaderImg} alt="headerImg" className="headerImg" />
      </div>
    );
}
