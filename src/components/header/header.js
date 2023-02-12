import React from "react";
import "./header.css";
import memeLogo from "../../images/meme.png"

export default function Header() {
    return (
        <header className="header">
            <img className="header_image" src={memeLogo} alt="meme logo" />
            <h2 className="header_title">Meme Generator</h2>
            <h4 className="header_project">React Course - Project 3</h4>
        </header>
    )
}