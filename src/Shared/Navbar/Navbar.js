import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import logo from '../../assets/logo.jpg'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }

    const menuItems = <React.Fragment>
        <li><Link className='hover:text-[#00883A]' to="/">Home</Link></li>
        <li><Link className='hover:text-[#00883A]' to="/blogs">Blogs</Link></li>
        <li><Link className='hover:text-[#00883A]' to="/allproduct">All Product</Link></li>
        {user?.uid ?
            <>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><button onClick={handleLogOut}>Sign out</button></li>
            </>
            : <li><Link className=' bg-[#02AA49] px-5 py-3 text-white hover:text-[#02AA49] hover:bg-white hover:border' to="/login">Login</Link></li>}
    </React.Fragment>

    return (
        <div className="navbar bg-base-100 flex justify-between px-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link><img className='w-20 ' src={logo} alt="" /></Link>
                <Link to="/" className=" normal-case text-xl font-bold text-[#02AA49]">Cooling Center</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;
