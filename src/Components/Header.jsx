import React from 'react'

const Header = () => {
  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-white font-bold">Logo</div>
          <div className="flex-grow flex items-center">
            <div className="w-full max-w-xs mx-auto">
              <input type="text" placeholder="Search..." className="w-full px-4 py-2 rounded-full focus:outline-none focus:ring focus:ring-blue-400" />
            </div>
          </div>
          <div className="flex items-center">
            <div className="text-white mr-4">User Details</div>
            <img src="user-avatar.jpg" alt="User Avatar" className="w-8 h-8 rounded-full" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
