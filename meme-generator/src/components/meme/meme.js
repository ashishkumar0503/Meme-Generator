import React from "react";
import memesData from "../../memesData";
import "./meme.css";
import { useState } from "react";

export default function Meme(){

    //const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg");

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemeImages, setAllMemeImages] = useState(memesData);

    function getMemeImage(){
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }));
    }


    return (
        <main>
            <div className="form">
                <input className="form_input" type="text" placeholder="Top Text" /> 
                <input className="form_input" type="text" placeholder="Bottom Text" />
                <button onClick={getMemeImage} className="form_button">Get a new meme image 🖼️</button> 
            </div>
            <img className="meme_image" src={meme.randomImage} alt="meme" />
        </main>
    )
}