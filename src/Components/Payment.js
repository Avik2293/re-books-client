import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
// console.log(stripePromise);

const Payment = () => {

    const data = useLoaderData();
    console.log(data);

    return (
        <div>
            <h3 className='text-3xl'>Paymant for Book: <strong>{data.selectedBookName}</strong></h3>
            <h3 className='text-xl'>Price: <strong>{data.selectedBookPrice} $</strong></h3>
            <h3 className='text-lg'>Enter You Card Information..</h3>
            <div className='bg-white mx-auto p-2 w-4/6 rounded-xl mt-4'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm data={data} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;