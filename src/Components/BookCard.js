import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import toast from 'react-hot-toast';

const BookCard = ({ book, setBooking, isBuyer }) => {
    const { bookName, img_url, location, originalPrice, resalePrice, sellerEmail, sellerName, sold, yearsOfUse, postTime, _id } = book;

    const [verified, setVerified] = useState(false);

    fetch(`https://re-books-server.vercel.app/users/?email=${sellerEmail}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            data?.verified && setVerified(true);
        })


    const handleReportToAdmin = (id) => {
        const proceed = window.confirm('Want to report this book ?');
        if (proceed) {
            // console.log(id, uid);
            fetch(`https://re-books-server.vercel.app/book/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ reported: true })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.acknowledged) {
                        toast.success('Book reported successfully');
                        window.location.reload();
                    }
                })
        }

    };

    return (
        <>
            {
                !sold &&
                <div className="card w-11/12 lg:w-96 bg-gray-50 shadow-xl">
                    <figure><img className='h-52 lg:h-64 lg:w-80' src={img_url} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {bookName}
                        </h2>
                        <h2 className="card-title">
                            <span className='font-bold'>Seller:</span>
                            {sellerName}
                            {
                                verified && <FaCheckCircle className="text-blue-600"></FaCheckCircle>
                            }
                        </h2>
                        <div className='flex'>
                            <p className='border border-dashed border-stone-500 rounded-lg mr-1 p-1'><span className='font-bold'>Location:</span> {location}</p>
                            <p className='border border-dashed border-stone-500 rounded-lg mr-1 mt-1'><span className='font-bold'>Used Time:</span> {yearsOfUse} Years</p>
                            <p className='border border-dashed border-stone-500 rounded-lg mt-1'><span className='font-bold'>Posted On:</span> {postTime}</p>
                        </div>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline badge-primary">Original Price: ${originalPrice}</div>
                            <div className="badge badge-outline badge-primary">Resale Price: ${resalePrice}</div>
                        </div>
                        {
                            isBuyer ?
                                <div className='flex'>
                                    <label htmlFor="book-modal" className="btn btn-outline btn-primary grid place-self-center p-1"
                                        onClick={() => setBooking(book)}>Book Now</label>
                                    <label className="btn btn-outline btn-primary grid place-self-center m-1 p-1">Add to WishList</label>
                                    {
                                        book?.reported ?
                                            <label className="btn btn-outline btn-primary grid place-self-center p-1">Reported</label>
                                            :
                                            <label onClick={() => handleReportToAdmin(_id)} className="btn btn-outline btn-primary grid place-self-center p-1">Report</label>
                                    }
                                </div> :
                                <label className="btn btn-outline btn-primary grid place-self-center p-1">You are not Buyer</label>

                        }
                    </div>
                </div>
            }
        </>

    );
};

export default BookCard;