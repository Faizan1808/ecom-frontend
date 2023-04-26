import './component.css'
import profileIcon from '../Images/profile_icon.svg'
import bagIcon from '../Images/bag_icon.svg'
import searchIcon from '../Images/search_icon.svg'
import { Link, useNavigate } from 'react-router-dom'
import Cart from '../Components/Cart'
import { useSelector } from 'react-redux'
import { log, logged, logout } from '../Auth/Login'


const Header = () =>{

    const { cartItems } = useSelector((state) => state.cart);

    const navigate=useNavigate()

    const loginPage=()=>{
        navigate("/Login")
    }
    return(
        <div>
            <div className = "main-container">
               <div className='left-container'>
                <select name = "language" id = "language">
                        <option value ="English">EN</option>
                        <option value = "Hindi">HN</option>
                    </select>

                    <select name="price-symbol" id="price-symbol">
                        <option value = "Dollar">$</option>
                        <option value = "Euro">€</option>
                        <option value = "Pound">£</option>
                        <option value = "Yen">¥</option>
                        <option value = "Franc">₣</option>
                        <option value = "Rupee">₹</option>
                    </select>
               </div>

                <div className='right-container'>
                    
                    <div className="profile">
                        <img src={profileIcon} alt="profile" onClick={loginPage}/>
                        <span>      
                        {!logged ? ( <>
                            <span onClick={loginPage}>Login</span>
                        </>)
                        : (
                            <>
                            <span >{log}</span>
                            <button onClick={logout} className='logout'>logout</button>
                            </>
                          )}
                        
                        </span>
                    </div>
                    
                    <Link to='/Cart' element={<Cart/>}><div className='items'><img src={bagIcon} alt="bagIcon"/><span>{cartItems.length}Items</span></div></Link>

                    <Link><div><img src={searchIcon} alt="Search"/></div></Link>
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default Header