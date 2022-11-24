import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar';

const img = "https://c1.wallpaperflare.com/preview/127/366/443/library-book-bookshelf-read.jpg";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='py-3' style={{ backgroundImage: `url(${img})` }}>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;