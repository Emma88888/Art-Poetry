export default function Artwork({artwork}) {
    return (
        <>
        <h1>{artwork.artists}</h1>
        <img src={artwork.image}/>
        <p dangerouslySetInnerHTML={{__html: artwork.description}}></p>
        </>
    )
}