import React from 'react'

const Btn2 = ({btnval}) => {
  return (
    <div>
         <button type="submit" className="w-full flex justify-center py-4 f  px-4 hover:border-2 border-[#251f1fba] border-2 border-white rounded-md font-bold text-lg font-serif text-white  hover:bg-[#313030ba]  focus:ring-1 focus:ring-offset-1 focus:ring-[#251f1fba]">
                          {btnval}
                        </button>
    </div>
  )
}

export default Btn2