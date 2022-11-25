import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const DisplayError = () => {
    const error = useRouteError();
    return (
        <div>
            <section className="">
                <div className="bg-gradient-to-tl from-gray-900 opacity-100 h-96 md:h-screen z-0 relative">
                    <img className='w-full h-96  md:h-full object-cover absolute mix-blend-overlay' src="https://cdn3.vectorstock.com/i/1000x1000/73/02/404-error-code-banner-isolated-cartoon-people-vector-27257302.jpg" alt="" />
                    <div className='flex h-full w-full justify-center items-center'>

                        <div className='block bg-slate-900 bg-opacity-50 p-10'>
                            <p className="text-3xl block my-5 text-white">
                                {error.statusText || error.message}
                            </p>
                            <Link to="/" className="px-8 py-3 font-semibold rounded bg-[#00893A] text-white">Back to homepage</Link>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DisplayError;