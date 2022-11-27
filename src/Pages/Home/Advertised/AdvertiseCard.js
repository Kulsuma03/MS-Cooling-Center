import React from 'react';

const AdvertiseCard = ({ product, setProduct }) => {
    const { img, categoryId, categoryName, sellerName, originalPrice, location, name, price, date, used, phone, condition, about , paid, _id} = product;

    if(paid){
        return <></>
    }

    return (
        <div>
          <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
            <img
              className="absolute object-cover w-full h-full rounded"
              src={img}
              alt="Person"
            />
          </div>
          <div className=" text-start text-sky-800">
            <p className="mb-4 text-xs text-gray-800">Seller: {sellerName}</p>
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
          {/* <p className='text-start'> {about ? about :
            'This Product condition is good.Im preparing for abroad & need to sell.fully automatic with remote controlled , 18000 btu ,golden copper fin, made in Korea .'
          } </p> */}
          <div className='mt-5 flex flex-start'>

            <label
              onClick={() => setProduct(product)}
              htmlFor="booking-modal"
              className="mr-4 bg-[#02AA49] px-5 py-3 text-white hover:text-[#02AA49] hover:bg-white hover:border">Book Now</label>
          </div>
        </div>
    );
};

export default AdvertiseCard;