import React from 'react';
import { Link } from 'react-router-dom';
import './Headers.css'

const Headers = () => {
    return (
        <div className='background '>
            <div className="navbar w-10/12 mx-auto py-7">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content  mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/statistic'>Statistics</Link></li>
                        <li><Link to='/applied'>Applied Job</Link></li>
                        <li><Link to='/blog'>BLog</Link></li>
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-3xl p-0 bg_color sm:hidden">Eight Developers</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/statistic'>Statistics</Link></li>
                        <li><Link to='/applied'>Applied Job</Link></li>
                        <li><Link to='/blog'>BLog</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="get-started-btn mt-0 text-[17px] text-white rounded btn-sm lg:btn-md font-bold">Start Applying</button>
                </div>
            </div>
        </div>
    );
};

export default Headers;