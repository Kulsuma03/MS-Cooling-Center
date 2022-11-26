import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { FaRegTrashAlt } from "react-icons/fa";

const MyProducts = () => { 
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [deletingUser, setDeletingUser] = useState(null);
    const {user} = useContext(AuthContext)

    ///product/:name

    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:5000/product/${user.displayName}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setProducts(data)
            setLoading(false)
        })
    },[user?.displayName]);

    
    return (
        <div>
             <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Advertise</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, i) => <tr key={product._id}>
                                
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-14 md:w-20 rounded-full">
                                        <img src={product.img} alt="" />
                                    </div>
                                </div></td>
                                <td><span title={product.name} className='w-32'>{product.name}</span></td>

                                <th>${product.price}</th>
                                <td>
                                    {product?.paid? 'Sold' : 'Available'}
                                </td>
                                <td>
                                    <label>
                                    <button className=''>Advertise</button>
                                    </label>
                                    
                                </td>
                                <td>
                                    <label 
                                    onClick={() => setDeletingUser(product)} htmlFor="confirmation-modal">
                                    <FaRegTrashAlt  title='delete seller' className='text-red-400 text-3xl md:text-4xl'></FaRegTrashAlt>
                                    </label>
                                    
                                </td>
                                
                            </tr>)
                        }
                    </tbody>
                </table>
        </div>
    );
};

export default MyProducts;