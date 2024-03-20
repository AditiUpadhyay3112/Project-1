import React from 'react'
import Login from '../Components/Login'
import Banner from '../Components/Banner'

import Cardimg1 from '../Images/dessert3.jpg'
import Cardimg2 from '../Images/dessert2.jpg'

import Card1 from '../Components/Card'

const Home = () => {
  return (
    <div>
      <Banner />
<div  className='relative'>
  <div className='bg-[#0101015c] absolute top-0  left-0  w-full h-full'></div>
<div className='md:flex justify-center z-50 relative'>
        <div className='mt-10 md:w-[35%]'> <Card1 Imag={Cardimg1} /></div>
        <div className='mt-10 md:w-[35%]'> <Card1 Imag={Cardimg2} /></div>
        <div className='mt-10 md:w-[35%]'> <Card1 Imag={Cardimg2} /></div>
        <div className='mt-10 md:w-[35%]'> <Card1 Imag={Cardimg2} /></div>
      </div>
      <div className='md:flex justify-center z-50 relative'>
        <div className='mt-10 md:w-[35%]'> <Card1 Imag={Cardimg1} /></div>
        <div className='mt-10 md:w-[35%]'> <Card1 Imag={Cardimg2} /></div>
        <div className='mt-10 md:w-[35%]'> <Card1 Imag={Cardimg2} /></div>
        <div className='mt-10 md:w-[35%]'> <Card1 Imag={Cardimg2} /></div>
      </div>
</div>
    </div>
  )
}

export default Home