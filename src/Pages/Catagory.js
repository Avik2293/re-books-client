
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookCard from '../Components/BookCard';
import Spinner from '../Components/Spinner';
import { AuthContext } from '../Context/AuthProvider';

const Catagory = () => {
    const { loading, setLoading } = useContext(AuthContext);
    
    setLoading(true);

    const books = useLoaderData();

    if(books.length > 0) {
        setLoading(false)
    }

    console.log(books);

    return (
        <div>
           {
            loading ?
            <Spinner></Spinner>
            :
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 m-3">
             {
                 books.map(book => <BookCard book={book} key={book._id}></BookCard>)
             }
            </div>
            
             
           }
        </div>
    );
};

export default Catagory;