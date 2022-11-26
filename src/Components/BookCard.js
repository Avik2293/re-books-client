import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
// import { useQuery } from '@tanstack/react-query';

const BookCard = ({ book, setBooking }) => {
    const { bookName, img_url, location, originalPrice, resalePrice, sellerEmail, sellerName, sold, yearsOfUse } = book;

    const [verified, setVerified] = useState(false);

    // const {data: iverified = []} = useQuery({ 
    //     queryKey: ['iverified'], 
    //     queryFn: async () => {
    //         const res = await fetch(`http://localhost:5000/users/?email=${sellerEmail}`);
    //         const data = await res.json();
    //         return data;
    //     }
    // });


    fetch(`http://localhost:5000/users/?email=${sellerEmail}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            data?.verified && setVerified(true);
        })

    return (
        <>
            {
                !sold &&
                <div className="card lg:card-side w-11/12 lg:w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-52 lg:h-64 lg:w-80' src={img_url} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {bookName}
                        </h2>
                        <h2 className="card-title">
                            Seller: {sellerName}
                            {
                                verified && <FaCheckCircle className="text-blue-600"></FaCheckCircle>
                            }
                        </h2>
                        <div className='flex'>
                            <p>Location: {location}</p>
                            <p>Used Time: {yearsOfUse} Years</p>
                            <p>Posted On: { }</p>
                        </div>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline badge-primary">Original Price: ${originalPrice}</div>
                            <div className="badge badge-outline badge-primary">Resale Price: ${resalePrice}</div>
                        </div>
                        <label htmlFor="book-modal" className="btn btn-outline btn-primary w-28 grid place-self-center" 
                        onClick={() => setBooking(book)}>Book Now</label>
                    </div>
                </div>
            }
        </>

    );
};

export default BookCard;