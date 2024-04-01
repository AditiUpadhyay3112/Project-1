import React from 'react';
import { NavLink } from 'react-router-dom';
import Heading from './Heading';
import Btn2 from './Btn2';

const OTP = () => {
    return (
        <div className='flex justify-center bg-[#08080857] overflow-hidden items-center py-8 w-full min-h-screen'>
        <div className='relative container rounded-3xl shadow-lg shadow-black w-[80%] grid md:grid-cols-2 h-fit'>
          <div className='userformimg'>
            <div className='bg-[#000000a7] absolute top-0 left-0 w-full h-full'></div>
            <div className='z-50 relative md:ml-[5%] ml-[10%] md:mt-[40%] p-8'>
              <Heading Write={"Check your PHONE and EMAIL, Please."} />
            </div>
          </div>
          <div className='relative px-4 py-4 '>
            <div>
            <div className="bg-[#20202000] min-h-screen flex justify-center items-center">
            <div className="bg-[#e8e4e400]    w-full max-w-md">
                <h2 className="text-3xl font-serif text-white font-semibold text-center mb-10 ">Authentication</h2>
                <form>
                <div className="mb-4">
                        <label htmlFor="number" className="block text-xl font-medium text-white">Enter OTP</label>
                        <input type="number" id="number" name="number" className="mt-1 text-white py-2 px-2 font-semibold  block w-full shadow-sm sm:text-sm bg-transparent border-b-2" />
                    </div>
                    <div>

                        <NavLink to={"/change-password"}>
                       <Btn2 btnval={"Submit"}/>
                        </NavLink>
                    </div>
                </form>
            </div>
        </div>
            </div>
          </div>
        </div>
      </div>



       
    );
};

export default OTP;
