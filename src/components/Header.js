import React, { Component } from "react";
import logo from "../images/logo.png";
import "./Header.css";
 
class Header extends Component {
    render() {
        return (
            <div className="headerContainer">
                <img src={logo} className="headerLogo" alt="logoApoGames" />
                <h2>apoGames</h2>
            </div>
        );
    }
}

export default Header;