import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {

    const { data: buyers = [] } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/buyers');
            const data = await res.json();
            return data;
        }
    });
    console.log(buyers);

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

    return (
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
            <h2 className="mb-4 text-2xl font-semibold leading-tight">All Buyers</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-xs">
                    <colgroup>
                        <col className="w-24">
                        </col>
                    </colgroup>
                    <thead className="dark:bg-gray-700">
                        <tr>
                            <th className="">#</th>
                            <th className="p-3">Buyer Image</th>
                            <th className="p-3">Buyer Name</th>
                            <th className="p-3">Buyer Email</th>
                            <th className="p-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.map((buyer, i) =>
                                <tr key={i} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                    <td className="">
                                        <p>{i + 1}</p>
                                    </td>
                                    <td className="p-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={buyer.userImgUrl} alt="" />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-3 flex">
                                        <div className=" mr-2 font-bold">{buyer.userName}</div>
                                    </td>
                                    <td className="p-3">
                                        <div className="">{buyer.userEmail}</div>
                                    </td>
                                    <td className="p-3 text-right grid grid-cols-1">
                                        <button onClick={() => handleDelete(buyer?._id, buyer?.userUID)} className="btn btn-ghost btn-xs">Delete</button>
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

export default AllBuyers;