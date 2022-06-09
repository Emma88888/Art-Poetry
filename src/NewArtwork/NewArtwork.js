import React from "react"
import "./NewArtwork.css"
import { useState } from 'react';
import Artwork from "../Artwork/Artwork";
import PoemInput from '../PoemInput/PoemInput';

export default function NewArtwork({onSave}) {
  const [artworks, setArtworks] = useState([])
  const [artworkIndex, setArtworkIndex] = useState()
  const [buttonClicks, setButtonClicks] = useState(0)
  const [text, changeText] = useState("")


  function getNewArtwork() {
    fetch("https://openaccess-api.clevelandart.org/api/artworks?limit=20&skip=" + buttonClicks * 20) /*, {
        mode: 'no-cors',
        "Access-Control-Allow-Origin" : "*", 
        "Access-Control-Allow-Credentials" : true ,
        "Content-Type": "application/json",
    }*/
      .then((response) => {
        /*console.log(response)*/
        return response.json
      }) 
      .then((json) => {
        const newArtworks = [
          ...artworks,
          ...json.data
          .filter((artwork) => {
            return artwork.images?.web?.url
          })
          .map((artwork) => {
            return {
              image: artwork.images.web.url,
              artists: artwork.creators.map((creator) => {
                return (
                  creator.description
                )
              }) .join(", "),
              description: artwork.wall_description
            }
          })
        ]

        setArtworks(newArtworks)
        setArtworkIndex(Math.floor(Math.random() * newArtworks.length))
        setButtonClicks(buttonClicks + 1)
      })
  }

  return (
    <div className="App">
      {buttonClicks > 0 && <>
        <Artwork artwork={artworks[artworkIndex]}/>
        <PoemInput text={text} onChange={changeText}/>
        <button className="save-button" onClick={() => onSave(artworks[artworkIndex], text)}>Save</button>
      </>}
     <button className="new-art-button" onClick={getNewArtwork}>New art and poem</button>
    </div>
  );
}