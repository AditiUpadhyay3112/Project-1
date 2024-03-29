import React from 'react'
import { Link } from 'react-router-dom'

const FirstHome = () => {
  return (
    <div className= 'text-[#e0dcdc] font-serif text-center py-10 bg-[#20202061]'> 
        <h1 className='text-white text-7xl'>TOMATO</h1>
        <h2 className='text-2xl text-white mb-16'>|The Brother of <span className='text-red-500 ml-2 font-bold'> ZOMATO</span>|</h2>

        <div className='text-5xl'>
          <Link to={"/login"}><button className=' hover:text-white'>LOGIN</button> </Link>/ 
      <Link to={"signup"}> <button className=' hover:text-white'>SIGN-UP</button></Link> 
        </div>
    </div>
  )
}

export default FirstHome