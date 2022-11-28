import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaRegTrashAlt } from "react-icons/fa";
import DeleteModal from '../../../Shared/DeleteModal/DeleteModal';

const AllBuyer = () => {

    const [deletingUser, setDeletingUser] = useState(null);

    const closeModal = () => {
        setDeletingUser(null);
    }

    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['allbuyer'],
        queryFn: async () => {
            
            const res = await fetch('https://assignment-12-server-liart.vercel.app/dashboard/allbuyer',{
                
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                
            });
            
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteUser = user => {
        fetch(`https://assignment-12-server-liart.vercel.app/user/${user._id}`, {
            method: 'DELETE', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`Buyer ${user.name} deleted successfully`)
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
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        buyers.map((buyer, i) => <tr key={buyer._id}>

                            <th>{i + 1}</th>
                            <th><span title={buyer.name} className='w-32'>{buyer.name}</span></th>

                            <td>{buyer.email}</td>
                            {/* <td>
                                {
                                    !buyer.verify ?
                                        <GoUnverified className='text-[#01AA45] text-3xl md:text-4xl '></GoUnverified>
                                        :
                                        <GoVerified className='text-[#01AA45] text-3xl md:text-4xl'></GoVerified>
                                }
                            </td> */}
                            <td>
                            <label 
                                    onClick={() => setDeletingUser(buyer)} htmlFor="confirmation-modal">
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

export default AllBuyer;