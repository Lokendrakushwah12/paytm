import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Components/ui/button'
import Input from '../Components/ui/input'

const Login = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className="flex flex-col w-full px-12 xs:px-4 justify-center items-center rounded-2xl gap-2">
        <h1 className='justify-center w-full items-center text-3xl flex font-[500] text-[#f2f2f2]'>Sign In</h1>
        <form className='flex flex-col w-full justify-center items-center space-y-4 mt-4'>
          <Input type='email' placeholder='Email' />
          <Input type='password' placeholder='Password' />
          <Button label='Sign In' />
        </form>
        <div className='flex justify-center text-[#f2f2f2]/50 font-[300] items-center ' >
          Don't have an account? &nbsp;<Link to='/signup' className='text-[#f2f2f2]  hover:text-[#f2f2f2] hover:underline font-[400]'>Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
