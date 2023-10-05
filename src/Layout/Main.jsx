import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import mainLogo from '../../src/assets/logo.png'
import { PiDotsThreeOutlineVerticalBold } from 'react-icons/pi'
import { CgClose } from 'react-icons/cg'
import { AiOutlineHome } from 'react-icons/ai'
import { RiDashboardLine } from 'react-icons/ri'
import { FaRegUser } from 'react-icons/fa'
import { FiSettings } from 'react-icons/fi'
import { GoSignOut, GoSignIn } from 'react-icons/go'
import './Main.css'


const Main = () => {
    // const { user } = useContext(AuthContext)
    const user = false
    const [enabled, setEnabled] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const navItem = (
        <>
            <li>
                <NavLink
                    to="/"
                    // className={`${({ isActive }) => (isActive ? "d-active bg-yellow-400 hover:bg-yellow-600 font-bold font-slate-700" : "d-default text-white")} flex items-center text-xl mt-2 py-2 px-2`}
                    className={({ isActive }) => (isActive ? "d-active" : "d-default")}
                >
                    <span className="mr-3">
                        <AiOutlineHome></AiOutlineHome>
                    </span>
                    <span>Home</span>
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) => (isActive ? "d-active" : "d-default")}
                >
                    <span className="mr-3">
                        <RiDashboardLine></RiDashboardLine>
                    </span>
                    <span>Dashboard</span>
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/profile"
                    className={({ isActive }) => (isActive ? "d-active" : "d-default")}
                >
                    <span className="mr-3">
                        <FaRegUser></FaRegUser>
                    </span>
                    <span>Profile</span>
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/help"
                    className={({ isActive }) => (isActive ? "d-active" : "d-default")}
                >
                    <span className="mr-3">
                        <FiSettings></FiSettings>
                    </span>
                    <span>Help</span>
                </NavLink>
            </li>
            <li className='lg:mt-[100%] d-default'>
                <span>Mode</span>
            </li>
            {user ? <li className='text-xl d-default'>
                <span className="mr-3">
                    <GoSignOut></GoSignOut>
                </span>
                <span>Logout</span>
            </li> :
                <li className='text-xl d-default'>
                    <span className="mr-3">
                        <GoSignIn></GoSignIn>
                    </span>
                    <span>Sign In</span>
                </li>
            }
        </>
    );
    return (
        <div>
            <div className="flex lg:flex-row flex-col bg-slate-900 min-h-screen overflow-hidden max-w-[1420px] mx-auto">
                <div className="lg:border-r-4 p-2 lg:w-[350px]">
                    {/* Site Logo */}
                    <img className='w-[250px] mx-auto mt-4 hidden lg:block' src={mainLogo} alt="" />
                    {/* <div className="text-center flex flex-col items-center glass-bg p-2 relative"> */}
                    <div
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden cursor-pointer text-yellow-400 flex justify-between items-center w-11/12 mx-auto"
                    >
                        <div><img className='w-[250px] mx-auto lg:hidden block' src={mainLogo} alt="" /></div>
                        <div><PiDotsThreeOutlineVerticalBold size={24}></PiDotsThreeOutlineVerticalBold></div>
                    </div>
                    <hr className='border-1 mt-4 w-11/12 mx-auto lg:hidden' />

                    {/* nav items for pc */}
                    <div className="hidden lg:block mt-12">
                        <ul>{navItem}</ul>
                    </div>
                    {/* nav items for mobile */}
                    <div className={`lg:hidden glass-bg w-[95%] transition-all duration-300 p-4 ${isOpen ? "fixed bottom-2 block z-50" : "hidden"}`}>
                        <div className='flex justify-end mb-1'>
                            <button onClick={() => setIsOpen(!isOpen)}><CgClose size={32} color='rgb(250,204,21)'></CgClose></button>
                        </div>
                        <ul className="px-2">{navItem}</ul>
                    </div>
                </div>
                <div className="w-full lg:p-10 text-white">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Main;