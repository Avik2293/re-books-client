import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import toast from 'react-hot-toast';
import axios from 'axios';

const BookModal = ({ booking, setBooking }) => {
    const { bookName, img_url, resalePrice, sellerEmail, sellerName, _id } = booking;

    const { user } = useContext(AuthContext);
    // console.log(user);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const bookingPhone = form.bookingPhone.value;
        const meetingLocation = form.meetingLocation.value;

        // const bookingInfo = {
        //     bookingPhone, meetingLocation,
        //     selectedBookName: bookName,
        //     selectedBookPrice: resalePrice,
        //     selectedBookImgUrl: img_url,
        //     selectedBookId: _id,
        //     bookedBy: user.displayName,
        //     bookingEmail: user.email,
        //     sellerName, sellerEmail,
        // };
        // console.log(bookingInfo);

        // fetch('http://localhost:5000/bookings', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json',
        //     },
        //     body: JSON.stringify(bookingInfo)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         if (data.acknowledged) {
        //             toast.success("Booking Successfully.");
        //         }
        //     })
        //     .catch(er => console.error(er));

        axios.post('http://localhost:5000/bookings', {
            bookingPhone, meetingLocation,
            selectedBookName: bookName,
            selectedBookPrice: resalePrice,
            selectedBookImgUrl: img_url,
            selectedBookId: _id,
            bookedBy: user.displayName,
            bookingEmail: user.email,
            sellerName, sellerEmail,
        })
            .then(function (response) {
                console.log(response);
                if (response.data.acknowledged) {
                    toast.success("Booking Successfully.");
                    setBooking(null);
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    };

    return (
        <>
            <input type="checkbox" id="book-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="book-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold m-2">Booking Info for {bookName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-2 gap-1'>
                        <input type="text" disabled value={user?.displayName} className="input input-bordered w-full" />
                        <input type="text" disabled value={user?.email} className="input input-bordered w-full" />
                        <input type="text" disabled value={bookName} className="input input-bordered w-full" />
                        <input type="text" disabled value={`${resalePrice} $`} className="input input-bordered w-full" />
                        <input name="bookingPhone" type="text" placeholder="Type Your Phone Number" className="input input-bordered w-full" required />
                        <input name="meetingLocation" type="text" placeholder="Type Your Location" className="input input-bordered w-full" required />

                        <input className='w-full btn' type="submit" value="Submit"></input>
                        <label htmlFor="book-modal" className="btn">Close</label>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookModal;