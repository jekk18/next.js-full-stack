"use client"
import Image from 'next/image';
import React from 'react'
import { useRouter } from 'next/navigation'
import { HiDocumentPlus } from "react-icons/hi2";
import { HiMiniArrowLeftStartOnRectangle } from "react-icons/hi2";

const AVATAR_IMG = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&s';
const Header = () => {
  const router = useRouter();

  return (
    <div className='flex justify-between p-3 items-center border-b-[2px] border-[#FF3366]'>
        <a href="/" className='text-[26px] font-bold text-cyan-800'>LOGO</a>
      <div className="flex items-center gap-4">
      <div className='gap-4 flex'>
            <button className='bg-black p-2 px-3 text-white text-base rounded-full' onClick={() => router.push('/create-post')}><span className='hidden sm:block'>CREATE POST</span> 
            <HiDocumentPlus className='sm:hidden text-[20px]'/></button>
            <button className='bg-white bg-gray-500 p-2 px-3 border-[1px] rounded-full'><span className='hidden sm:block'>SIGN IN</span>
            <HiMiniArrowLeftStartOnRectangle className='sm:hidden text-[20px]' /></button>
        </div>
        <div>
            <Image onClick={() => router.push('/profile')} src={AVATAR_IMG} width={70} height={70} alt='profile-avatar'/>
        </div>
      </div>
    </div>
  )
}

export default Header