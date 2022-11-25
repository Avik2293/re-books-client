import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const BookCard = ({ book }) => {
    const { bookName, catagoryId, catagoryName, img_url, location, originalPrice, resalePrice, sellerEmail, sellerName, sold, verified, yearsOfUse, _id } = book;

    return (
        <>
            {
                !sold &&
                <div className="card w-11/12 lg:w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-52' src={img_url} alt="" /></figure>
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
                        <div className='grid justify-items-center'>
                            <p>Location: {location}</p>
                            <p>Used Time: {yearsOfUse} Years</p>
                            <p>Posted On: { }</p>
                        </div>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline badge-primary">Original Price: ${originalPrice}</div>
                            <div className="badge badge-outline badge-primary">Resale Price: ${resalePrice}</div>
                        </div>
                        <button className="btn btn-outline btn-primary w-28" type="submit">Book Now</button>
                    </div>
                </div>
            }
        </>

    );
};

export default BookCard;