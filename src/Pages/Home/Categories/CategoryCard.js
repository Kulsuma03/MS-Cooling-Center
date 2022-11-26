import React from 'react';
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const CategoryCard = ({category}) => {
    const {name, img, about, _id } = category;
   
    return (
        <div>

            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img
                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                    src={img}
                    alt="Person"
                />
                <h2 className='text-3xl font-bold py-3'>{name}</h2>
                <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-gray-900 bg-opacity-75 opacity-0 hover:opacity-100">
                    <p className="mb-1 text-lg font-bold text-gray-100">
                       {name}
                    </p>
                   
                    <p className="mb-4 text-xs tracking-wide text-gray-400">
                       {about}
                    </p>
                    <div className="flex items-center justify-center space-x-3">
                        <Link to={`/products/${_id}`} className='text-gray-100'>
                           <FaArrowCircleRight className='text-[#008739] text-5xl'></FaArrowCircleRight>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;