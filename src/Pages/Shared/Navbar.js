import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logoNew from '../../Assets/logo.jpg';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthProvider';

const Navbar = () => {
    const menuItems = <React.Fragment>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        <li><Link to='/'></Link></li>
    </React.Fragment>

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    };

    return (
        <div>
            <div className="navbar bg-blue-400">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                user?.uid &&
                                <>
                                    {menuItems}
                                </>
                            }
                            <li><Link to='/blog'>Blog</Link></li>
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl font-extrabold" to={'/'}><img className='h-5' src={logoNew} alt="" /> Re-Books</Link>
                </div>
                <div className="navbar-end">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0 font-bold">
                            {
                                user?.uid &&
                                <>
                                    {menuItems}
                                </>
                            }
                            <li><Link to='/blog'>Blog</Link></li>
                        </ul>
                    </div>
                    <div>
                        {user?.photoURL ?
                            <div className="avatar tooltip tooltip-bottom" data-tip={user?.displayName}>
                                <div className="w-12 mask mask-hexagon">
                                    <button><img src={user?.photoURL} alt="" />
                                    </button>
                                </div>
                            </div> :
                            <FaUser></FaUser>
                        }
                    </div>
                    <div className='w-12 md:w-24'>
                        {
                            user?.uid ? <Link onClick={handleLogOut} className="btn p-1">Log Out</Link> :
                                <Link className="btn p-1" to='/login'>Log In</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;