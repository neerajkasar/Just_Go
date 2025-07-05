import React from "react";
import uber_logo from '../assets/Uber.svg';
import { Link } from "react-router-dom";

const Start = () => {
    return (
        <div className="bg-cover bg-center bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2HWL5dXu8k9U_akjql25456XLV6CYtcFz6w&s)] h-screen w-full flex justify-between flex-col bg-red-400 pt-8">
            <img className="w-16 ml-8 bg-transparent" src="https://pngate.com/wp-content/uploads/2025/05/uber-logo-main-2025-black-text-1.png"  alt="alt-logo" />
            <div className="bg-white py-4 pb-7 px-4">

                <h2 className="text-3xl font-bol">Get Started with Just Go</h2>
                <Link to="/login" className="w-full bg-black text-white py-3 rounded mt-4 flex items-center justify-center">Continue</Link>
            </div>
        </div>
    )
}

export default Start