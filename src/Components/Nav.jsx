import { Link } from "react-router-dom"
import ishop from '../Images/iSHOP Logo.svg'
import './component.css'
import { useState } from "react"
import menu  from '../Images/menu.png'
// import Header from "./Header"

const Nav = () =>{
    const [showNavbar, setShowNavbar] = useState(false)
    return(
        <div>
                <img src={menu} alt="menu-bar" className="menu-bar" onClick={() => {setShowNavbar(!showNavbar)}}/>
            <div className="Nav-main-container">

                <img src={ishop} alt= "Logo"/>
                <ul  className={showNavbar ? "links mobile-nav" : "links"}>
        
                    <li><Link to="/" >HOME</Link></li>
                    <li><Link to="/Store" >STORE</Link></li>
                    <li><Link to="/Iphone" >IPHONE</Link></li>
                    <li><Link to="/Ipad" >IPAD</Link></li>
                    <li><Link to="/Macbook" >MACBOOK</Link></li>
                    <li><Link to="/Accessories" >ACCESSORIES</Link></li>
                </ul>
            </div>

            {/* <hr className="nav-hr"/> */}
          
        </div>
    )
}

export default Nav