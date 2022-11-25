import React from 'react';
import toast from 'react-hot-toast';

const ProductCard = ({ product, setProduct }) => {
  const { img, categoryId, categoryName, sellerName, originalPrice, location, name, price, date, used } = product;

  const handleWishList = () => {
    console.log('wishlist');
    
    const wishlist = {
      name, 
      price,
      used,
      img,
      categoryId, 
      categoryName,
  }
    fetch('http://localhost:5000/wishlist', {
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
          else{
              toast.error(data.message);
          }
      })

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
          <p className="text-lg font-bold"> {name}</p>
          <p className="mb-4 text-xs text-gray-800">Seller: {sellerName}</p>
          <p className="mb-4 text-sm tracking-wide text-gray-800">
            Location: {location}
          </p>
          <div className="">
            <p> Original price: <span className='text-orange-500 font-bold'>${originalPrice}</span></p>
            <p> Current Price: <span className='text-orange-500 font-bold'>${price}</span></p>
            <p> Has been used: {used} year.</p>
            <p> Post published: {date} </p>
          </div>
          <div className='mt-3'>
            <label
              onClick={() => setProduct(product)}
              htmlFor="booking-modal"
              className="mr-4 bg-[#02AA49] px-5 py-3 text-white hover:text-[#02AA49] hover:bg-white hover:border">Book Now</label>
            
            <button onClick={handleWishList} className='bg-white px-7 py-3 text-[#02AA49] hover:text-white hover:bg-[#02AA49] border'>wishList</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductCard;