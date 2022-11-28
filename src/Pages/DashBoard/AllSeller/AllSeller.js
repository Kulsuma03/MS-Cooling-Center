import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaRegTrashAlt } from "react-icons/fa";
import { GoUnverified, GoVerified } from "react-icons/go";
import DeleteModal from '../../../Shared/DeleteModal/DeleteModal';

const AllSeller = () => {
    const [deletingUser, setDeletingUser] = useState(null);
    

    const closeModal = () => {
        setDeletingUser(null);
    }

    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['allseller'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/dashboard/allseller',{
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteUser = user => {
        fetch(`http://localhost:5000/user/${user._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Seller ${user.name} deleted successfully`)
                }
            })
    }

    const handleVerify = data => {
        fetch(`http://localhost:5000/verifyseller/${data?.email}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data);
                    refetch()
                    toast.success('seller successfully verify')
                }
            })
    }


    return (
        <div>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Verify</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sellers.map((seller, i) => <tr key={seller._id}>

                            <th>{i + 1}</th>
                            <th><span title={seller.name} className='w-32'>{seller.name}</span></th>

                            <td>{seller.email}</td>
                            <td>
                                <button onClick={() => handleVerify(seller)}>
                                    
                                            <GoVerified 
                                            title='verify seller' className='text-[#01AA45] text-3xl md:text-4xl'></GoVerified>
                                
                                </button>
                            </td>
                            <td>
                                <label
                                    onClick={() => setDeletingUser(seller)} htmlFor="confirmation-modal">
                                    <FaRegTrashAlt title='delete seller' className='text-red-400 text-3xl md:text-4xl'></FaRegTrashAlt>
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
                        successAction={handleDeleteUser}
                        successButtonName="Delete"
                        modalData={deletingUser}
                        closeModal={closeModal}
                    ></DeleteModal>
                }
            </div>
        </div>
    );
};

export default AllSeller;