import React from "react";
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import { Avatar } from "@material-ui/core";
import { useStateValue } from "./StateProvider";
function Header() {
    const [{user} , dispatch] = useStateValue();
    return (
        <div className="header">
            <div className="header__left">
                <img src="http://www.pngplay.com/wp-content/uploads/1/Letter-S-PNG-Photo.png" alt=""/>
                <div className="header__input">
                    <SearchIcon />
                    <input placeholder="Find friends" />
                </div> 
            </div>
            <div className="header__center"></div>
                <div className="header__option">
                    <HomeIcon fontSize="large" />
                </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div> 
            </div>
        </div>
    )
}

export default Header
