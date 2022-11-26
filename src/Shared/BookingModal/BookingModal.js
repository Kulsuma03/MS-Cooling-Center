import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const BookingModal = ({ product, setProduct }) => {
    const { user } = useContext(AuthContext);
    const { name, price, categoryId, categoryName, img } = product;


    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;


        const userName = form.userName.value;
        const location = form.location.value;
        const email = form.email.value;
        const phone = form.phone.value;
        // [3, 4, 5].map((value, i) => console.log(value))
        const booking = {
            productName: name,
            userName,
            email,
            phone,
            price,
            location,
            img
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setProduct(null);
                    toast.success('Booking confirmed');
                    // refetch();
                }
                else {
                    toast.error(data.message);
                }
            })


    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn bg-[#02AA49] btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">
                        {categoryName ? categoryName : categoryId}
                    </h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={name} className="input w-full input-bordered " />
                        <input type="text" disabled value={price ? '$' + price : ''} className="input w-full input-bordered " />

                        {
                            user?.uid
                                ?
                                <>
                                    <input name="userName" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                                    <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                                </>
                                :
                                <p>If You want Booking 
                                    <Link className='text-orange-500' to='/login'> Please Login</Link></p>
                        }

                        <input required name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input required name="location" type="text" placeholder="Location" className="input w-full input-bordered " />
                        <br />
                        <input className='btn btn-accent w-full bg-[#02AA49] hover:text-[#02AA49] hover:bg-white hover:border' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;