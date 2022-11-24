import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {

    const catagories = useLoaderData();
    console.log(catagories);

    const banner = 'https://img.freepik.com/premium-photo/open-book-with-glasses-wooden-table-against-background-set-books-vintage-toning-web-banner-literature-learning-concept_101969-2143.jpg?w=2000';

    return (
        <div>
            <div className="hero p-1" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl font-bold">Hello Book Lovers...</h1>
                        <p className="mb-5">Grab the opportunity to find or re-sale old books using this platform. Sale your old books and help others to gain knowledge. Find books by catagory for buying.</p>
                    </div>
                </div>
            </div>
            <h2 className='text-white'>Advertised Items</h2>
            <div className=' bg-sky-600 p-2 text-white m-1 border-dotted border-2 border-white rounded-xl'>
                <h3 className='text-xl font-bold p-2'>Books Catagory</h3>
                <div className="grid grid-cols-3 lg:grid-cols-6 gap-2">
                    {
                        catagories.map(catagory => <Link className='btn' to="/catagory/${catagory._id}" key={catagory._id}><button type="submit"></button>{catagory.catagory}</Link>)
                    }
                </div>
            </div>
            <h2 className='text-white'>Extra Unique Section</h2>
        </div>
    );
};

export default Home;