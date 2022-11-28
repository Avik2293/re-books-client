import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../Context/AuthProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const { user } = useContext(AuthContext);

    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();

    const handleAddBook = data => {
        // console.log(data);

        const newBook = {
            aboutBook: data.aboutBook,
            bookCondition: data.bookCondition,
            bookName: data.bookName,
            catagoryId: +`${data.catagoryId}`,
            img_url: data.img_url,
            location: data.location,
            originalPrice: +`${data.originalPrice}`,
            resalePrice: +`${data.resalePrice}`,
            sellerEmail: user.email,
            sellerName: user.displayName,
            sellerPhone: +`${data.sellerPhone}`,
            sold: false,
            verified: false,
            yearsOfUse: +`${data.yearsOfUse}`,
            postTime: new Date().toLocaleString(),
        };
        console.log(newBook);

        fetch('https://re-books-server.vercel.app/book', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newBook)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Succesfully added a new book for sale.');
                    navigate('/dashboard/myproducts');
                }
            })
            .catch(er => console.error(er));
    }

    return (
        <div className='p-5'>
            <h2 className='text-4xl p-2 font-extrabold'>Add Product</h2>
            {/* <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}> */}
            <form onSubmit={handleSubmit(handleAddBook)}>
                <div className='grid grid-cols-2 gap-2'>
                    <div className="form-control w-full">
                        <input type="text" className="input input-bordered w-full" {...register("bookName")} placeholder="Book Name" required />
                    </div>
                    <div className="form-control w-full">
                        <input type="number" className="input input-bordered w-full" {...register("originalPrice")} placeholder="Original Price" required />
                    </div>
                    <select {...register("bookCondition", { required: true })}>
                        <option value="">Books Condition</option>
                        <option value="Excellent">Excellent</option>
                        <option value="Good">Good</option>
                        <option value="Fair">Fair</option>
                    </select>
                    <select {...register("catagoryId", { required: true })}>
                        <option value="">Books Catagory</option>
                        <option value="1">Academic</option>
                        <option value="2">Detective</option>
                        <option value="3">Novel</option>
                        <option value="4">Horror</option>
                        <option value="5">Fiction</option>
                        <option value="6">English</option>
                    </select>
                    <div className="form-control w-full">
                        <input type="number" className="input input-bordered w-full" {...register("sellerPhone")} placeholder="Your Phone No." required />
                    </div>
                    <div className="form-control w-full">
                        <input type="text" className="input input-bordered w-full" {...register("location")} placeholder="Your Location" required />
                    </div>
                    <div className="form-control w-full">
                        <input type="number" className="input input-bordered w-full" {...register("yearsOfUse")} placeholder="Years of Use" required />
                    </div>
                    <div className="form-control w-full">
                        <input type="number" className="input input-bordered w-full" {...register("resalePrice")} placeholder="Resale Price" required />
                    </div>
                    <div className="form-control w-full">
                        <input type="text" className="input input-bordered w-full" {...register("img_url")} placeholder="Books Image URL" required />
                    </div>
                    <textarea {...register("aboutBook")} placeholder="Books Description" required />
                    {/* <div className="form-control w-full">
                        <span className="label-text">Your Name</span>
                        <input type="text" className="input input-bordered w-full" {...register("sellerName")} defaultValue={user.displayName} readOnly />
                    </div> */}
                </div>
                {/* <p>{data}</p> */}
                <button className='btn btn-primary mt-3'><input type="submit" /></button>
            </form>
            {/* <p>{data}</p> */}
        </div>
    );
};

export default AddProduct;