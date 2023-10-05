import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import mainLogo from '../../src/assets/logo.png'
import { PiDotsThreeOutlineVerticalBold } from 'react-icons/pi'
import { CgClose } from 'react-icons/cg'

const Main = () => {
    // const { user } = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false);
    const navItem = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "d-active" : "d-default")}
                >
                    <span className="mr-6">
                        {/* <AiFillHome size={24}></AiFillHome> */}
                    </span>
                    <span>Home</span>
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/userDashboard/profile"
                    className={({ isActive }) => (isActive ? "d-active" : "d-default")}
                >
                    <span className="mr-6">
                        {/* <FaUserAlt size={24}></FaUserAlt> */}
                    </span>
                    <span>Profile</span>
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/userDashboard/ticketHistory"
                    className={({ isActive }) => (isActive ? "d-active" : "d-default")}
                >
                    <span className="mr-6">
                        {/* <FaHistory size={24}></FaHistory> */}
                    </span>
                    <span>Ticket History</span>
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/userDashboard/favorite"
                    className={({ isActive }) => (isActive ? "d-active" : "d-default")}
                >
                    <span className="mr-6">
                        {/* <MdOutlineFavorite size={24}></MdOutlineFavorite> */}
                    </span>
                    <span>Favorite Movies</span>
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "d-active" : "d-default")}
                >
                    <span className="mr-6">
                        {/* <FaSignOutAlt size={24}></FaSignOutAlt> */}
                    </span>
                    <span>Sign Out</span>
                </NavLink>
            </li>
        </>
    );
    return (
        <div>
            <div className="flex lg:flex-row flex-col text-white bg-slate-900 min-h-screen overflow-hidden max-w-[1420px] mx-auto">
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
                    {/* </div> */}
                    {/* Nav Items */}
                    <div className="hidden lg:block">
                        <ul>{navItem}</ul>
                    </div>
                    {/* Mobile Nav Item */}
                    <div className={`lg:hidden glass-bg w-[95%] transition-all duration-300 p-4 ${isOpen ? "fixed bottom-2 block z-50" : "hidden"}`}>
                        <div className='flex justify-end'>
                            <button onClick={() => setIsOpen(!isOpen)}><CgClose size={32}></CgClose></button>
                        </div>
                        <ul className=" px-2">{navItem}</ul>
                    </div>
                </div>
                <div className="w-full lg:p-10">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Main;