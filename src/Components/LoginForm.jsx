import React from 'react';
import { GrClose } from "react-icons/gr";
import Signup from './Signup';
import Heading from './Heading';
import Login from './Login';
import { NavLink } from 'react-router-dom';

const LoginForm = () => {


  return (
    <div className='flex justify-center bg-[#08080857] overflow-hidden items-center py-8 w-full min-h-screen'>
      <div className='relative container rounded-3xl shadow-lg shadow-black w-[80%] grid md:grid-cols-2 h-fit'>
        <div className='userformimg'>
          <div className='bg-[#000000a7] absolute top-0 left-0 w-full h-full'></div>
          <div className='z-50 relative md:ml-[5%] ml-[10%] md:mt-[40%] p-8'>
            <Heading Write={"WELCOME BACK , FOODIE!"} />
          </div>
        </div>
        <div className='relative px-4 py-4 '>
          <div className='flex ml-[33%]  '>
            <NavLink to={"/login"}>
              <button className='text-white font-serif font text-2xl underline underline-offset-2 hover:text-3xl'>Login </button>
            </NavLink>
            <NavLink to={"/signup"}>
              <button className='text-white font-serif  text-2xl underline underline-offset-2 hover:text-3xl' > / SignUp</button>
            </NavLink>
          </div>
          <div><Login /></div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
