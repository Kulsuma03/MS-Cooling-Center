import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { GoUnverified, GoVerified } from "react-icons/go";

const AllSeller = () => {

    const {data: sellers = [], refetch} = useQuery({
        queryKey: ['allseller'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/dashboard/allseller');
            const data = await res.json();
            return data;
        }
    });
    console.log(sellers);
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
                                <th><span  title={seller.name} className='w-32'>{seller.name}</span></th>
                                
                                <td>{seller.email}</td>
                                <td>
                                    {
                                        !seller.verify ?
                                        <GoUnverified className='text-[#01AA45] text-3xl md:text-4xl '></GoUnverified>
                                        : 
                                        <GoVerified className='text-[#01AA45] text-3xl md:text-4xl'></GoVerified>
                                    }
                                </td>
                                <td>
                                    <FaRegTrashAlt className='text-red-400 text-3xl md:text-4xl'></FaRegTrashAlt>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
        </div>
    );
};

export default AllSeller;