"use client" 
import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react"
import React, { useEffect } from 'react'
import Form from '@/components/CreatePost/Form';

const createPost = () => { 
  // const { data: session, status } = useSession()
    // const router = useRouter();
    // useEffect(()=> {
    //   if(!session)
    //   {
    //     router.push('/')
    //   }
    // },[])

   return (
    <div className='flex justify-center'>
    <div className='p-6 mt-8 lg:w-[35%] md:w-[50%]'>
        <h2 className='text-[30px] 
        font-extrabold text-blue-500'>CREATE POST</h2>
        <p>Create Post and Discover/Invite new Friends and Player </p>
        <Form />
    </div>
    </div>
  )
}

export default createPost