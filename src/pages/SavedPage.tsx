import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


export const SavedPage = () => {
const [videos, setVideos] = useState([]);
const { push } = useHistory();

  useEffect(() => {
    axios
      .get('https://smart--sports.herokuapp.com/api/videos')
      .then((res) => res.data.data)
      .then((data) => {
        console.log('data : ', data);
        setVideos(data);
      });
  }, []);
    return (
        <div className='flex'>
            {/*<!-- component -->*/}
            <div className="h-screen w-screen flex bg-gray-200">
                {/* <!-- container --> */}

                <aside
                    className="flex flex-col items-center bg-white text-gray-700 shadow h-full">
                    {/*<!-- Side Nav Bar-->*/}

                    <div className="h-16 flex items-center w-full ">
                        {/*<!-- Logo Section -->*/}
                        <a className="h-10 w-10 mx-auto" href="/saved">
                            <img
                                className="h-10 w-10 mx-auto"
                                src="/img/SSlogo.png"
                                alt="SS logo" />
                        </a>
                    </div>



                    <ul>
                        {/*<!-- Items Section -->*/}

                        <li className="hover:bg-gray-300">
                            <a
                                href="/main"
                                className="h-16 px-6 flex flex justify-center items-center w-full focus:text-indigo-600">
                                <svg
                                    className='h-5 w-5'
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" />
                                    <path d="M9 22V12H15V22" />
                                </svg>


                            </a>
                        </li>

                    </ul>

                    <div className="mt-auto h-16 flex items-center w-full">
                        {/*<!-- Action Section -->*/}
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

                <div>

                    <div className="h-10 ml-16 mt-12 min-w-max text-2xl text-indigo-600">Workout Videos</div>
                    <div className='w-screen grid gap-4 grid-cols-4 overflow-y-scroll auto-rows-max p-16 min-w-max'>


                        

                        <div className='w-64 rounded-lg border border-transparent p-2'>
                            <div className='text-indigo-300 text-right text-xs'>Mon 09 May</div>
                            <div className='w-60 rounded-lg border border-black h-32'></div>
                        </div>
                        <div className='w-64 rounded-lg border border-transparent p-2'>
                            <div className='text-indigo-300 text-right text-xs'>Mon 09 May</div>
                            <div className='w-60 rounded-lg border border-black h-32'></div>
                        </div>
                        <div className='w-64 rounded-lg border border-transparent p-2'>
                            <div className='text-indigo-300 text-right text-xs'>Mon 09 May</div>
                            <div className='w-60 rounded-lg border border-black h-32'></div>
                        </div>
                        <div className='w-64 rounded-lg border border-transparent p-2'>
                            <div className='text-indigo-300 text-right text-xs'>Mon 09 May</div>
                            <div className='w-60 rounded-lg border border-black h-32'></div>
                        </div>
                        <div className='w-64 rounded-lg border border-transparent p-2'>
                            <div className='text-indigo-300 text-right text-xs'>Mon 09 May</div>
                            <div className='w-60 rounded-lg border border-black h-32'></div>
                        </div>
                        <div className='w-64 rounded-lg border border-transparent p-2'>
                            <div className='text-indigo-300 text-right text-xs'>Mon 09 May</div>
                            <div className='w-60 rounded-lg border border-black h-32'></div>
                        </div>
                        <div className='w-64 rounded-lg border border-transparent p-2'>
                            <div className='text-indigo-300 text-right text-xs'>Mon 09 May</div>
                            <div className='w-60 rounded-lg border border-black h-32'></div>
                        </div>
                        <div className='w-64 rounded-lg border border-transparent p-2'>
                            <div className='text-indigo-300 text-right text-xs'>Mon 09 May</div>
                            <div className='w-60 rounded-lg border border-black h-32'></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};