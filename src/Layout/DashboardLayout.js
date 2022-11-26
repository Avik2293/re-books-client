import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import useBuyer from '../Hooks/useBuyer';
import useSeller from '../Hooks/useSeller';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    // console.log(user);

    const [isAdmin] = useAdmin(user.email);
    const [isSeller] = useSeller(user.email);
    const [isBuyer] = useBuyer(user.email);

    // const [isAdmin, setIsAdmin] = useState(false);
    // const [isSeller, setIsSeller] = useState(false);
    // const [isBuyer, setIsBuyer] = useState(false);

    // fetch(`http://localhost:5000/users/?email=${user?.email}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         if (data.role == "Admin") {
    //             return setIsAdmin(true);
    //         }
    //         if (data.role == "Seller") {
    //             return setIsSeller(true);
    //         }
    //         else{
    //             return setIsBuyer(true);
    //         }
    //     })

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-gray-400">

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden m-2">Open Dashbord drawer</label>

                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content font-bold bg-gray-300">
                        {
                            isBuyer &&
                            <>
                                <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                                <li><Link to='/dashboard/mywishlist'>My Wishlist</Link></li>
                            </>
                        }
                        {
                            isSeller &&
                            <>
                                <li><Link to='/dashboard/addproduct'>Add A Product</Link></li>
                                <li><Link to='/dashboard/myproducts'>My Products</Link></li>
                                <li><Link to='/dashboard/mybuyers'>My Buyers</Link></li>
                            </>
                        }
                        {
                            isAdmin &&
                            <>
                                <li><Link to='/dashboard/allsellers'>All Sellers</Link></li>
                                <li><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
                                <li><Link to='/dashboard/reporteditems'>Reported Items</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;