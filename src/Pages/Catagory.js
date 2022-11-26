
import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookCard from '../Components/BookCard';
import BookModal from '../Components/BookModal';
import Spinner from '../Components/Spinner';
import { AuthContext } from '../Context/AuthProvider';
// import { useQuery } from '@tanstack/react-query';

const Catagory = () => {
    const { loading, setLoading } = useContext(AuthContext);

    const [booking, setBooking] = useState({});
    
    setLoading(true);

    // const {} = useQuery({ queryKey: ['todos'], queryFn: getTodos });

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
                 books.map(book => <BookCard book={book} key={book._id} setBooking={setBooking}></BookCard>)
             }
            </div>
           }
           <BookModal booking={booking}></BookModal>
        </div>
    );
};

export default Catagory;