import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import DateTimePicker from 'react-datetime-picker';


import {
    RecordWebcam,
    useRecordWebcam,
    CAMERA_STATUS
} from "react-record-webcam";
import type {
    WebcamRenderProps,
    RecordWebcamOptions,
    RecordWebcamHook
} from "react-record-webcam";
import "./styles.css";
import { RouteComponentProps, useHistory, useParams } from 'react-router-dom';


interface PlayParams {
    title: string;
    ratio: string;
}

export function WorkoutPage({ match }: RouteComponentProps<PlayParams>) {
    const [date, setDate] = useState(new Date());
    const [video, setVideo] = useState('');

    const videos = () => {
        axios
          .post('https://smart--sports.herokuapp.com/api/videos', {
            data: {
              title: title,
              date: date,
              video: video,
            },
          })
          .then((response) => {
            // Handle success.
            console.log('Well done!');
            push('/saved');
          })
          .catch((error) => {
            // Handle error.
            console.log('An error occurred:', error.response);
          });
      };

    const saveFile = async () => {
        const blob = await recordWebcam.getRecording();
    };

    const { push } = useHistory();
    const { title, ratio } = match.params;

    let width = 1920
    let height = 1080

    if (ratio === '4') {
        width = 1920
        height = 1440
    } else {
        width = 1080
        height = 1080
    }

    const OPTIONS: RecordWebcamOptions = {
        filename: title,
        fileType: "mp4",
        width: width,
        height: height
    };

    const recordWebcam: RecordWebcamHook = useRecordWebcam(OPTIONS);

    const getRecordingFileHooks = async () => {
        const blob = await recordWebcam.getRecording();
        console.log({ blob });
    };

    const getRecordingFileRenderProp = async (blob: Blob | undefined) => {
        console.log({ blob });
    };

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
                    <button
                        disabled={
                            recordWebcam.status === CAMERA_STATUS.OPEN ||
                            recordWebcam.status === CAMERA_STATUS.RECORDING ||
                            recordWebcam.status === CAMERA_STATUS.PREVIEW
                        }
                        onClick={recordWebcam.open}
                    >
                        <img
                            className="h-5 w-6 mx-auto flex justify-center items-center text-indigo-400
                            focus:text-indigo-600 hover:bg-gray-300 focus:outline-none border"
                            src="/img/Camera.png"
                            alt="Camera Open"
                        />
                    </button>
                    <button
                        disabled={
                            recordWebcam.status === CAMERA_STATUS.CLOSED ||
                            recordWebcam.status === CAMERA_STATUS.PREVIEW
                        }
                        onClick={recordWebcam.close}
                    >
                        <img
                            className="h-6 w-7 mx-auto flex justify-center items-center text-indigo-400
                            focus:text-indigo-600 hover:bg-gray-300 focus:outline-none border"
                            src="/img/NoCamera.png"
                            alt="Camera Close"
                        />
                    </button>
                    <button
                        disabled={
                            recordWebcam.status === CAMERA_STATUS.CLOSED ||
                            recordWebcam.status === CAMERA_STATUS.RECORDING ||
                            recordWebcam.status === CAMERA_STATUS.PREVIEW
                        }
                        onClick={recordWebcam.start}
                    >
                        <img
                            className="h-5 w-5 mx-auto flex justify-center items-center text-indigo-400
                            focus:text-indigo-600 hover:bg-gray-300 focus:outline-none rounded-xl border"
                            src="/img/Record.png"
                            alt="Start Record"
                        />
                    </button>
                    <button
                        disabled={recordWebcam.status !== CAMERA_STATUS.RECORDING}
                        onClick={recordWebcam.stop}
                    >
                        <img
                            className="h-6 w-7 mx-auto flex justify-center items-center text-indigo-400
                            focus:text-indigo-600 hover:bg-gray-300 focus:outline-none border"
                            src="/img/Stop.png"
                            alt="Stop Record"
                        />
                    </button>
                    <button 
                        disabled={recordWebcam.status !== CAMERA_STATUS.PREVIEW}
                        onClick={recordWebcam.retake}
                    >
                        <img
                            className="h-6 w-7 mx-auto flex justify-center items-center text-indigo-400
                            focus:text-indigo-600 hover:bg-gray-300 focus:outline-none border"
                            src="/img/Retake.png"
                            alt="Retake"
                        />
                    </button>

                    {/* <button className='h-6 flex flex justify-center items-center text-indigo-400
				                         focus:text-indigo-600 hover:bg-gray-300 focus:outline-none
                                 w-32 rounded-xl border border-indigo-400 p-2'
                        disabled={recordWebcam.status !== CAMERA_STATUS.PREVIEW}
                        onClick={getRecordingFileHooks}
                    >
                        Get recording
                    </button> */}

                    

                    {/* <div className="flex flex-col max-w-xl content-center w-full my-1 bg-white shadow-md rounded-lg mx-auto">
                        <span className="text-black-600 text-sm mx-4 mt-4 ">마감</span>
                        <div className="flex mt-1 relative rounded-md shadow-sm">
                        <DateTimePicker
                            onChange={onDueChange}
                            value={due}
                            className="mx-4 mb-4 w-full border-"
                            calendarClassName="border-0 border-2"
                        />
                        </div>
                    </div> */}

                </div>
            </div>


            <div className='h-screen-5 w-screen rounded-lg border border-transparent p-2 m-2'>
                <div className='h-full w-full flex rounded-lg border border-gray-300'>
                    <p className='m-4 text-gray-600'>Camera status: {recordWebcam.status}</p>
                    <video
                        ref={recordWebcam.webcamRef}
                        style={{
                            display: `${recordWebcam.status === CAMERA_STATUS.OPEN ||
                                recordWebcam.status === CAMERA_STATUS.RECORDING
                                ? "block"
                                : "none"
                                }`
                        }}
                        //autoPlay
                        muted
                        controls
                    />
                    <video
                        ref={recordWebcam.previewRef}
                        style={{
                            display: `${recordWebcam.status === CAMERA_STATUS.PREVIEW ? "block" : "none"}`
                        }}
                        //autoPlay
                        muted
                        loop
                        controls
                    />
                </div>
                <div className="flex flex-row-reverse">
                    <button className="h-6 my-6 justify-center items-center text-gray-600
				                 text-sm focus:text-indigo-600 hover:bg-gray-300 focus:outline-none
                                 w-32 rounded-lg border border-gray-400 "
                        disabled={recordWebcam.status !== CAMERA_STATUS.PREVIEW}
                        onClick={() => {recordWebcam.download(); videos()}}>
                        💾 Save Workout
                    </button>

                    {/* <button className="h-6 my-6 justify-center items-center text-gray-600
				                 text-sm focus:text-indigo-600 hover:bg-gray-300 focus:outline-none
                                 w-32 rounded-lg border border-gray-400 "
                            disabled={recordWebcam.status !== CAMERA_STATUS.PREVIEW}
                            onClick={async () => {
                                await fetch('/api/videos', {
                                    method: 'post',
                                    body: new FormData(e.target)
                                  });
                            }}>
                            💾 Save Workout
                    </button> */}
                    {/* <button onClick={saveFile}>Save file to server</button> */}
                </div>
            </div>
        </div>
    );
};

