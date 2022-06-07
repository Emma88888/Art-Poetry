import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [artworks, setArtworks] = useState([])
  const [artworkIndex, setArtworkIndex] = useState()
  const [buttonClicks, setButtonClicks] = useState(0)

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
      {buttonClicks > 0 && <img src={artworks[artworkIndex]}/>}
     <button onClick={getNewArtwork}>Click me</button>
    </div>
  );
}

export default App;
