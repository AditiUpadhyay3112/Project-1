import React, { useState } from 'react';
import { TiThMenuOutline } from "react-icons/ti";
import { IoSearchOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import FullLogo from '../Images/FullLogo.png';
import "../Components/CommonCSS.css"
const Header = () => {
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    };

    return (
        
        <nav className=" bg-[#20202061] ">
            <div className="container  mx-auto px-4">
                <div className="flex justify-between items-center py-2">
                    <div>
                        <img src={FullLogo} alt="Full Logo" className='w-[20%] bg-white rounded-3xl md:visible' />
                    </div>
                    <div className="flex-grow -ml-[35%] flex items-center">
                        <div className="relative w-full max-w-xs mx-auto">
                            <input type="text" placeholder="Search..." className="w-full pl-10 text-white    pr-4 py-2 placeholder:text-black rounded-full focus:outline-none focus:ring focus:ring-[#eaf2f073] bg-white" />
                            <button className='absolute left-0 top-0 mt-[12px] ml-2 text-white'><IoSearchOutline /></button>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className='items-center  text-white sm:flex'>
                            <FaUserCircle className="w-16 h-6 hover:scale-125" />
                            <div className="mr-4 hidden text-2xl sm:flex ">Profile</div>
                        </button>
                    </div>
                    <button className="text-white  w-28 sm:hidden" onClick={toggleMenu}>
                        <TiThMenuOutline />
                    </button>
                </div>
                {menu && (
                    <div className="sm:hidden">
                        {/* Your menu content goes here */}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Header;
