import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/usercontext";
const UserSignup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [userData, setUserData] = useState('');
    const navigate = useNavigate();
    const { user, setUser} = useContext(UserDataContext);

    const submitHandler = async (e) => {
        e.preventDefault();
        const newUser = {
            fullname: {
                firstname, lastname
            },
            email, password
        }
       
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser)

        if(response.status == 201){
            const data = response.data;
            setUser(data.user);
            localStorage.setItem('token',data.token);
            navigate('/home');
        }
        
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
    }
    return (
        <div className="p-7 h-screen flex flex-col justify-between">
            <div>
                <img className="w-16" src="https://pngate.com/wp-content/uploads/2025/05/uber-logo-main-2025-black-text-1.png" alt="alt-logo" />

                <form onSubmit={(e) => {
                    submitHandler(e);
                }}>
                    <h3 className="text-lg font-medium mb-2">What's your Name</h3>
                    <div className="flex gap-4 mb-6">
                        <input className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-sm" type="text" required placeholder="First name" value={firstname} onChange={(e) => {
                            setFirstName(e.target.value)
                        }} />
                        <input className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-base" type="text" required placeholder="Last name" value={lastname} onChange={(e) => {
                            setLastName(e.target.value)
                        }} />
                    </div>

                    <h3 className="text-lg w-1/2 font-medium mb-2">What's your email</h3>
                    <input className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base" type="email" required placeholder="email@example.com" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    <h3 className="text-lg font-medium mb-2">Enter Password</h3>
                    <input className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base" type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:base">Create new account</button>
                    <p className="text-center">Already have a account?
                        <Link to="/login" className="text-blue-600"> Login here</Link>
                    </p>
                </form>
            </div>
            <div>
                {/* <Link to='/captain-login' className="bg-[#10b461] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:base">Sign as Captain</Link> */}

                <p className="text-[10px] leading-tight">
                    By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, form Uber and it affilates to the number provided.
                </p>
            </div>
            <div>
                <p className="text-[10px leading-tight">This site is protected by reCAPTCH and <span className="underline">Google Privacy Policy</span> and <span className="underline">Terms of Service apply</span>.</p>
            </div>
        </div>
    )
}

export default UserSignup;