import { useQuery } from '@tanstack/react-query';
import React from 'react';

const MyOrders = () => {
    const {data: orders = [], refetch} = useQuery({
        queryKey: ['orders'],
        queryFn: async() =>{
            const res = await fetch('https://doctors-portal-server-rust.vercel.app/users');
            const data = await res.json();
            return data;
        }
    });
    
    return (
        <div>
            
        </div>
    );
};

export default MyOrders;