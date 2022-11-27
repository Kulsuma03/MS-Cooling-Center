import React from 'react';
import Advertised from '../Advertised/Advertised';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Tips from '../Tips/Tips';

const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <Categories></Categories>
           <Advertised></Advertised>
           <Tips></Tips>

        </div>
    );
};

export default Home;