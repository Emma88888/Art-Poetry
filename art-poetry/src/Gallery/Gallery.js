import Artwork from "../Artwork/Artwork"

export default function Gallery({savedArtworks}) {
    return (
        <div>
           {savedArtworks.map((savedArtwork) => {
              return <>
                <Artwork artwork={savedArtwork.artwork}/>
                <div>{savedArtwork.poem}</div>
            </>
           })}
        </div>
    )
}