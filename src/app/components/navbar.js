import React, { useState } from 'react'
import Image from "next/image";
import whatsbyte from "../img/Whatbyes.png"
import userImage from "../img/userImage.jpeg"
import { HiOutlineX, HiOutlineMenuAlt2 } from "react-icons/hi";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { SiHyperskill } from "react-icons/si";
import { FaFileCode } from "react-icons/fa";

const Navbar = () => {

    const [sideNav, setSideNav] = useState(false)

    const toggleSideNav = () => {
        setSideNav(!sideNav)
    }
  return (
    <nav className="border-b-2">
      <div className="px-5 md:px-10  flex justify-between py-3 items-center">
        
        <div className="flex w-36 h-10 md:w-38 lg:w-48">
        <div className='flex text-2xl items-center mr-3 lg:hidden' onClick={toggleSideNav}>
            {sideNav ? <div className='text-2xl stroke-2'><HiOutlineX /></div> : <div className='text-2xl stroke-2'><HiOutlineMenuAlt2 /></div>}
        </div>
          <Image className="w-full h-full object-fill" src={whatsbyte} alt="Whatbytes Logo"/>
        </div>
        <div className="flex justify-between items-center px-2 border-2 py-2">
          <Image className="mx-2 w-10 lg:w-12 h-10 rounded-full" src={userImage} alt="user"/>
          <p className="mx-2 text-lg font-semibold">Daniel Fred</p>
        </div>
      </div>

      <div className={sideNav ? 'px-5 z-50 fixed top-[90px] w-[100%] h-[100%] bg-white py-4 shadow-xl ease-in-out duration-800 md:hidden' : 'fixed left-[-100%]'}>
          <div className="flex items-center py-5 my-5 w-full md:px-10">
            <TbLayoutDashboardFilled className="text-lg mr-5" />
            <p className="text-base font-semibold">Dashboard</p>
          </div>

          <div className="flex items-center py-5 my-5 bg-gray-300 w-[90%] md:px-10 rounded-r-full text-blue-700">
            <SiHyperskill className="text-lg mr-5" />
            <p className="text-base font-semibold">Skill Test</p>
          </div>

          <div className="flex items-center py-5 my-5 w-full md:px-10">
            <FaFileCode className="text-lg mr-5" />
            <p className="text-base font-semibold">Internship</p>
          </div>
      </div>
     </nav>
  )
}

export default Navbar