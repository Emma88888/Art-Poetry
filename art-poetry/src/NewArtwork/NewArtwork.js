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
        // const artistNames = [
        //   ...artworks,
        //   ...json.data
        //   .filter((artistName) => {
        //     return artistNames.creators.description
        //   })
        //   .map((artistName) => {
        //     return artistNames.creators.description
        //   })
        // ]
        //  const bio = [
        //   ...artworks,
        //   ...json.data
        //   .filter((bio) => {
        //     return bio.data.creators.biography
        //   .map((bio) => {
        //     return bio.data.creators.biography
        //   })
        // ]

        //want to add artist name and either bio or wall description (or both??)
        //should they be separate components? 

        console.log(newArtworks)
        setArtworks(newArtworks)
        // setArtistName(artistName)
        // setBio(bio)
        setArtworkIndex(Math.floor(Math.random() * newArtworks.length))
        setButtonClicks(buttonClicks + 1)
      })
  }

  return (
    <div className="App">
      {/* <div className="home">{Home}</div> */}
      {buttonClicks > 0 && <>
        <Artwork artwork={artworks[artworkIndex]}/>
        <PoemInput text={text} onChange={changeText}/>
        <button className="save-button" onClick={() => onSave(artworks[artworkIndex], text)}>Save</button>
      </>}
     <button onClick={getNewArtwork}>New art and poem</button>
    </div>
  );
}