import React from 'react'
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { SiHyperskill } from "react-icons/si";
import { FaFileCode } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="hidden lg:block border-r-2 w-72">
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
  )
}

export default Sidebar