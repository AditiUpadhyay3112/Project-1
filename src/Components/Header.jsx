import React, { useState } from 'react';
import { TiThMenuOutline } from "react-icons/ti";
import { IoSearchOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import FullLogo from '../Images/FullLogo.png';
import "../Components/CommonCSS.css"
import { Link } from 'react-router-dom';
const Header = () => {
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    };
    const [Profile, setProfile] = useState(false);

    const toggleProfile = () => {
        setProfile(!Profile);
    };


    return (
        
        <nav className=" bg-[#20202061] relative ">
            <div className='absolute top-0 left-0 bg-[#00000082] w-full h-full'></div>
            <div className="container relative  mx-auto px-4">
                <div className="flex justify-between items-center py-2">
                    <div>
                        <img src={FullLogo} alt="Full Logo" className='w-[20%] bg-white rounded-3xl md:visible' />
                    </div>
                    <div className="flex-grow  flex relative items-center -ml-[30%]">
                        
                        <div className="relative w-full max-w-xs mx-auto">
                            <input type="text" placeholder="Search..." className="w-full pl-10 text-black  font-semibold   pr-2 py-2 placeholder:text-black rounded-full focus:outline-none focus:ring focus:ring-[#eaf2f073] bg-white" />
                            <button className='absolute left-0 top-0 mt-[12px] ml-2 text-white'><IoSearchOutline /></button>
                        </div>
                    </div>
                    <div className="flex items-center relative space-x-4">
                        <button className='items-center  text-white sm:flex ' onClick={toggleProfile}>
                            <FaUserCircle className="w-16 h-6 hover:scale-125" />
                            <div className="mr-4 hidden text-2xl sm:flex ">Profile</div>
                        </button>
                    </div>
                    {Profile && (
                    <div className=" text-white">
                    
<ul>
    <Link><li>Previous orders</li></Link>
    <Link><li>Offers</li></Link>
    <Link><li>CART</li></Link>
    <Link><li>Logout</li></Link>
</ul>
                    </div>
                )}
                    <button className="text-white -mr-[10%] w-28 sm:hidden" onClick={toggleMenu} >
                        <TiThMenuOutline />
                    </button>
                </div>
                {menu && (
                    <div className="sm:hidden text-white">
                      

                    </div>
                )}
            </div>
        </nav>
    );
};

export default Header;
