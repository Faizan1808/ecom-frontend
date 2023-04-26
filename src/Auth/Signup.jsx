import { useState } from "react"
import "./Styling/auth.css"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"


const Signup = () =>{
    
    const navigate = useNavigate()
    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = (e) => {

        const { name, value } = e.target

        setUser({
            ...user,
            [name]: value
        })
    }

    const register = (e) => {
        e.preventDefault()
        const { name, email, password, reEnterPassword } = user

        if( name && email && password && (password === reEnterPassword)){
            axios.post("https://ecom-backend-ufqr.vercel.app/register", user)
            .then( res => {
                alert('Successfully Registered' )
                navigate("/Login")
            })
        } 
        else {
            alert("invalid input")
        }
        
    }

    return(
        <div className="body">
            <div className="main-sign">
                <div className="signup">
                    <input type="checkbox" id="chk" aria-hidden="true" />
                    
                    <form >
                        <label htmlFor="chk" aria-hidden="true" className="sign-label">Sign up</label>
                        <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange } />
                        <input type="email" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange } />
                        <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange } />
                        <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange } />
                        <button className="signup-page" onClick={register}>Sign up</button>
                    </form>
                    
                    <br />
                    <p className="have-account">Already Have Account</p>
                    <Link to='/Login' className="auth-link"><button className="signup-page"> Login</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Signup