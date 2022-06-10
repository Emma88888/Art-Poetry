# Art & Poetry

An app using the Cleveland Museum of Art's [API](https://github.com/ClevelandMuseumArt/openaccess) to bring inspiration to you; click through to view a random image to write about! 

## Wire frame and images

![af849ec5-0134-42cf-9b67-a783cf624913](https://user-images.githubusercontent.com/103523822/173072882-e65c7478-8c45-4366-b259-952d613fe2e3.jpg)
<img width="1414" alt="Screen Shot 2022-06-10 at 9 47 15 AM" src="https://user-images.githubusercontent.com/103523822/173079938-7bdc40b9-4cde-44ac-816b-7ea63b1bb203.png">
<img width="1394" alt="Screen Shot 2022-06-10 at 9 47 22 AM" src="https://user-images.githubusercontent.com/103523822/173079941-2e66aab2-f8bb-4c8d-abaf-731969f90c4f.png">
<img width="1273" alt="Screen Shot 2022-06-10 at 9 47 32 AM" src="https://user-images.githubusercontent.com/103523822/173079942-c7be9f7d-f738-48d9-81d1-c15af06ed1ec.png"><img width="1335" alt="Screen Shot 2022-06-10 at 9 47 48 AM" src="https://user-images.githubusercontent.com/103523822/173079964-d3ec47e7-d10a-4c62-8fb5-732cd64d3aff.png">
<img width="1106" alt="Screen Shot 2022-06-10 at 9 47 37 AM" src="https://user-images.githubusercontent.com/103523822/173079967-c71bf34c-28e6-4d35-a1c4-071e46f48d3c.png">


## Technologies used

1. React.js
2. API retrieved with fetch
3. react-use 

## Installation instructions:

Deployment coming soon 
art-and-poetry-luvrs.netlify.app

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
