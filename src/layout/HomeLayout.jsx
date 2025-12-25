import React from 'react'
import { Outlet, NavLink } from 'react-router'
import Logout from '../components/Logout'

const HomeLayout = () => {

  return (
    <div className='w-full h-screen flex'>
      <aside className="w-64 bg-slate-950/80 border-r border-slate-800 flex flex-col">
        
        <div className="px-6 py-5 border-b border-slate-800">
          <h1 className="text-xl font-semibold">Ecom</h1>
        </div>

        <nav className="mt-4 flex-1 px-2 space-y-1 flex flex-col">
          <NavLink to="/home" end className={({ isActive }) =>
    `w-full text-left px-3 py-2 rounded-lg text-sm transition
     ${isActive ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-800/80'}`}>
            Home
          </NavLink>

          <NavLink to="/home/products" className={({ isActive }) =>
    `w-full text-left px-3 py-2 rounded-lg text-sm transition
     ${isActive ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-800/80'}`}>
            Products
          </NavLink>

          <NavLink to="/home/users" className={({ isActive }) =>
    `w-full text-left px-3 py-2 rounded-lg text-sm transition
     ${isActive ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-800/80'}`}>
            Users
          </NavLink>
        </nav>

        <div className="px-4 pb-5">
  <Logout />
</div>


      </aside>

      <div className="w-full h-full bg-black p-4">
        <Outlet />

        
      </div>
    </div>
  )
}

export default HomeLayout
