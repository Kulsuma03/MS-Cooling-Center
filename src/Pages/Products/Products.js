import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import ProductCard from '../../Shared/ProductCard/ProductCard';


const Products = () => {
    const products = useLoaderData([]);
    const navigation = useNavigation();
    console.log(navigation);

    if(navigation.state === 'loading'){
        return <Loading></Loading>;
    }
    
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        
        <div className="grid gap-10 mx-auto  lg:max-w-screen-lg">
         {
            products?.map(product => <ProductCard
            key={product._id}
            product={product}
            ></ProductCard>)
         }
          
          
        </div>
      </div>
    );
};

export default Products;