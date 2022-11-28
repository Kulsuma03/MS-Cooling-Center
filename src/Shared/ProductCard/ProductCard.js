import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';
import {  GoVerified } from "react-icons/go";

const ProductCard = ({ product, setProduct }) => {
  const { user } = useContext(AuthContext)
  const { img, categoryId, categoryName, sellerName, originalPrice, location, name, price, date, used, phone, condition, about , paid, _id, verifySeller} = product;

  const handleWishList = () => {
    console.log('wishlist');

    const wishlist = {
      productName: name,
      price,
      used,
      img,
      categoryId, 
      categoryName, 
      productId: _id,
      wishList: true
    }
    fetch('https://assignment-12-server-liart.vercel.app/wishlist', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(wishlist)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.acknowledged) {
          toast.success('successfully add to wish list');
        }
        else {
          toast.error(data.message);
        }
      })

  }

  if(paid){
    return <></>
  }

  return (
    <div>

      <div className="grid sm:grid-cols-3">
        <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
          <img
            className="absolute object-cover w-full h-full rounded"
            src={img} alt='product-img'
          />
        </div>
        <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
          <p className="text-lg mb-3 font-bold"> {name}</p>

          <div className="grid md:grid-cols-2 text-start text-sky-800">
            <p className="mb-4 flex items-center justify-start text-xs text-gray-800">
              Seller: {sellerName} {
                verifySeller && <GoVerified 
                title='verify seller' className='text-[#01AA45] ml-1 text-xl'></GoVerified>
              }
            </p>
            <p title={location} className="mb-4 text-sm tracking-wide text-gray-800">
              Location: {location?.length > 20 ? location.slice(9, 30) + '...' : location}
            </p>
            <p>Contact: {phone ? phone : '12385453'}</p>
            <p> Original price: <span className='text-orange-500 font-bold'>${originalPrice}</span></p>
            <p> Post published: {date} </p>
            <p> 
              Resale Price: 
              <span className='text-orange-500 font-bold'>${price}</span> 
              <span className='text-red-500'> {paid && '(Sold OUt)'}</span>
              </p>
            <p> years of use: {used ? used : 1} {parseInt(used) > 1 ? 'years' : 'year'}. </p>
            <p>Condition: {condition ? condition : 'good'}</p>

          </div>
          <p className='text-start'> {about ? about :
            'This Product condition is good.Im preparing for abroad & need to sell.fully automatic with remote controlled , 18000 btu ,golden copper fin, made in Korea .'
          } </p>
          <div className='mt-5'>

            <label
              onClick={() => setProduct(product)}
              htmlFor="booking-modal"
              
              className="mr-4 bg-[#02AA49] px-5 py-3 text-white hover:text-[#02AA49] hover:bg-white hover:border">Book Now</label>

            {
              user?.uid && <button onClick={handleWishList} className='bg-white px-7 py-3 text-[#02AA49] hover:text-white hover:bg-[#02AA49] border'>wishList</button>
            }
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductCard;