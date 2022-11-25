import React from 'react';

const ProductCard = ({ product, setProduct }) => {
  const { img, categoryId, sellerName, originalPrice, location, name, price, date, used } = product;
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
            <button



              className=''>
              Book Now
            </button>
            <button className='bg-white px-7 py-3 text-[#02AA49] hover:text-white hover:bg-[#02AA49] border'>wishList</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductCard;