import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye } from 'lucide-react';
import Card from '../Components/ui/Card';
import axios from 'axios';
import Input from '../Components/ui/input';

const DashboardPage = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState('');
    const [balance, setBalance] = useState('');

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/user/bulk?filter=' + filter, {

                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    }
                });
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        }
        getUsers();
    }, [filter])

    const getBalance = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/v1/account/balance', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,

                }
            });
            console.log(response.data.balance);
        } catch (error) {
            console.error('Error fetching balance:', error);
        }
    }
    // getBalance();


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
                    <Input type='search' placeholder='Search' onChange={(e) => setFilter(e.target.value)} />
                    <div className="flex flex-col w-full justify-center items-center gap-4">
                        {users.map(user => (
                            <Card key={user._id} title={user.username} subtitle={user.email} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage
