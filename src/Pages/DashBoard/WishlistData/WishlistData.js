import { useQuery } from '@tanstack/react-query';
import React from 'react';

const WishlistData = () => {
    const {data: wishlist = [], refetch} = useQuery({
        queryKey: ['wishlist'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/wishlist');
            const data = await res.json();
            return data;
        }
    });

    const handlePurchase = () => {
        console.log(' poi');
    }

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
                            wishlist.map((order, i) => <tr key={order._id}>
                                
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-20 rounded-full">
                                        <img src={order.img} alt="" />
                                    </div>
                                </div></td>
                                <td><span className='w-32'>{order.productName.length > 20 ? order.productName.slice(9, 20)+ '...' : order.productName}</span></td>
                                
                                <th>${order.price}</th>
                                <td>
                                    <button onClick={() => handlePurchase(order)}  className="px-3 py-[10px] text-white hover:text-[#02AA49] hover:bg-white hover:border bg-[#029841]">Purchase Now</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
        </div>
    );
};

export default WishlistData;