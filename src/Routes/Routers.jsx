import { Route, Routes } from "react-router-dom";
import Home from "../Pages/home/Home";
import Store from "../Pages/Store/Store";
import Ipad from "../Pages/Ipad/Ipad";
import Iphone from '../Pages/Iphone/Iphone'
import Macbook from '../Pages/Macbook/Macbook'
import Accessories from '../Pages/Accessories/Accessories'
import Login from '../Auth/Login'
import Signup from "../Auth/Signup";
import Cart from "../Components/Cart";

function Routers(){

    
    return(
              
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='Store' element={<Store/>}/>
                <Route path='Ipad' element={<Ipad/>}/>
                <Route path='Iphone' element={<Iphone/>}/>
                <Route path='Macbook' element={<Macbook/>}/>
                <Route path='Accessories' element={<Accessories/>}/>
                <Route path= 'Login' element={<Login />}/>
                <Route path= 'Signup' element={<Signup />}/>
                <Route path= 'Cart' element={<Cart />}/>
                
            </Routes>
        
    
    )
}

export default Routers