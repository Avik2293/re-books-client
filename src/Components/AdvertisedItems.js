import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import useBuyer from '../Hooks/useBuyer';
import BookCard from './BookCard';
import BookModal from './BookModal';

const AdvertisedItems = () => {
    const { user } = useContext(AuthContext);

    const [booking, setBooking] = useState('');

    const [isBuyer] = useBuyer(user?.email);

    const { data: allBooks = [] } = useQuery({
        queryKey: ['allBooks'],
        queryFn: async () => {
            const res = await fetch('https://re-books-server.vercel.app/books');
            const data = await res.json();
            return data;
        }
    });

    const advertisedItems = allBooks.filter(eachBook => eachBook?.advertised);

    return (
        <div>
            {
                advertisedItems?.length > 0 &&
                <div className='lg:my-14'>
                    <p className='text-white font-extrabold text-2xl p-1 bg-blue-400 border rounded-xl'>Advertised Items</p>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mx-auto m-5 lg:max-w-screen-xl">
                        {
                            advertisedItems.map(book => <BookCard book={book} key={book._id} isBuyer={isBuyer} setBooking={setBooking}></BookCard>)
                        }
                    </div>
                    <BookModal booking={booking}></BookModal>
                </div>
            }
        </div>
    );
};

export default AdvertisedItems;