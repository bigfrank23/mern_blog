import React, {useContext} from 'react'
import './topbar.css'
// import ProfileImg from '../../images/profile3.jpg'
import { Link } from 'react-router-dom';
import { Context } from './../../context/Context';

export default function Topbar() {
    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/";

    const handleLogout = () => {
        dispatch({type: "LOGOUT"})
    }
    return (
        <div>
            <div className="top">
                <div className="topLeft">
                    <i className="topIcon fa fa-facebook-square" aria-hidden="true"></i>
                    <i className="topIcon fa fa-twitter-square" aria-hidden="true"></i>
                    <i className="topIcon fa fa-pinterest-square" aria-hidden="true"></i>
                    <i className="topIcon fa fa-twitter-square" aria-hidden="true"></i>
                </div>
                <div className="topCenter">
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/">HOME</Link>
                        </li>
                        <li className="topListItem"><Link className="link" to="/">ABOUT</Link></li>
                        <li className="topListItem"><Link className="link" to="/">CONTACT</Link></li>
                        <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
                        <li className="topListItem" onClick={handleLogout}> {user && "LOGOUT"} </li>
                    </ul>
                </div>
                <div className="topRight">
                    {user ? ( <Link to="/settings" className="link"> <img className="topImg" src={PF + user.profilePic} alt="profileImg" /> </Link>)
                     : (
                         <ul className="topList">
                         <li className="topListItem"><Link className="link" to="/login">LOGIN</Link></li>
                         <li className="topListItem"><Link className="link" to="/register">REGISTER</Link></li>
                         </ul>
                     ) }
                    
                    <i className="topSearchIcon fa fa-search" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    )
}
