import React from 'react';
import { RouteComponentProps, useHistory, useParams } from 'react-router-dom';

interface PlayParams {
    title: string;
    ratio: string;
}

export function PlayPage({ match }: RouteComponentProps<PlayParams>) {

    const { title, ratio } = match.params;
    
    return (
        <div className="h-screen w-screen flex bg-gray-200">
        <aside
            className="flex flex-col items-center bg-white text-gray-700 shadow h-full">
            {/*<!-- Side Nav Bar-->*/}

            <div className="h-16 flex items-center w-full">
                {/*<!-- Logo Section -->*/}
                <a className="h-6 w-6 mx-auto">
                    <img
                        className="h-6 w-6 mx-auto"
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
                        <svg className='h-5 w-5'
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
                            <path d="M9 22V12H15V22" /></svg>
                    </a>
                </li>

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

                <li className="hover:bg-gray-300">
                    <a
                        href="."
                        className="h-16 px-6 flex justify-center items-center w-full focus:text-indigo-600">

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
                </li>

            </ul>

        </aside>


        <div className="demo-section flex flex-col space-y-4">
            <h1 className="m-4 text-3xl text-gray-700">Title: {title}</h1>

            <div className="flex flex-col ml-4 space-y-4">
                
            </div>


        </div>


        <div className='h-screen-5 w-screen rounded-lg border border-transparent p-2 m-2'>
            <div className='h-full w-full flex rounded-lg border border-gray-300'>
                
            </div>
            <div className="flex flex-row-reverse">
                
            </div>
        </div>
    </div>
    );
};