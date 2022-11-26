import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });

    // fetch(`http://localhost:5000/bookings?email=${user?.email}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //     })

    return (
        <div>
            <h2 className='font-bold text-3xl m-3'>My Orders</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Book Image</th>
                            <th>Book Name</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, i) =>
                                <tr key={i}>
                                    <th>{i+1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={booking.selectedBookImgUrl} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className=" font-bold">{booking.selectedBookName}</div>
                                    </td>
                                    <td>{booking.selectedBookPrice} $</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">Pay</button>
                                    </th>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;