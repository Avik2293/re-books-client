import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { FaCheckCircle } from 'react-icons/fa';

const AllSellers = () => {

    const { data: sellers = [] } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/sellers');
            const data = await res.json();
            return data;
        }
    });

    const handleDelete = (id, uid) => {
        const proceed = window.confirm('Want to delete this user ?');
        if (proceed) {
            // console.log(id, uid);
            fetch(`http://localhost:5000/user/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('User deleted successfully');
                        window.location.reload();
                    }
                })
        }
    };

    const handleVerify = id => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ verified: true })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('This Seller has been Verified');
                    window.location.reload();
                }
            })
    };

    return (
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
            <h2 className="mb-4 text-2xl font-semibold leading-tight">All Sellers</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-xs">
                    <colgroup>
                        <col className="w-24">
                        </col>
                    </colgroup>
                    <thead className="dark:bg-gray-700">
                        <tr>
                            <th className="">#</th>
                            <th className="p-3">Seller Image</th>
                            <th className="p-3">Seller Name</th>
                            <th className="p-3">Seller Email</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((seller, i) =>
                                <tr key={i} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                    <td className="">
                                        <p>{i + 1}</p>
                                    </td>
                                    <td className="p-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={seller.userImgUrl} alt="" />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-3 flex">
                                        <div className=" mr-2 font-bold">{seller.userName}</div>
                                        {
                                            seller?.verified &&
                                            <FaCheckCircle className="text-blue-600"></FaCheckCircle>
                                        }
                                    </td>
                                    <td className="p-3">
                                        <div className="">{seller.userEmail}</div>
                                    </td>
                                    <td className="p-3">
                                        {
                                            seller?.verified ?
                                                <div className="badge badge-primary badge-outline">Verified</div>
                                                : <button onClick={() => handleVerify(seller?._id)} className="btn btn-ghost btn-xs">Verify</button>
                                        }
                                    </td>
                                    <td className="p-3 text-right grid grid-cols-1">
                                        <button onClick={() => handleDelete(seller?._id, seller?.userUID)} className="btn btn-ghost btn-xs">Delete</button>
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

export default AllSellers;