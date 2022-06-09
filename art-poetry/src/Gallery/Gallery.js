import Artwork from "../Artwork/Artwork"
import NavBar from "../NavBar/NavBar"

export default function Gallery({savedArtworks}) {
    return (
        <>
        <NavBar bg="white"/>
        <div className="page-container">
           {savedArtworks.map((savedArtwork) => {
              return (
                <div key={savedArtwork.poem} className="card">
                <Artwork artwork={savedArtwork.artwork}/>
                <div>{savedArtwork.poem}</div>
                </div> )
           })}
        </div>
        </>
    )
}