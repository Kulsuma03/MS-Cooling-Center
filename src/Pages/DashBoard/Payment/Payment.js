import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';



const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking = useLoaderData();
    console.log(booking);
    const { categoryId, sellerName, productName, price, date,  } = booking;


    const navigation = useNavigation();
    if(navigation.state === "loading"){
        return <Loading></Loading>
    }
    return (
        <div>
            <h3 className="text-3xl font-medium md:w-3/6 mx-auto">Payment for {productName} </h3>
            <p className="text-xl my-5">Please pay <span className='text-orange-500 font-bold'>${price}</span> for your booking on {date? date : '24/11/22'}</p>
            <div className='md:w-5/6 mx-auto my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;