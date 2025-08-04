import React from 'react'

function HeaderAdmin() {
  return (
    <>
    <header className="px-[75px] py-[27px] flex flex-row justify-between items-center w-full">
        <div><img src="../assets/imgs/logo/logo-1.png" alt="logo.png" /></div>

        <nav className="flex justify-between items-center gap-[60px]">
            <div><a href="../index.html" className='text-[#1D4ED8]'>Dashboard</a></div>
            <div><a href="../pages/movie.html">Movie</a></div>
        </nav>

        <div className="profile-menu flex justify-between items-center gap-[5px]">   
            <div><a href="#">Location</a></div>
            <div><a href="#"><img src="../assets/imgs/icon/Forward.png" alt="arrow-down" /></a></div>
            <div><a href="#"><img src="../assets/imgs/icon/search1.png" alt="search" /></a></div>
            <div className="relative">
              <div className="w-[56px] h-[56px] flex items-center overflow-hidden rounded-full dropdown">
                <button className="w-full h-full">
                  <img className="w-full h-full object-cover" src="../assets/imgs/profile.png" alt="" />
                </button>
              </div>

              <div id="dropdown-menu" className="hidden absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md border border-gray-200 z-10 dropdown-menu">
                <ul className="py-2">
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 log-out">Logout</a>
                  </li>
                </ul>
              </div>
            </div>
            
        </div>
    </header>
    </>
  )
}

export default HeaderAdmin