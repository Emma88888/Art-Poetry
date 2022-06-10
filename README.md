# Art & Poetry

An app using the Cleveland Museum of Art's [API](https://github.com/ClevelandMuseumArt/openaccess) to bring inspiration to you; click through to view a random image to write about! 

## Wire frame and images

![af849ec5-0134-42cf-9b67-a783cf624913](https://user-images.githubusercontent.com/103523822/173072882-e65c7478-8c45-4366-b259-952d613fe2e3.jpg)

## Technologies used

1. React.js
2. 2 API retrieved with fetch
3. react-use 

## Installation instructions:

Deployment coming soon 

## User stories

1. As a user, I want to be able to view a wide variety of artworks from different time periods and locations
2. As a user, I want a clear interface where I can browse without distraction or issues
3. As a user, I want a randomizer button so I can click through until I see something I like
4. As a user, I want a large enough space to write a poem in without it compromising the interface
5. As a user, I want to be able to save my poem 

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

Thank you to Greg, Kenny, and Brian for the de-bugging help, Alison Quaglia for the background animation, and the CMA for providing such wonderful information to the public for free with no limitations. 
