import './App.css';
import { Route, Routes, HashRouter } from "react-router-dom";
import NewArtwork from './NewArtwork/NewArtwork';
import Home from "./Home/Home";
import Gallery from "./Gallery/Gallery";
import NavBar from "./NavBar/NavBar";
import { useLocalStorage } from 'react-use';

function App() {
  const [savedArtworks, setSavedArtworks] = useLocalStorage("savedArtworks",[])
  const addSavedArtwork = (artwork, poem) => {
    setSavedArtworks([
      ...savedArtworks,
      {artwork, poem}
    ])
  }

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/newArtwork" element={<NewArtwork onSave={addSavedArtwork}/>}/>
        <Route path="/gallery" element={<Gallery savedArtworks={savedArtworks}/>} />
      </Routes>
    </HashRouter>
  )
}

export default App;
