import React from 'react';

const Login = () => {
    return (
        <div className="bg-[#20202000] min-h-screen flex justify-center items-center">
            <div className="bg-[#e8e4e400] p-8   w-full max-w-md">
                <h2 className="text-3xl font-serif text-white font-semibold text-center mb-6">Login</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-xl font-medium text-white">Name</label>
                        <input type="text" id="name" name="name" className="mt-1 block w-full shadow-sm sm:text-sm bg-transparent border-b-2" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-xl font-medium text-white">Email</label>
                        <input type="email" id="email" name="email" className="mt-1 block w-full shadow-sm sm:text-sm bg-transparent border-b-2" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-xl font-medium text-white">Phone Number</label>
                        <input type="tel" id="phone" name="phone" className="mt-1 block w-full shadow-sm sm:text-sm bg-transparent border-b-2" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="dob" className="block text-xl font-medium text-white">Date of Birth</label>
                        <input type="date" id="dob" name="dob" className="mt-1 block w-full shadow-sm sm:text-sm bg-transparent border-b-2" />
                    </div>
                    <div>
                        <button type="submit" className="w-full flex justify-center py-2 px-4 hover:border-2 border-[#251f1fba] border-2 border-white rounded-md text-sm font-medium text-white  hover:bg-[#313030ba]  focus:ring-1 focus:ring-offset-1 focus:ring-[#251f1fba]">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
