import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Components/ui/button';
import Input from '../Components/ui/input';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/v1/user/signin', {
        username: email,
        password
      });
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard'); // Use navigate from react-router-dom for redirection
    } catch (error) {
      setError('An error occurred during login. Please try again.');
      console.error('Login error:', error); // Log error for debugging
    }
  };

  return (
    <div className='h-screen flex justify-center items-center'>
      <div className="flex flex-col w-full px-12 xs:px-4 justify-center items-center rounded-2xl gap-2">
        <h1 className='justify-center w-full items-center text-3xl flex font-[500] text-[#f2f2f2]'>Sign In</h1>
        <form onSubmit={onSubmit} className='flex flex-col w-full justify-center items-center space-y-4 mt-4'>
          <Input 
            type='email' 
            placeholder='Email' 
            value={email} // Controlled input
            onChange={(e) => setEmail(e.target.value)} 
          />
          <Input 
            type='password' 
            placeholder='Password' 
            value={password} // Controlled input
            onChange={(e) => setPassword(e.target.value)} 
          />
          {error && <div className='text-red-500 font-[300] text-left text-sm'>{error}</div>}
          <Button label='Sign In' />
        </form>
        <div className='flex justify-center text-[#f2f2f2]/50 font-[300] items-center '>
          Don't have an account? &nbsp;
          <Link to='/signup' className='text-[#f2f2f2] hover:text-[#f2f2f2] hover:underline font-[400]'>Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;