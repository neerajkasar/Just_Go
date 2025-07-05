import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";

const UserLogin = () => {
const [email, setEmail] = useState('');
const [password, setPassword]= useState('');
const [userData,setUserData] = useState({});
const {user, setUser} = useContext(UserDataContext)

const navigate = useNavigate()

    const submitHandler = async (e) => {
    e.preventDefault();
        
    const userData = {email, password};
    const response = await axios.post(`${import.meta.env.VITE.BASE.URL}/users/login`,userData);  

    if(response.status === 200){
        const data = response.data;
        setUser(data.user);
        localStorage.setItem('token',JSON.stringify(data.user));
        navigate('/home');  
    }
  
       setEmail('');
       setPassword('')
        
    }
    return(
        <div className="p-7 h-screen flex flex-col justify-between">
            <div>
                <img className="w-16 ml-8s bg-transparent" src="https://pngate.com/wp-content/uploads/2025/05/uber-logo-main-2025-black-text-1.png"  alt="alt-logo" />
            
            <form onSubmit={(e)=> {
                submitHandler(e)
            }}>
            <h3 className="text-lg font-medium mb-2">What's your email</h3>
            <input value={email} onChange={(e) => {setEmail(e.target.value)}} className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:base" type="email" required placeholder="email@example.com" />
            <h3>Enter Password</h3>
            <input value={password} onChange={(e) => {setPassword(e.target.value)}} className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:base" type="password" placeholder="Password" />
            <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:base">Login</button>
            <p className="text-center">New here? 
            <Link to="/signup" className="text-blue-600">Create New account</Link>
            </p>
            </form>
            </div>
            <div>
                <Link to='/captain-login' className="bg-[#10b461] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:base">Sign as Captain</Link>
            </div>
        </div>
    )
}

export default UserLogin