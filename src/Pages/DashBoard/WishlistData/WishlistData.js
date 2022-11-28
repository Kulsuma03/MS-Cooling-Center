import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const WishlistData = () => {

    const { data: wishlist = [], refetch } = useQuery({
        queryKey: ['wishlist'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-liart.vercel.app/wishlist', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });

    console.log(wishlist);

    // const handlePurchase = (order) => {
    //     const {productName, price, img, productId} = order;

    //     const booking = {
    //         productName,
    //         price,
    //         img,
    //         productId
            
    //     }

    //     fetch('https://assignment-12-server-liart.vercel.app/bookings', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(booking)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.acknowledged) {
    //                 console.log('hello');
    //             }
    //             else{
    //                 toast.error(data.message);
    //             }
    //         })

     
    //     fetch(`https://assignment-12-server-liart.vercel.app/wishlist/${order._id}`, {
    //         method: 'PUT',
    //         headers: {
    //             authorization: `bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.modifiedCount > 0) {
    //                 toast.success('Purchase successful.')
    //                 refetch();
    //             }
    //         })
    // }

    return (
        <div>

            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        wishlist.map((order, i) =>
                            <tr key={order._id}>

                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-20 rounded-full">
                                        <img src={order.img} alt="" />
                                    </div>
                                </div></td>
                                <td><span title={order.productName} className='w-32'>{order?.productName?.length > 20 ? order?.productName?.slice(9, 20) + '...' : order.productName}</span></td>

                                <th>${order.price}</th>
                                
                                <td>

                                {
                                        order.price && !order.paid && <Link
                                            to={`/dashboard/payment/${order._id}`}
                                        >
                                            <button
                                                className='px-3 py-2 text-white hover:text-[#02AA49] hover:bg-white hover:border bg-[#029841]'
                                            >Purchase Now</button>
                                        </Link>
                                    }
                                    {
                                        order.price && order.paid && <span className='text-green-500'>Already Purchase</span>
                                    }
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default WishlistData;

