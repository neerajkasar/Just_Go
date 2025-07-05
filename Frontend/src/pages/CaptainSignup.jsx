import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";

export const CaptainSingnup = () => {

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [captainData, setCaptainData] = useState({});
        const [vehicleColor, setVehicleColor] = useState('');
        const [vehiclePlate, setVehiclePlate] = useState('');
        const [vehicleCapacity, setVehicleCapacity] = useState('');
        const [vehicleType, setVehicleType] = useState('');

        const { captain, setCaptain } = useContext(CaptainDataContext);
    
        const submitHandler = (e) => {
            e.preventDefault();
            setCaptainData({
                fullName: {
                    firstName, lastName
                },
                email, password
            });
            console.log('captainData',captainData);
            
            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
        }

    return (
        <div className="py-5 px-5 h-screen flex flex-col justify-between">
            <div>
                <img className="w-20 ml-8s bg-transparent" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVCO4w_adxK32rCXFeKq3_NbLcR9b_js14w&s"  alt="alt-logo" />

                <form onSubmit={(e) => {
                    submitHandler(e);
                }}>
                    <h3 className="text-lg w-full font-medium mb-2">What's Captain's Name</h3>
                    <div className="flex gap-4 mb-6">
                        <input className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-sm" type="text" required placeholder="First name" value={firstName} onChange={(e) => {
                            setFirstName(e.target.value)
                        }} />
                        <input className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-base" type="text" required placeholder="Last name" value={lastName} onChange={(e) => {
                            setLastName(e.target.value)
                        }} />
                    </div>

                    <h3 className="text-lg w-1/2 font-medium mb-2">What's captain's email</h3>
                    <input className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base" type="email" required placeholder="email@example.com" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    <h3 className="text-lg font-medium mb-2">Enter Password</h3>
                    <input className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base" type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:base">Login</button>
                    <p className="text-center">Already have a account?
                        <Link to="/captain-login" className="text-blue-600"> Login here</Link>
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