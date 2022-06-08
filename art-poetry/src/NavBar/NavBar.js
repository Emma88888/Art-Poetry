import { Link } from "react-router-dom"

const NavBar = () => {
   return <div>
       <Link to="/">Home</Link>
       <Link to="/newArtwork">New Artwork</Link>
       <Link to="/Gallery">Gallery</Link>
    </div>

}

export default NavBar