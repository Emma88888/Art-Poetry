import Artwork from "../Artwork/Artwork"

export default function Gallery({savedArtworks}) {
    return (
        <div>
           {savedArtworks.map((savedArtwork, artworkIndex) => {
              return <>
                <Artwork artwork={savedArtwork.artwork}/>
                <div>{savedArtwork.poem}</div>
            </>
           })}
        </div>
    )
}