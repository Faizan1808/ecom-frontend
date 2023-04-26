// import { Link } from 'react-router-dom'
import "./Styling/auth.css"
import { useState} from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

export let  log, logged, logout;

const Login = () =>{

    const [isLoggedin, setIsLoggedin] = useState(false);
    
    const navigate = useNavigate()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:""
    })

    const handleLogin = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
        localStorage.setItem('token-info', JSON.stringify(user));
        setIsLoggedin(true);
    }

    const login = (e) => {
        e.preventDefault()
        try{
            axios.post("https://ecom-backend-ufqr.vercel.app/login",user)
            .then(res => {
                
                if(res.data === "success"){
                    log = user.email
                    // console.log(log)
                    alert("Login Successfully")
                    navigate("/")
                    
                }
                // else{

                //     alert('Wrong Email or Password')
                // }
            
            })
        }
        catch{
            alert('Wrong Email or Password')
        }
    }

    const logoutUser = () => {
        localStorage.removeItem('token-info');
        setIsLoggedin(false);
    };

    logout = logoutUser;
    logged = isLoggedin;

    return(
        <div className='body'>
            <div className="main">  	
                <input type="checkbox" id="chk" aria-hidden="true" />

                    <div className="login" >
                        <form >
                            <label  >Login</label>
                            <input type="email" name="email" value={user.email || user.username} onChange={handleLogin} placeholder="Enter your Email" required/>
                            <input type="password" name="password" value={user.password} onChange={handleLogin}  placeholder="Enter your Password" required/>
                            <button onClick={login}>Login</button>
                        </form>
                        <br />
                        <p className="login-account">Don't Have Account? </p>
                        <Link to='/Signup' className="auth-link"><button >Signup</button></Link>
                    </div>
            </div>

        </div>
    )
}

export default Login