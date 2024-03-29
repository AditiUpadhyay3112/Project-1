import React from 'react'
import Login from '../Components/Login'
import Banner from '../Components/Banner'

import Cardimg1 from '../Images/dessert3.jpg'
import Cardimg2 from '../Images/dessert2.jpg'
import Cardimg3 from '../Images/ice1.jpeg'
import Cardimg4 from '../Images/ice2.webp'
import Cardimg5 from '../Images/ice3.webp'
import Cardimg6 from '../Images/ice4.webp'
import Cardimg7 from '../Images/ice5.webp'
import Cardimg8 from '../Images/ice6.jpeg'
import Cardimg9 from '../Images/ice7.jpeg'


import Card1 from '../Components/Card'

const Home = () => {
  return (
    <div>
      <Banner />
<div  className='relative'>
  <div className='bg-[#0101015c] absolute top-0  left-0  w-full h-full'></div>
<div className='md:flex justify-center z-50 relative'>
        <div className='mt-10 md:w-[30%]'> <Card1 Imag={Cardimg1} /></div>
        <div className='mt-10 md:w-[30%]'> <Card1 Imag={Cardimg2} /></div>
        <div className='mt-10 md:w-[30%]'> <Card1 Imag={Cardimg3} /></div>
      </div>
      <div className='md:flex justify-center z-50 relative'>
        <div className='mt-10 md:w-[30%]'> <Card1 Imag={Cardimg4} /></div>
        <div className='mt-10 md:w-[30%]'> <Card1 Imag={Cardimg5} /></div>
        <div className='mt-10 md:w-[30%]'> <Card1 Imag={Cardimg6} /></div>
      </div>
      <div className='md:flex justify-center z-50 relative'>
        <div className='mt-10 md:w-[30%]'> <Card1 Imag={Cardimg7} /></div>
        <div className='mt-10 md:w-[30%]'> <Card1 Imag={Cardimg8} /></div>
        <div className='mt-10 md:w-[30%]'> <Card1 Imag={Cardimg9} /></div>
      </div>
</div>
    </div>
  )
}

export default Home