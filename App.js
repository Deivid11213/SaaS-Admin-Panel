import React from 'react';

import './tailwind-config.js';

export default function App() {
  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      <div className="flex flex-col flex-shrink-0 w-64 bg-gray-900 border-r">
        <div className="flex items-center justify-center h-14 bg-gray-900 text-white font-bold text-xl ">
    <svg xmlns="http://www.w3.org/2000/svg" 
    class="icon icon-tabler icon-tabler-apps-filled "
      width="24" 
      height="24"
      viewBox="0 0 24 24" 
      stroke-width="2" 
      stroke="currentColor" 
      fill="none" 
      stroke-linecap="round" 
      stroke-linejoin="round" 
className="h-6 w-6 text-white mr-2 ">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M9 3h-4a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2z" stroke-width="0" fill="currentColor"></path>
  <path d="M9 13h-4a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2z" stroke-width="0" fill="currentColor"></path>
  <path d="M19 13h-4a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2z" stroke-width="0" fill="currentColor"></path>
  <path d="M17 3a1 1 0 0 1 .993 .883l.007 .117v2h2a1 1 0 0 1 .117 1.993l-.117 .007h-2v2a1 1 0 0 1 -1.993 .117l-.007 -.117v-2h-2a1 1 0 0 1 -.117 -1.993l.117 -.007h2v-2a1 1 0 0 1 1 -1z" stroke-width="0" fill="currentColor"></path>
</svg>
<div className="flex items-center ">
            <div className="mr-12">Dashboard</div>
          </div>
        </div>
        <nav className="flex-grow px-4 py-8">
          <a
            href="#"
            className="flex items-center py-2 px-4 mt-2 text-white hover:bg-red-800 rounded"
          >
            <svg
              className="h-6 w-6 text-white mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
            Dashboard
          </a>
          <a
            href="#"
            className="flex items-center py-2 px-4 mt-2 text-white hover:bg-red-800 rounded"
          >
            <svg
              className="h-6 w-6 text-white mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Reports
          </a>
          <a
            href="#"
            className="flex items-center py-2 px-4 mt-2 text-white hover:bg-red-800 rounded"
          >

    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    class="icon icon-tabler icon-tabler-chart-histogram" 
    className="h-6 w-6 text-white mr-2"
    width="24" 
    height="24"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round">

      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M3 3v18h18"></path>
          <path d="M20 18v3"></path>
          <path d="M16 16v5"></path>
          <path d="M12 13v8"></path>
          <path d="M8 16v5"></path>
          <path d="M3 11c6 0 5 -5 9 -5s3 5 9 5"></path>
</svg>
          Analytics
          </a>
          <br />
          <br />
          <br />
          <br />
          <br />
          
        <a
              href="https://www.tiktok.com/@uchihadeivid?lang=es"
              className="flex items-center py-2 px-4 text-white hover:bg-red-800 rounded"
            >
              <svg xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-tiktok" 
              className="h-6 w-6 text-white mr-2"
              width="24" 
              height="24" 
              viewBox="0 0 24 24"
              stroke-width="2" 
              stroke="currentColor"
              fill="none"
              stroke-linecap="round" 
              stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z"></path>
</svg>
              Tiktok
            </a>
            <a
              href="https://github.com/Deivid11213"
              className="flex items-center py-2 px-4 text-white hover:bg-red-800 rounded"
            >
              <svg
                className="h-6 w-6 text-white mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
</svg>}
              </svg>
              Github
            </a>
            <a
              href="https://www.instagram.com/deivid1912_/"
              className="flex items-center py-2 px-4 text-white hover:bg-red-800 rounded"
            >
              <svg
                className="h-6 w-6 text-white mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
  <path d="M16.5 7.5l0 .01"></path>
</svg>}
              </svg>
              Instagram
            </a>
            <br />
<div className="flex items-center h-14 bg-gray-900 text-white font-semibold">
  <a href="TU_ENLACE_AQUI" className="flex items-center">
    <a href="#">
      <img
        src="https://ugc.production.linktr.ee/tFbQVXSjT4GPhOFVdbuw_0001-43194133748.png?io=true&size=avatar"
        alt="Logo"
        width="40"
        height="40"
        className="rounded-full mr-2 ml-2" 
      />
    </a>
    <div className="flex flex-col">
      <a href="#">
        <span className="text-sm mt-1">Uchiha</span>
      </a>
      <a href="#">
        <span className="text-xs">Admin</span>
      </a>
    </div>
  </a>
</div>

</nav>
      </div>
      <br />

      

      {/* Main Content */}
      <div className="flex flex-col flex-grow text-center">
        <div className="flex items-center justify-between h-14 bg-white border-b px-4">
          <div className="flex items-center">
            <svg
              className="h-6 w-6 text-gray-400 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
            <h1 className="text-xl font-bold">Dashboard</h1>
          </div>
          <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 focus:outline-none">
              Login
            </button>
          </div>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Key Metric Cards */}
            <div className="p-4 bg-white rounded shadow">
              <div className="flex items-center">
                <div className="flex-shrink-0 p-2 rounded bg-blue-500">
                  <svg
                    className="h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h2 className="text-lg font-semibold">Ganancias</h2>
                  <p className="text-gray-500">$120,000</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <div className="flex items-center">
                <div className="flex-shrink-0 p-2 rounded bg-green-500">
                  <svg
                    className="h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h2 className="text-lg font-semibold">Pedidos</h2>
                  <p className="text-gray-500">350</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <div className="flex items-center">
                <div className="flex-shrink-0 p-2 rounded bg-red-500">
                  <svg
                    className="h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h2 className="text-lg font-semibold">Gastos</h2>
                  <p className="text-gray-500">$50,000</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <div className="flex items-center">
                <div className="flex-shrink-0 p-2 rounded bg-yellow-500">
                  <svg
                    className="h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 13v6h-6m-2-6V3h8v10"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h2 className="text-lg font-semibold">Visitantes</h2>
                  <p className="text-gray-500">120,000</p>
                </div>
              </div>
            </div>
          </div>

          {/* Report Table */}
          <div className="mt-6 bg-white rounded shadow overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b">Name</th>
                  <th className="px-4 py-2 border-b">Email</th>
                  <th className="px-4 py-2 border-b">Role</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b">John Doe</td>
                  <td className="px-4 py-2 border-b">john@example.com</td>
                  <td className="px-4 py-2 border-b">Admin</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Jane Smith</td>
                  <td className="px-4 py-2 border-b">jane@example.com</td>
                  <td className="px-4 py-2 border-b">User</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Mike Johnson</td>
                  <td className="px-4 py-2 border-b">mike@example.com</td>
                  <td className="px-4 py-2 border-b">User</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Sarah Wilson</td>
                  <td className="px-4 py-2 border-b">sarah@example.com</td>
                  <td className="px-4 py-2 border-b">User</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}