import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrders = () => {
    const {user} = useContext(AuthContext)
    const url = `http://localhost:5000/myorders?email=${user?.email}`;

    const { data: orders = [] } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    console.log(orders);
    
    return (
        <div>

             <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           orders?.map((order, i) => <tr key={order._id}>
                                
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-14 md:w-20 rounded-full">
                                        <img src={order.img} alt="" />
                                    </div>
                                </div></td>
                                <td><span  title={order.productName} className='w-32'>{order?.productName?.length > 20 ? order.productName.slice(9, 20)+ '...' : order.productName}</span></td>
                                
                                <th>${order.price}</th>
                                <td>
                                
                                {
                                        order.price && !order.paid && <Link
                                            to={`/dashboard/payment/${order._id}`}
                                        >
                                            <button
                                                className='px-3 py-2 text-white hover:text-[#02AA49] hover:bg-white hover:border bg-[#029841]'
                                            >Pay</button>
                                        </Link>
                                    }
                                    {
                                        order.price && order.paid && <span className='text-green-500'>Paid</span>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
        </div>
    );
};

export default MyOrders;