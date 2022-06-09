import { Link } from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {
   return <div className="nav-bar">
       <Link to="/">Home</Link>
       <Link to="/newArtwork">New Artwork</Link>
       <Link to="/Gallery">Gallery</Link>
    </div>

}

export default NavBar