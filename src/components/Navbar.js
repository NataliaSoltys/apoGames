import React, { Component } from "react";
import logo from "../images/logo.png";
import "./Navbar.css";
 
class Header extends Component {
    render() {
        return (
            <div className="headerContainer">
                <img src={logo} className="headerLogo" alt="logoApoGames" />
                <h2>apoGames</h2>
                <h5>{"Most Appreciated" + ' '}</h5>
                <h4>Most Awaited</h4>
                <h5>Your profile</h5>
            </div>
        );
    }
}

export default Header;