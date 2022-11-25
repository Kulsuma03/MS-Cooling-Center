import React from 'react';

const BannerItem = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item h-screen relative w-full">

            <div id="slide3" className="carousel-item relative w-full">
                <img src={image} alt='bg-img' className="w-full h-5/6 " />

                <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 bottom-1/2 top-1/2">
                    <div className="w-full mt-[-90px] md:mt-[-120px] flex justify-center ">
                        <h1 className=' text-3xl p-5 bg-slate-700 bg-opacity-50 md:text-6xl font-bold text-white'>
                        Second Hand  <br />
                        Air Conditioner<br />
                            Bangladesh
                        </h1>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href={`#slide${prev}`} className="btn hover:bg-white hover:text-[#008838] bg-[#008838] btn-circle">❮</a>
                        <a href={`#slide${next}`} className="btn hover:bg-white hover:text-[#008838] bg-[#008838] btn-circle">❯</a>
                    </div>
                </div>
            </div>
          
        </div>
    );
};

export default BannerItem;