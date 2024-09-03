import React from 'react'
import { Link } from 'react-router-dom'

const SendPage = () => {
    return (
        <div className='h-screen flex justify-center items-start pt-24'>
            <div className="flex flex-col w-full px-12 xs:px-4 justify-start items-center rounded-2xl gap-2">
                <h1 className='justify-center w-full items-center text-7xl flex font-[500] text-[#f2f2f2] pb-32'>Send Money</h1>
                <img src="https://avatars.githubusercontent.com/u/77189432" draggable='false' alt="Lokendra Kushwah" className='rounded-full select-none w-[60px] h-[60px]' />
                <p className='text-center font-[300] text-[#f2f2f2]/70 text-lg mb-4'>Lokendra Kushwah</p>
                <div className='flex flex-col w-full justify-center items-center gap-4'>
                    <Link to="/">
                        <button className='bg-[#f2f2f2]  hover:bg-[#e0e0e0] w-[120px] md:w-[200px] font-[600] text-[#212121] border-none p-2 rounded-md'>Initiate Transfer</button>
                    </Link>
                    <Link to="/">
                        <button className='border-[#f2f2f2]/10 hover:bg-[#161616] transition-all w-[120px] md:w-[200px] font-[600] text-[#f2f2f2] border p-2 rounded-md'>Cancel</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SendPage
