import React from 'react'

const Card1 = ({Imag}) => {
  return (
    <>
<div className='border-white mx-10 border-2 overflow-hidden rounded-lg  bg-[#4d4c4cc3] '>
    <div className='h-[200px]'>
        <img src={Imag} alt="" className='w-full h-full  hover:scale-125 duration-700' />
    </div>
    <div className='p-4 text-white'>
        <h2 className='text-2xl font-semibold font-serif'>ICECREAM</h2>
        <p className='text-sm pb-3 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, veniam!</p>
        <div className='flex gap-4'>
            <select className='bg-transparent'>
                <option value="">Small</option>
                <option value="">Medium</option>
                <option value="">Large</option>
            </select>
            <b>5$</b>
        </div>
    </div>
</div>
    </>
  )
}

export default Card1