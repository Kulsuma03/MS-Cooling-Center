import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { FaRegTrashAlt } from "react-icons/fa";

const AllBuyer = () => {
    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['allbuyer'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/dashboard/allbuyer');
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
                                <FaRegTrashAlt onClick={() => handleDeleteUser(buyer)} title='delete buyer' className='text-red-400 text-3xl md:text-4xl'></FaRegTrashAlt>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllBuyer;