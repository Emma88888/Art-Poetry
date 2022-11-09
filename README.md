# Art & Poetry

An app using the Cleveland Museum of Art's [API](https://github.com/ClevelandMuseumArt/openaccess) to bring inspiration to you; click through to view a random image to write about! 

## Wire frame and images

Coming soon

## Installation instructions:

Deployment coming soon 

## Unsolved problems

Fetch is possibly prohibiting my deployment - I will need to refactor the code to see if axios will work.

`
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
`

I lost some CSS while trying to ameliorate file issues, so I want to keep working on the styling.

## Resources & credits

Thank you to Alison Quaglia for the background animation, and the CMA for providing such wonderful information to the public for free with no limitations. 
