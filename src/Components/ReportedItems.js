import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const ReportedItems = () => {

    const { data: reportedItems = [] } = useQuery({
        queryKey: ['reportedItems'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/book`);
            const data = await res.json();
            return data;
        }
    });

    console.log(reportedItems);

    const handleDelete = (id) => {
        const proceed = window.confirm('Want to delete this book ?');
        if (proceed) {
            // console.log(id, uid);
            fetch(`http://localhost:5000/book/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('Book deleted successfully');
                        window.location.reload();
                    }
                })
        }
    };

    return (
        <div>
            <h2 className='font-bold text-3xl m-3'>Reported Items</h2>
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
                            reportedItems.map((reportedItem, i) =>
                                <tr key={i}>
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={reportedItem.img_url} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className=" font-bold">{reportedItem.bookName}</div>
                                    </td>
                                    <td>{reportedItem.resalePrice} $</td>
                                    <th>
                                        <button onClick={() => handleDelete(reportedItem._id)} className="btn btn-ghost btn-xs">Delete</button>
                                    </th>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReportedItems;