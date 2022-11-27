import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { FaRegTrashAlt } from "react-icons/fa";
import toast from 'react-hot-toast';
import Loading from '../../../Shared/Loading/Loading';
import DeleteModal from '../../../Shared/DeleteModal/DeleteModal';
import { useQuery } from '@tanstack/react-query';
import Advertised from '../../Home/Advertised/Advertised';

const MyProducts = () => { 
    const [deletingUser, setDeletingUser] = useState(null);
    const {user} = useContext(AuthContext);

    const closeModal = () => {
        setDeletingUser(null);
    }



    const url = `http://localhost:5000/product/${user.email}`;

    const { data: orders = [], refetch, Loading } = useQuery({
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


    // post advertise data 
    
    const handleAdvertise = product => {
       
        fetch(`http://localhost:5000/advertise/${product._id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    console.log('woe');
                    refetch()
                    toast.success('Advertise successfully');
                    
                }
            })
    }

    // handle delete

    
    const handleDeleteUser = product => {

        fetch(`http://localhost:5000/product/${product._id}`, {
            method: 'DELETE', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success('product deleted successfully')
            }
        })
    }

    if(Loading){
        return <Loading></Loading>
    }
    
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
                            orders.map((product, i) => <tr key={product._id}>
                                
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-14 md:w-20 rounded-full">
                                        <img src={product.img} alt="" />
                                    </div>
                                </div></td>
                                <td><span title={product.name} className='w-32'>{product.name}</span></td>

                                <th>${product.price}</th>
                                <td>
                                    {product.paid? 'sold' : 'Available'}
                                </td>
                                <td>
                                    <label>
                                    <button
                                    disabled={product.advertise}
                                     onClick={() => handleAdvertise(product)} className=''>
                                        Advertise
                                        </button>
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

                <div>
                    {
                        deletingUser && 
                        <DeleteModal
                        title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingUser.name}. It cannot be undone.`}
                    successAction = {handleDeleteUser}
                    successButtonName="Delete"
                    modalData = {deletingUser}
                    closeModal = {closeModal}
                        ></DeleteModal>
                    }
                </div>
        </div>
    );
};

export default MyProducts;