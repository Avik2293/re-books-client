import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BookCard from './BookCard';
import BookModal from './BookModal';

const AdvertisedItems = () => {

    const [booking, setBooking] = useState({});

    const { data: allBooks = [] } = useQuery({
        queryKey: ['allBooks'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/books');
            const data = await res.json();
            return data;
        }
    });

    const advertisedItems = allBooks.filter(eachBook => eachBook?.advertised);

    return (
        <div className='p-2 border rounded-xl m-1'>
            <p className='text-white font-extrabold text-2xl p-1 bg-sky-600 border rounded-xl'>Advertised Items</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 m-2">
                {
                    advertisedItems.map(book => <BookCard book={book} key={book._id} setBooking={setBooking}></BookCard>)
                }
            </div>
            <BookModal booking={booking}></BookModal>
        </div>
    );
};

export default AdvertisedItems;