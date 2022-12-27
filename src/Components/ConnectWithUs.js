import React from 'react';
import { Link } from 'react-router-dom';

const ConnectWithUs = () => {
    return (
        <div className='lg:flex justify-evenly text-3xl font-extrabold m-3'>
            <h1>Want to Contact With Us.....Go For It...</h1>
            <Link to='/contact' className='btn'><button>Contact</button></Link>
        </div>
    );
};

export default ConnectWithUs;