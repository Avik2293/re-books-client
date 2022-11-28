
import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookCard from '../Components/BookCard';
import BookModal from '../Components/BookModal';
import Spinner from '../Components/Spinner';
import { AuthContext } from '../Context/AuthProvider';
import useBuyer from '../Hooks/useBuyer';

const Catagory = () => {
    const { loading, setLoading, user } = useContext(AuthContext);

    const [isBuyer] = useBuyer(user?.email);

    const [booking, setBooking] = useState(null);
    
    setLoading(true);

    const books = useLoaderData();

    if(books.length > 0) {
        setLoading(false)
    }

    // console.log(books);

    return (
        <div>
           {
            loading ?
            <Spinner></Spinner>
            :
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 m-3">
             {
                 books.map(book => <BookCard book={book} key={book._id} isBuyer={isBuyer} setBooking={setBooking}></BookCard>)
             }
            </div>
           }
           {
            booking && <BookModal booking={booking} setBooking={setBooking}></BookModal>
           }
        </div>
    );
};

export default Catagory;