import React, { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import './slider.css'

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 25,
    label: '5',
  },
  {
    value: 50,
    label: '10',
  },
  {
    value: 75,
    label: '15',
  },
  {
    value: 100,
    label: '20',
  },
];


function valuetext(value: number) {
  return `${value}sec`;
}
function valueLabelFormat(value: number) {
  return marks.filter((mark) => mark.value === value)[0].label;
}


export const MainPage = () => {
  const { replace } = useHistory();
  const [title, setTitle] = useState('');
  const [ratio, setRatio] = useState('');
  // const start = () => {
  //   axios
  //     .post('http://localhost:1337/api/saved-workouts', {
  //       username: name,
  //       email: email,
  //       password: pw,
  //       phone: phone,
  //     })
  //     .then((response) => {
  //       // Handle success.
  //       console.log('Well done!');
  //       console.log('User profile', response.data.user);
  //       console.log('User token', response.data.jwt);
  //       localStorage.setItem('token', response.data.jwt);
  //       replace("/");
  //     })
  //     .catch((error) => {
  //       // Handle error.
  //       console.log('An error occurred:', error.response);
  //     });
  // }

  const [mark, setMark] = useState('');

  return (
    <div className='flex'>
      {/*component*/}
      <div className="h-screen w-screen flex bg-gray-200">
        {/* container */}

        <aside
          className="flex flex-col items-center bg-white text-gray-700 shadow h-full">
          {/*Side Nav Ba*/}

          <div className="h-16 flex items-center w-full ">
            {/*Logo Section*/}
            <a className="h-10 w-10 mx-auto" href="/main">
              <img
                className="h-10 w-10 mx-auto"
                src="/img/SSlogo.png"
                alt="SS logo" />
            </a>
          </div>

          <ul>
            {/*Items Section*/}

            {/* <li className="hover:bg-gray-300">
              <a
                href="."
                className="h-16 px-6 flex flex justify-center items-center w-full focus:text-indigo-600">
                <svg className="h-5 w-5" width="45" height="39" viewBox="0 0 45 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.1277 33.1958V28.3095C17.1277 27.0622 18.3228 26.051 19.7971 26.051H25.1861C25.8941 26.051 26.5731 26.289 27.0737 26.7125C27.5743 27.1361 27.8555 27.7105 27.8555 28.3095V33.1958C27.851 33.7144 28.0914 34.213 28.5232 34.581C28.955 34.9491 29.5426 35.156 30.1555 35.156H33.8322C35.5493 35.1598 37.1977 34.5853 38.4134 33.5593C39.6292 32.5333 40.3125 31.1402 40.3125 29.6874V15.7671C40.3125 14.5936 39.6976 13.4803 38.6337 12.7274L26.1263 4.27585C23.9506 2.794 20.8333 2.84184 18.7226 4.38948L6.50065 12.7274C5.38639 13.4582 4.72041 14.5747 4.6875 15.7671V29.6731C4.6875 32.7012 7.58884 35.156 11.1678 35.156H14.7605C16.0335 35.156 17.0681 34.2871 17.0773 33.21L17.1277 33.1958Z" stroke="#4F46E5" stroke-width="3" />
                </svg>

              </a>
            </li> */}

            <li className="hover:bg-gray-300">
              <a
                href="/saved"
                className="h-16 px-6 flex flex justify-center items-center w-full focus:text-indigo-600">
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <polyline
                    points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                  <path
                    d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0
							2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0
							0-1.79 1.11z"></path>
                </svg>

              </a>
            </li>

            {/* <li className="hover:bg-gray-300">
              <a
                href="."
                className="h-16 px-6 flex flex justify-center items-center w-full focus:text-indigo-600">

                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path
                    d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2
							0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>

              </a>
            </li>

//settings
            <li className="hover:bg-gray-300">
              <a
                href="."
                className="h-16 px-6 flex flex justify-center items-center w-full
					focus:text-indigo-600">
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path
                    d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1
							0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0
							0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2
							2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0
							0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1
							0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0
							0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65
							0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0
							1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0
							1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2
							0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0
							1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0
							2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0
							0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65
							1.65 0 0 0-1.51 1z"></path>
                </svg>
              </a>
            </li> */}

          </ul>

          <div className="mt-auto h-16 flex items-center w-full">
            {/*Action Section*/}
            <button
              className="h-16 w-10 mx-auto flex flex justify-center items-center
				w-full focus:text-indigo-600 hover:bg-red-200 focus:outline-none">
              <svg
                className="h-5 w-5 text-red-700"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>

            </button>
          </div>

        </aside>

        <div className="flex-col w-full">
          <div className="m-6 text-3xl text-indigo-600">
            SmartSports
          </div>

          <div className="flex w-full" >
            <div className="w-2/5 px-20 py-12 ml-4">
              <div className="flex flex-col space-y-8">
                <div className="mb-4 text-lg text-indigo-600 space">
                  Video Settings
                </div>
                <div>
                  <div className="block mb-2 text-base text-gray-600 dark:text-gray-200">Time(in seconds)</div>
                  <Box sx={{ width: 1 }}>
                    <Slider
                      aria-label="Always visible"
                      defaultValue={50}
                      getAriaValueText={valuetext}
                      valueLabelFormat={valueLabelFormat}
                      step={25}
                      marks={marks}
                      valueLabelDisplay="on"
                    // onChange={(event: any) => {
                    //   setMark(event.target?.value);
                    // }}
                    />
                  </Box>
                </div>

                <div>
                  <div className="block mb-2 text-base text-gray-600 dark:text-gray-200">
                    Video Size
                  </div>
                  <div className="mx-auto flex space-x-4">
                    <button className="h-6 flex flex justify-center items-center text-indigo-400
				                         focus:text-indigo-600 hover:bg-gray-300 focus:outline-none
                                 w-12 rounded-xl border border-indigo-400 p-2"
                      onClick={() => {
                        setRatio('16')
                      }}>
                      16:9
                    </button>
                    <button className="h-6 flex flex justify-center items-center text-indigo-400
				                         focus:text-indigo-600 hover:bg-gray-300 focus:outline-none
                                 w-12 rounded-xl border border-indigo-400 p-2"
                      onClick={() => {
                        setRatio('4')
                      }}>
                      4:3
                    </button>
                    <button className="h-6 flex flex justify-center items-center text-indigo-400
				                         focus:text-indigo-600 hover:bg-gray-300 focus:outline-none
                                 w-12 rounded-xl border border-indigo-400 p-2"
                      onClick={() => {
                        setRatio('1')
                      }}>
                      1:1
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-base text-gray-600 dark:text-gray-200">Video Title</label>
                  <input
                    name="email" id="email" placeholder="Title of video"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>
                <Link to={`/play/${title}/${ratio}`}>
                  <button className="h-8 mx-auto flex flex justify-center items-center text-indigo-400
				                         focus:text-indigo-600 hover:bg-gray-300 focus:outline-none
                                 w-40 rounded-lg border border-indigo-400 p-2">
                    ▷Start Workout
                  </button>
                </Link>
              </div>
            </div>


            <div className='w-3/5 grid gap-4 grid-cols-2 overflow-y-scroll auto-rows-max ml-20 py-12 min-w-max'>

              <div className='space-y-4 '>
                <div className="h-10 min-w-max text-lg text-indigo-600">Recent Workouts</div>

                <div className='w-64 rounded-lg border border-transparent px-2'>
                  <div className='text-indigo-300 text-right text-xs'>Mon 09 May</div>
                  <div className='w-60 rounded-lg border border-black h-32'></div>
                </div>
                <div className='w-64 rounded-lg border border-transparent px-2'>
                  <div className='text-indigo-300 text-right text-xs'>Mon 09 May</div>
                  <div className='w-60 rounded-lg border border-black h-32'></div>
                </div>
              </div>

              <div className='space-y-4 '>
                <div className="h-10 min-w-max text-lg text-indigo-600 ">Saved Workouts</div>
                <div className='w-64 rounded-lg border border-transparent px-2'>
                  <div className='text-indigo-300 text-right text-xs'>Mon 09 May</div>
                  <div className='w-60 rounded-lg border border-black h-32'></div>
                </div>
                <div className='w-64 rounded-lg border border-transparent px-2'>
                  <div className='text-indigo-300 text-right text-xs'>Mon 09 May</div>
                  <div className='w-60 rounded-lg border border-black h-32'></div>
                </div>
                <div className='w-64 rounded-lg border border-transparent px-2'>
                  <div className='text-indigo-300 text-right text-xs'>Mon 09 May</div>
                  <div className='w-60 rounded-lg border border-black h-32'></div>
                </div>
                <Link to="/saved">
                  <button className="h-6 mt-2 mx-32 flex flex justify-center items-center text-indigo-400
				                         text-sm focus:text-indigo-600 hover:bg-gray-300 focus:outline-none
                                 w-28 rounded-lg border border-indigo-400 ">
                    ▷ View All
                  </button>
                </Link>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div >
  );
};