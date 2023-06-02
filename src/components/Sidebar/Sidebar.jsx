'use client'

import React, { useEffect, useState } from 'react'
import Boards from '../Boards/Boards'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwticher';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const baseRightArrowClassName = 'transition duration-700 ease-out'
  const baseSidebarClassName = 'w-60 h-full bg-zinc-900 border-r-1 border-gray-100 text-gray-500 relative flex flex-col justify-between transition duration-700 ease-in-out'



  const handleOpenerClick = (e) => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <sidebar className={isSidebarOpen ? baseSidebarClassName : baseSidebarClassName  + ' -translate-x-60' } >
      <div className=''>
        <h4 className='ml-4 mt-8' >Boards (4)</h4>
        <Boards />
      </div>
      <div className='w-full p-4 flex flex-col justify-center relative'>
        <ThemeSwitcher />
        <div className='w-12 h-8 pr-1 bg-zinc-900 rounded-r-md relative bottom-28 -right-52  flex items-center justify-end hover:cursor-pointer' >
          <ArrowForwardIosIcon
            className={isSidebarOpen ? baseRightArrowClassName + ' rotate-180' : baseRightArrowClassName}
            onClick={handleOpenerClick}
            />
        </div>
      </div>
    </sidebar>
  )
}

export default Sidebar
