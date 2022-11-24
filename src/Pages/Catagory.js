
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookCard from '../Components/BookCard';
import Spinner from '../Components/Spinner';
import { AuthContext } from '../Context/AuthProvider';

const Catagory = () => {
    const { loading, setLoading } = useContext(AuthContext);

    const books = useLoaderData();

    if(books.length > 0) {
        setLoading(true)
    }

    return (
        <div>
           {
            loading ?
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 m-2">
             {
                 books.map(book => <BookCard book={book} key={book._id}></BookCard>)
             }
            </div>
            :
            <Spinner></Spinner> 
           }
        </div>
    );
};

export default Catagory;