import React from 'react'
import Back from '../Images/bannerimg.jpg'
import Btn from './Btn'
const Banner = () => {
  return (
    <div>
        <section className=' md:py-[150px] py-[50px] bg-no-repeat bg-cover relative' style={{backgroundImage:`url(${Back})`}}>
           <div className='absolute top-0  left-0  w-full h-full bg-[#000000a0]'></div>
            <div className="container mx-auto  z-50 relative px-4">
                <div className="text-center md:w-[60%] mx-auto text-white ">
                   <h2 className=' text-7xl pb-2 font-bold font-serif'> TOMATO</h2>
                   <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eum ad doloribus, libero voluptas debitis asperiores dolor cum nam similique.</p>
                  <Btn Butt={"KNOW MORE"}/>
              </div>
            </div>
        </section>
    </div>
  )
}

export default Banner