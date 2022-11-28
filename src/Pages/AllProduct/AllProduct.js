import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import BookingModal from '../../Shared/BookingModal/BookingModal';
import Loading from '../../Shared/Loading/Loading';
import ProductCard from '../../Shared/ProductCard/ProductCard';

const AllProduct = () => {
    const allProduct = useLoaderData([]);
    const navigation = useNavigation();
    const [product, setProduct] = useState(null);
    // console.log(allProduct);

    if(navigation.state === 'loading'){
        return <Loading></Loading>;
    }

    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        
        <div className="grid gap-10 mx-auto  lg:max-w-screen-lg">
         {
            allProduct?.map(product => <ProductCard
            key={product._id}
            product={product}
            setProduct={setProduct}
            ></ProductCard>)
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

export default AllProduct;