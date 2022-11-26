import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const MyProducts = () => {
    const { user } = useContext(AuthContext);

    const { data: products = [] } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/books?email=${user?.email}`);
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
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
            <h2 className="mb-4 text-2xl font-semibold leading-tight">My Products</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-xs">
                    <colgroup>
                        <col className="w-24">
                        </col>
                    </colgroup>
                    <thead className="dark:bg-gray-700">
                        <tr>
                            <th className="p-1">#</th>
                            <th className="p-3">Book Image</th>
                            <th className="p-3">Book Name</th>
                            <th className="p-3">Price</th>
                            <th className="p-3 text-right">Status</th>
                            <th className="p-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, i) =>
                                <tr key={i} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                    <td className="p-1">
                                        <p>{i + 1}</p>
                                    </td>
                                    <td className="p-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={product.img_url} alt="" />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-3">
                                        <div className="font-bold">{product.bookName}</div>
                                    </td>
                                    <td className="p-3">
                                        <div className="">{product.resalePrice} $</div>
                                    </td>
                                    <td className="p-3 text-right">
                                        {
                                            product?.sold ?
                                                <div className="badge badge-primary badge-outline">Sold</div>
                                                : <div className="badge badge-primary badge-outline">Available</div>
                                        }
                                    </td>
                                    <td className="p-3 text-right grid grid-cols-1">
                                        <button className="btn btn-ghost btn-xs">Advertise</button>
                                        <button className="btn btn-ghost btn-xs">Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;