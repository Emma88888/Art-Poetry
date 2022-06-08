import './App.css';
import { Route, Routes, HashRouter } from "react-router-dom";
import NewArtwork from './NewArtwork';
import Home from "./Home";
import NavBar from "./NavBar";
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
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/newArtwork" element={<NewArtwork onSave={addSavedArtwork}/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App;
