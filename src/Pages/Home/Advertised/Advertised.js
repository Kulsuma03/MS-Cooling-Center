import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BookingModal from '../../../Shared/BookingModal/BookingModal';
import Loading from '../../../Shared/Loading/Loading';
import ProductCard from '../../../Shared/ProductCard/ProductCard';
import AdvertiseCard from './AdvertiseCard';

const Advertised = () => {
    const [advertise, setAdvertise] = useState([]);
    const [dataLoading, setDataLoading] = useState(false);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        setDataLoading(true)
        axios.get('http://localhost:5000/advertise')
            .then(data => {
                // console.log(data.data);
                setAdvertise(data.data);
                setDataLoading(false)
            })
    }, []);

    if(dataLoading){
        return <Loading></Loading>
    }
    
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
                    <p className="inline-block px-3 py-px mb-4 tracking-wider text-gray-900 text-3xl font-bold uppercase rounded-full bg-teal-accent-400">
                    What type of AC provides better service?
                    </p>
                    <p className="text-base text-gray-700 md:text-lg">
                    All types of air conditioner is good and should be bought depends on the room condition and budget.
                    </p>
                </div>

                <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
                    {
                        advertise.map(product => <AdvertiseCard
                            key={product._id}
                            product={product}
                            setProduct={setProduct}
                        ></AdvertiseCard>)
                    }


                </div>
                <div>
                    {
                        product &&
                        <BookingModal
                            product={product}
                            setProduct={setProduct}
                        ></BookingModal>
                    }
                </div>
            </div>

        </div>
    );
};

export default Advertised;