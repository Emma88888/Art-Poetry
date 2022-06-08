import React from "react"
import { useState } from 'react';
import PoemInput from './PoemInput';

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
            return artwork.images.web.url
          })
        ]
        console.log(newArtworks)
        setArtworks(newArtworks)
        setArtworkIndex(Math.floor(Math.random() * newArtworks.length))
        setButtonClicks(buttonClicks + 1)
      })
  }

  return (
    <div className="App">
      {/* <div className="home">{Home}</div> */}
      {buttonClicks > 0 && <><img src={artworks[artworkIndex]}/>
      <PoemInput text={text} onChange={changeText}/>
      <button onClick={() => onSave(artworks[artworkIndex], text)}>Save</button></>}
     <button onClick={getNewArtwork}>Random image</button>
    </div>
  );
}