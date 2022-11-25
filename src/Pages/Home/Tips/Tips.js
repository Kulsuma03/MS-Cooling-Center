import React from 'react';

const Tips = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="34f481be-159a-4846-821d-9ca19fb6bcc5"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#34f481be-159a-4846-821d-9ca19fb6bcc5)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative">Air</span>
                    </span>{' '}
                     Conditioner maintenance tips
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                Users Trusted Ms Cooling Center for Hiring AC Dealers last year.
                </p>
            </div>
            <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
                <div className="duration-300 transform bg-white border-l-4 border-[#3CAA68] hover:-translate-y-2">
                    <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                        <h6 className="mb-2 font-semibold leading-5">Split AC - An Overview</h6>
                        <p className="text-sm text-gray-900">
                        Summer is here. It is no surprise that an overwhelming number of people are searching for the right air-conditioner. There can be no better way to cool off than by an AC. All the AC dealers in India provides you with a number of options available, you might get little confused....
                        </p>
                    </div>
                </div>
                <div className="duration-300 transform bg-white border-l-4 border-[#3CAA68] hover:-translate-y-2">
                    <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                        <h6 className="mb-2 font-semibold leading-5">DIY Hacks To Fix A Troublesome AC</h6>
                        <p className="text-sm text-gray-900">
                        An air-conditioner works like any other machine. Many factors contribute to the well-functioning of an AC. However, a myriad of reasons decreases the AC's effectiveness. To help you fix common AC problems we have a brief guide that walks you through the effective methods of maintaining an AC. ...
                        </p>
                    </div>
                </div>
                <div className="duration-300 transform bg-white border-l-4 border-[#3CAA68] hover:-translate-y-2">
                    <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                        <h6 className="mb-2 font-semibold leading-5">How Did Chennai Beat The Heat In May?</h6>
                        <p className="text-sm text-gray-900">
                        If you are a resident of Chennai, you must have noticed how the temperature rises every summer. June, July and August are the hottest months in the region. June has an average temperature of 36 degrees. Increase your total fluid consumption. Set water drinking reminders and make sure you stay hydrated. ...
                        </p>
                    </div>
                </div>
                <div className="duration-300 transform bg-white border-l-4 border-[#3CAA68] hover:-translate-y-2">
                    <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                        <h6 className="mb-2 font-semibold leading-5">Read This Before Buying A Split System AC For Yourself!</h6>
                        <p className="text-sm text-gray-900">
                        Summer is here. It is no surprise that an overwhelming number of people are searching for a perfect air-conditioner right now. There can be no better way to cool off than chilling in an Air-conditioned room. All the AC dealers in India stock up on a variety of professional AC brands...
                        </p>
                    </div>
                </div>
               
            </div>
            <div className="text-center">
                <a
                    href="/"
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-[#3CAA68] hover:bg-white hover:text-[#3CAA68] focus:shadow-outline focus:outline-none"
                >
                    Learn more
                </a>
            </div>
        </div>

    );
};

export default Tips;