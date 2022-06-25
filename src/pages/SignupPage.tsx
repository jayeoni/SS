import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export const SignupPage = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [pw, setPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');

  const { replace } = useHistory();

  const register = () => {
    axios
      .post('https://smart-sports.herokuapp.com/api/auth/local/register', {
        username: name,
        email: email,
        password: pw,
        phone: phone,
      })
      .then((response) => {
        // Handle success.
        console.log('Well done!');
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
        localStorage.setItem('token', response.data.jwt);
        replace("/");
      })
      .catch((error) => {
        // Handle error.
        console.log('An error occurred:', error.response);
      });
  }

  const checkPw = () => {
    if (email === '' || pw === '' || confirmPw === '') {
      alert('Enter Email and Password');
      return;
    }

    if (pw === confirmPw) {
      alert('Thank you for choosing SmartSports👍');
      replace('/login');
      return;
    } else if (pw !== confirmPw) {
      alert('Please check your password');
    }
    alert('Login failed. Try again!');
  }

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="flex justify-center h-screen">

        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white"> Welcome to SmartSports, <br />Become a member!</h2>
              <p className="mt-3 text-gray-500 dark:text-gray-300">Sign in to access your account</p>
            </div>

            <div className="mt-8 space-y-6">
              <TextField
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                label={'Name'}
                placeholder="Your Name"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
              <TextField
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                label={'Email'}
                placeholder="example@example.com"
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <TextField
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                label={'Phone Number'}
                placeholder="Your phone number"
                value={phone}
                onChange={(event) => {
                  setPhone(event.target.value);
                }}
              />
              <TextField
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                label={'Password'}
                placeholder="Your password"
                value={pw}
                type="password"
                onChange={(event) => {
                  setPw(event.target.value);
                }}
              />
              <TextField
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                label={'Confirm Password'}
                placeholder="Confirm password"
                value={confirmPw}
                type="password"
                onChange={(event) => {
                  setConfirmPw(event.target.value);
                }}
              />

              <div className="mt-6">
                <button
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  onClick={() => {
                    checkPw();
                    register();
                  }}>
                  Sign up
                </button>
              </div>

            </div>
          </div>
        </div>

        <div className="hidden bg-cover lg:block lg:w-2/3" style={{ backgroundImage: "url(" + "https://images.unsplash.com/photo-1475173277047-80300315b309?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" + ")" }}>
          <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
            <div>
              <h2 className="text-4xl font-bold text-white">Hello, we are SmartSports</h2>
              <h3 className="max-w-xl mt-3 text-gray-300">You are about to become a smart athlete with us!</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
