import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className="flex flex-col w-full px-12 xs:px-4 justify-center items-center rounded-2xl gap-2">
                <h1 className='justify-center w-full items-center text-3xl flex font-[500] text-[#f2f2f2]'>Sign Up</h1>
                <form className='flex flex-col w-full justify-center items-center space-y-4 mt-4'>
                    <input type='text' placeholder='First Name' className='p-2 w-full md:w-[400px] border border-[#f2f2f2]/10 focus:border-[#f2f2f2]/20 outline-none placeholder:font-[300] placeholder:text-[#f2f2f2]/30 rounded-lg' />
                    <input type='text' placeholder='Last Name' className='p-2 w-full md:w-[400px] border border-[#f2f2f2]/10 focus:border-[#f2f2f2]/20 outline-none placeholder:font-[300] placeholder:text-[#f2f2f2]/30 rounded-lg' />
                    <input type='email' placeholder='Email' className='p-2 w-full md:w-[400px] border border-[#f2f2f2]/10 focus:border-[#f2f2f2]/20 outline-none placeholder:font-[300] placeholder:text-[#f2f2f2]/30 rounded-lg' />
                    <input type='password' placeholder='Password' className='p-2 w-full md:w-[400px] border border-[#f2f2f2]/10 focus:border-[#f2f2f2]/20 outline-none placeholder:font-[300] placeholder:text-[#f2f2f2]/30 rounded-lg' />
                    <input type='password' placeholder='Confirm Password' className='p-2 w-full md:w-[400px] border border-[#f2f2f2]/10 focus:border-[#f2f2f2]/20 outline-none placeholder:font-[300] placeholder:text-[#f2f2f2]/30 rounded-lg' />
                    <button className='bg-[#f2f2f2] w-full md:w-[400px] font-[600] text-[#212121] border-none p-2 rounded-md'>Sign Up</button>
                </form>
                <div className='flex justify-center text-[#f2f2f2]/50 font-[300] items-center ' >
                    Already have an account? &nbsp;<Link href='/signin' className='text-[#f2f2f2] hover:text-[#f2f2f2] hover:underline font-[400]'>Sign In</Link>
                </div>
            </div>
        </div>
    )
}

export default Register
