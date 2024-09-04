import React from 'react'
import { Link } from 'react-router-dom'
import { Eye } from 'lucide-react';
import Card from '../Components/ui/Card';

const DashboardPage = () => {
    return (
        <div className='h-screen flex justify-center items-start pt-24'>
            <div className="flex flex-col w-full px-12 xs:px-4 justify-start items-center rounded-2xl gap-2">
                <h1 className='justify-center w-full items-center text-7xl flex font-[500] text-[#f2f2f2] pb-12'>Dashboard</h1>
                {/* header */}
                <div className="flex md:max-w-[700px] w-full justify-between">
                    <div className="flex justify-center items-center gap-2">
                        <img src="https://avatars.githubusercontent.com/u/77189432" draggable='false' alt="Lokendra Kushwah" className='rounded-full select-none w-[40px] md:w-[60px] h-[40px] md:h-[60px]' />
                        <p className='text-left font-[300] text-[#f2f2f2]/70 text-lg'>Lokendra Kushwah</p>
                    </div>
                    <div className="flex flex-col justify-start items-start">
                        <p className='text-center font-[500] text-[#f2f2f2] text-3xl'>1000 <span className='text-[#f2f2f2]/70 font-[300] text-lg'>INR</span></p>
                        <div className="flex justify-center items-center gap-1">
                            <p className='text-center font-[300] text-[#f2f2f2]/70 text-lg'>Total Balance</p>
                            <Eye color="#f2f2f299" size={18} />
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className='w-full  md:max-w-[700px] my-2 h-[1px] bg-[#f2f2f2]/10' />
                <div className="flex flex-col md:max-w-[700px] gap-2 w-full justify-center">
                    <h3 className='text-left font-[500] text-[#f2f2f2] text-3xl'>Users</h3>
                    <div className="flex flex-col w-full justify-center items-center gap-4">
                        <div className="flex justify-between w-full items-center p-2 bg-[#f2f2f2]/5 rounded-lg">
                            <div className="flex justify-center items-center gap-2">
                                <img src="https://avatars.githubusercontent.com/u/77189432" draggable='false' alt="Lokendra Kushwah" className='rounded-full select-none w-[25px] border md:w-[40px] h-[25px] md:h-[40px]' />
                                <p className='text-center font-[300] text-[#f2f2f2]/70 tex-sm md:text-lg'>Lokendra Kushwah</p>
                            </div>
                            <div className="flex justify-center items-center gap-2">
                                {/* <p className='text-center font-[300] text-[#f2f2f2]/70 text-lg'>1000 <span className='text-[#f2f2f2]/70 font-[300] text-lg'>INR</span></p>
                                <Eye color="#f2f2f299" size={18} /> */}
                                <Link to="/transfer">
                                    <button className='border-[#f2f2f2]/10 hover:bg-[#161616] md:text-base text-sm transition-all w-[120px] md:w-[200px] bg-[#121212] font-[600] text-[#f2f2f2] border p-2 rounded-md'>Send Money</button>
                                </Link>
                            </div>
                        </div>
                        <Card name='Lokendra' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage
