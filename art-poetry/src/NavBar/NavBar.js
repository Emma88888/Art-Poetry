import { Link } from "react-router-dom"
import "./NavBar.css"

const NavBar = (props) => {
   return <div className="nav-bar" style={{background: props.bg}}>
       <Link to="/">Home</Link>
       <Link to="/newArtwork">New Artwork</Link>
       <Link to="/Gallery">Gallery</Link>
    </div>

}

export default NavBar