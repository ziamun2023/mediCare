import React from 'react';
import Banner from '../banner/Banner';
import Category from './Category';
import Category2 from './Category2';
import Category3 from './category3';


const Home = () => {
    return (
        <div className=''>
         <Banner/>
         <Category/>
         <Category2/>
         <Category3/>
        </div>
    );
};

export default Home;