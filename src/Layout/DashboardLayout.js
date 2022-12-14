import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import useAdmin from '../useToken/useAdmin';
import useBuyers from '../useToken/useBuyers';
import useSeller from '../useToken/useSeller';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isBuyer] = useBuyers(user?.email)
    const [isSeller] = useSeller(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        {isBuyer &&
                            < li > <Link to="/dashboard">My Orders</Link></li>}
                        {isBuyer &&
                            < li > <Link to="/dashboard">My WishList</Link></li>}


                        {isAdmin &&
                            <li><Link to="/dashboard/allusers">All Users</Link></li>


                        }
                        {isAdmin &&
                            <li><Link to="/dashboard/allusers">All Seller</Link></li>


                        }
                        {isSeller &&
                            <li><Link to="/dashboard/allOrder">All Order</Link></li>


                        }



                    </ul>

                </div>
            </div>
        </div >
    );
};

export default DashboardLayout;