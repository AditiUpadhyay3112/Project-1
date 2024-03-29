import React from 'react';
import { NavLink } from 'react-router-dom';
import Btn2 from './Btn2';

const Login = () => {
    return (
        <div className="bg-[#20202000] min-h-screen flex justify-center items-center">
            <div className="bg-[#e8e4e400]    w-full max-w-md">
                <h2 className="text-3xl font-serif text-white font-semibold text-center mb-10 ">Login</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-xl font-medium text-white">Name</label>
                        <input type="text" id="name" name="name" className="mt-1 text-white py-2 px-2 font-semibold block w-full shadow-sm sm:text-sm bg-transparent border-b-2" />
                    </div>
                   
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-xl font-medium text-white"> Password</label>
                        <input type="password" id="pass" name="pass" className="mt-1 text-white py-2 px-2 font-semibold  block w-full shadow-sm sm:text-sm bg-transparent border-b-2" />
                    </div>
                    <div>
                    <NavLink to={"/home"}>
                          <Btn2 btnval={"Login"}/>
                        </NavLink>
                    </div>

                    <div className='flex justify-center mt-[10%]'>

                      <NavLink to={"/forgot-password"}>
                        <button className='text-white font-mono hover:underline  hover:font-bold '>
                            FORGOT PASSWORD?
                        </button>
                      </NavLink>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
