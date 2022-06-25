import React from 'react';

export const HomePage = () => {
  return (
    //<div>HomePage</div>
    <div className="w-full">
      <nav className="bg-white shadow-lg">
        <div className="md:flex items-center justify-between py-2 px-8 md:px-12">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-800 md:text-3xl">
              <a href="#">SmartSports</a>
            </div>
            <div className="md:hidden">
              <button type="button" className="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path className="hidden" d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z" />
                  <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row hidden md:block -mx-2">
            <a href="#" className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2">Home</a>
            <a href="#" className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2">About</a>
            <a href="#" className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2">Settings</a>
          </div>
        </div>
      </nav>

      <div className="flex bg-white" style={{ 'height': '600px' }}>
        <div className="flex items-center  lg:text-left px-8 md:px-12 lg:w-1/2">
          <div>
            <h2 className="text-4xl font-normal text-gray-800 md:text-3xl">Welcome to <span className="font-medium text-indigo-600 md:text-4xl"><br />SmartSports</span></h2>
            <p className="mt-3 text-sm text-gray-500 md:text-base">Best tool for supporting your sports experience and improving your skills.</p>
            <div className="flex justify-center lg:justify-start mt-8">
              <a className="px-9 py-2 bg-gray-900 text-gray-200 text-s font-semibold rounded hover:bg-gray-800" href="/login">Login</a>
              <a className="mx-4 px-9 py-2 bg-gray-300 text-gray-900 text-s font-semibold rounded hover:bg-gray-400" href="/signup">Join</a>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2" style={{ clipPath: 'polygon(10% 0, 100% 0%, 100% 100%, 0 100%)' }}>
          <div className="h-full object-cover" style={{ backgroundImage: "url(" + "https://images.unsplash.com/photo-1527698205475-0779b7bb9ef9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=443&q=80" + ")" }}>
            <div className="h-full bg-black opacity-25"></div>
          </div>
        </div>
      </div>
    </div >
  );
};
