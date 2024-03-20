import React from 'react';
import Login from './Login';
import Img from "../Images/Pizza1.jpg";
import { GrClose } from "react-icons/gr";


const UserForm = () => {
  return (
    <div className='ml-[10%] mt-[5%] mb-[5%] flex justify-center w-[80%] bg-[#352e2eb3] overflow-hidden items-center h-screen'>
      <div className='w-1/2 '>
        <img src={Img} className='w-full h-auto shadow-2xl shadow-black rounded-lg' alt="Dessert" />
      </div>
      <div className='w-1/2  px-4'>
        <Login />
       

      </div>
      <button className=''><GrClose /></button>
    </div>
  );
}

export default UserForm;
