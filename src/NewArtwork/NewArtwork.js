import React from "react"
import "./NewArtwork.css"
import { useState } from 'react';
import Artwork from "../Artwork/Artwork";
import PoemInput from '../PoemInput/PoemInput';
import NavBar from "../NavBar/NavBar";

export default function NewArtwork({onSave}) {
  const [artworks, setArtworks] = useState([])
  const [artworkIndex, setArtworkIndex] = useState()
  const [buttonClicks, setButtonClicks] = useState(0)
  const [text, changeText] = useState("")

  function getNewArtwork() {
    fetch("https://openaccess-api.clevelandart.org/api/artworks?limit=20&skip=" + buttonClicks * 20) 
      .then((response) => {
        return response.json()
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
  <>
  <NavBar bg="white"/>
    <div className="App page-container">
      {buttonClicks > 0 && <>
        <Artwork artwork={artworks[artworkIndex]}/>
        <PoemInput text={text} onChange={changeText}/>
        <button className="save-button button" onClick={() => onSave(artworks[artworkIndex], text)}>Save</button>
      </>}
      <button className="new-art-button button" onClick={getNewArtwork}>New art and poem</button>
    </div>
    </>
  );
}