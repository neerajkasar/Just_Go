import { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {

const [email, setEmail] = useState('');
const [password, setPassword]= useState('');
const [captainData,setCaptainData] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('details',email,' ',password);
                 
            setCaptainData({
                email,password
            })
  
        console.log('usdata',captainData);
        
       setEmail('');
       setPassword('')
        
    }
    return(
        <div className="p-7 h-screen flex flex-col justify-between">
            <div>
                <img className="w-20 ml-8s bg-transparent" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVCO4w_adxK32rCXFeKq3_NbLcR9b_js14w&s"  alt="alt-logo" />
            
            <form onSubmit={(e)=> {
                submitHandler(e)
            }}>
            <h3 className="text-lg font-medium mb-2">What's your email</h3>
            <input value={email} onChange={(e) => {setEmail(e.target.value)}} className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:base" type="email" required placeholder="email@example.com" />
            <h3>Enter Password</h3>
            <input value={password} onChange={(e) => {setPassword(e.target.value)}} className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:base" type="password" placeholder="Password" />
            <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:base">Login</button>
            <p className="text-center">Join a fleet? 
            <Link to="/captain-signup" className="text-blue-600"> Register as a Captain</Link>
            </p>
            </form>
            </div>
            <div>
                <Link to='/login' className="bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:base">Sign as User</Link>
            </div>
        </div>
    )

}

export default CaptainLogin;