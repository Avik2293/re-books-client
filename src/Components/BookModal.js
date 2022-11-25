import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import toast from 'react-hot-toast';

const BookModal = ({ booking }) => {
    const { bookName, img_url, resalePrice, sellerEmail, sellerName, _id } = booking;

    const { user } = useContext(AuthContext);
    // console.log(user);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const bookingPhone = form.bookingPhone.value;
        const meetingLocation = form.meetingLocation.value;

        const bookingInfo = {
            bookingPhone, meetingLocation, 
            selectedBookName: bookName,
            selectedBookPrice: resalePrice,
            selectedBookImgUrl: img_url,
            selectedBookId: _id,
            bookedBy: user.displayName,
            bookingEmail: user.email,
            sellerName, sellerEmail,
        };

        console.log(bookingInfo);

        toast.success("Booking Successfully.");
    };

    return (
        <>
            <input type="checkbox" id="book-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="book-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold m-2">Booking Info for {bookName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-1'>
                        <input type="text" disabled value={user?.displayName} className="input input-bordered w-full" />
                        <input type="text" disabled value={user?.email} className="input input-bordered w-full" />
                        <input type="text" disabled value={bookName} className="input input-bordered w-full" />
                        <input type="text" disabled value={`${resalePrice} $`} className="input input-bordered w-full" />
                        <input name="bookingPhone" type="text" placeholder="Type Your Phone Number" className="input input-bordered w-full" />
                        <input name="meetingLocation" type="text" placeholder="Type Your Location" className="input input-bordered w-full" />
                        <br></br>
                        <input className='w-full btn' type="submit" value="Submit"></input>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookModal;