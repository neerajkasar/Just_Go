import { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
const [email, setEmail] = useState('');
const [password, setPassword]= useState('');
const [userData,setUserData] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('details',email,' ',password);
                 
            setUserData({
                email,password
            })
  
        console.log('usdata',userData);
        
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