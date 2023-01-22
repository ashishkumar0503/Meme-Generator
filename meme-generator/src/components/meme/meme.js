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

    function handleChange(event) {
        const {name, value} = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name] : value
        }));
    }


    return (
        <main>
            <div className="form">
                <input 
                    className="form_input" 
                    type="text" 
                    placeholder="Top Text" 
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                /> 
                <input 
                    className="form_input" 
                    type="text" 
                    placeholder="Bottom Text" 
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    onClick={getMemeImage} 
                    className="form_button">
                        Get a new meme image 🖼️
                </button> 
            </div>
            <div className="meme">
                <img className="meme_image" src={meme.randomImage} alt="meme" />
                <h2 className="meme_text top">{meme.topText}</h2>
                <h2 className="meme_text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}