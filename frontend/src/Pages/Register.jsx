import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../Components/ui/input';
import Button from '../Components/ui/button';
import axios from 'axios'
import Spinner from '../Components/ui/spinner'

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const validateForm = () => {
        if (password.length < 8) {
            setError('Password must be at least 8 characters long.');
            return false;
        } else if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return false;
        }
        setError('');
        return true;
    };

    const onSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        if (validateForm()) {
            const response = await axios.post('http://localhost:5000/api/v1/user/signup', {
                username: email,
                firstName,
                lastName,
                password
            });
            localStorage.setItem('token', response.data.token);
            setLoading(false);
        }
    };

    return (
        <div className='h-screen flex justify-center items-center'>
            <div className="flex flex-col w-full px-12 xs:px-4 justify-center items-center rounded-2xl gap-2">
                <h1 className='justify-center w-full items-center text-3xl flex font-[500] text-[#f2f2f2]'>Sign Up</h1>
                <form onSubmit={onSubmit} className='flex flex-col w-full justify-center items-center space-y-4 mt-4'>
                    <Input type='text' name='firstName' value={firstName} placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />
                    <Input type='text' name='lastName' value={lastName} placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} />
                    <Input type='email' name='email' value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                    <Input type='password' name='password' value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                    <Input type='password' name='confirmPassword' value={confirmPassword} placeholder='Confirm Password' onChange={(e) => setConfirmPassword(e.target.value)} />
                    {error && <div className='text-red-500 font-[300] text-left text-sm'>{error}</div>}
                    <Button label='Sign Up' icon={<Spinner />} />
                </form>
                <div className='flex justify-center text-[#f2f2f2]/50 font-[300] items-center ' >
                    Already have an account? &nbsp;<Link to='/signin' className='text-[#f2f2f2] hover:text-[#f2f2f2] hover:underline font-[400]'>Sign In</Link>
                </div>
            </div>
        </div>
    )
}

export default Register;