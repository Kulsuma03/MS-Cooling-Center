import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import Navbar from '../Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    // const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-64 font-bold text-base-content">
                        {
                            user && <>
                                <li className='hover:text-[#00873A]'><Link to="/dashboard/allseller">All Seller</Link></li>
                                <li className='hover:text-[#00873A]'><Link to="/dashboard/allbuyer">All Buyer</Link></li>
                                <li className='hover:text-[#00873A]'><Link to="/dashboard/myorders">My Orders</Link></li>
                                <li className='hover:text-[#00873A]'><Link to="/dashboard/mywishlist">My WishList</Link></li>
                                <li className='hover:text-[#00873A]'><Link to="/dashboard/myproducts">My Products</Link></li>
                                <li className='hover:text-[#00873A]'><Link to="/dashboard/mybuyers">My Buyers</Link></li>
                                <li className='hover:text-[#00873A]'><Link to="/dashboard/addproduct">Add Product</Link></li>
                                
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;