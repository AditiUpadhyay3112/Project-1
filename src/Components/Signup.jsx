import React from 'react';
import { NavLink } from 'react-router-dom';
import Btn2 from './Btn2';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';


const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="bg-[#20202000] min-h-screen flex justify-center items-center">
            <div className="bg-[#e8e4e400]    w-full max-w-md">
                <h2 className="text-3xl font-serif text-white font-semibold text-center mb-10 ">Signup</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-xl font-medium text-white">Name</label>
                        <input type="text" id="name" name="name" className="mt-1 text-white py-2 px-2 font-semibold block w-full shadow-sm sm:text-sm bg-transparent border-b-2" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-xl font-medium text-white">Email</label>
                        <input type="email" id="email" name="email" className="mt-1 text-white py-2 px-2 font-semibold  block w-full shadow-sm sm:text-sm bg-transparent border-b-2" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-xl font-medium text-white">Phone Number</label>
                        <input type="tel" id="phone" name="phone" className="mt-1 text-white py-2 px-2 font-semibold  block w-full shadow-sm sm:text-sm bg-transparent border-b-2" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-xl font-medium text-white">Create Password</label>
                       <div className='flex relative' >
                        <input type={showPassword ? "text" : "password"} id="pass" name="pass" className="mt-1 text-white py-2 px-2 font-semibold  block w-full shadow-sm sm:text-sm bg-transparent border-b-2" />
                        <div className='text-white absolute top-[50%] right-3 cursor-pointer translate-y-[-50%]' onClick={() => setShowPassword((prev)=> !prev)}>
                        {showPassword ? <FaEye/> : <FaEyeSlash/>}
                        </div>
                        </div>
                    </div>
                    <div>
                      <NavLink to={"/home"}>
                          <Btn2 btnval={"SignUp"}/>
                        </NavLink>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
