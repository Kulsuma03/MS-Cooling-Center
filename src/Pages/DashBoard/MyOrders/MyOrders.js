import { useQuery } from '@tanstack/react-query';
import React from 'react';

const MyOrders = () => {
    const {data: orders = [], refetch} = useQuery({
        queryKey: ['orders'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/myorders');
            const data = await res.json();
            return data;
        }
    });
    console.log(orders);
    
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
                            orders.map((order, i) => <tr key={order._id}>
                                
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-20 rounded-full">
                                        <img src={order.img} alt="" />
                                    </div>
                                </div></td>
                                <td><span className='w-32'>{order.productName.length > 20 ? order.productName.slice(9, 20)+ '...' : order.productName}</span></td>
                                
                                <th>${order.price}</th>
                                <td>
                                    <label htmlFor="confirmation-modal" className="px-3 py-2 text-white hover:text-[#02AA49] hover:bg-white hover:border bg-[#029841]">Pay</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
        </div>
    );
};

export default MyOrders;