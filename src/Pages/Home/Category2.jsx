import React, { useState } from 'react';
import subcat2 from '../../assets/subcategory2.jpg'
import subcat1 from '../../assets/pexels-karolina-grabowska-4465121.jpg'
import subcat3 from '../../assets/pexels-anna-shvets-3683074.jpg'
import subcat4 from '../../assets/pexels-kevin-burnell-15633443.jpg'

const Category2 = () => {

    return (
        <div className='grid lg:grid-cols-3 gap-10 mx-auto w-2/3 my-10  '>
            <div  className='relative row-span-2  overflow-hidden '>
              
                <img className='' src={subcat1} alt="" />
               
              

<div    className='absolute  hover:bg-black  hover:bg-opacity-30 duration-300 hover:scale-105 transform   w-full h-full   top-0 left-0 '>
<p className='text-start font-semibold text-white text-5xl mt-10 ms-5'>Naturally <br />Good</p>
<br />
<p className='text-2xl text-white ms-5'>UP TO 25% OFF</p>
<button className='btn rounded-full ms-5'>Shop now</button>
</div>
            </div>
            <div className='col-span-1 relative  overflow-hidden '>
            <img src={subcat2} alt="" />
            <div    className='absolute  hover:bg-black  hover:bg-opacity-30 duration-300 hover:scale-105 transform   w-full h-full   top-0 left-0 '>
<p className='text-start font-semibold text-white text-3xl mt-2 ms-5'>Daily Health<br />Essentials</p>
<br />
<p className='text-1xl text-white ms-5'>UP TO 25% OFF</p>
<button className='btn rounded-full ms-5'>Shop now</button>
</div>
      
            </div>
       
            <div className='relative row-span-2 overflow-hidden'>
          
            <img src={subcat4} alt="" />
            <div    className='absolute  hover:bg-black  hover:bg-opacity-30 duration-300 hover:scale-105 transform   w-full h-full   top-0 left-0 '>
<p className='text-start font-semibold text-white text-5xl mt-10 ms-5'>Health care <br />Products</p>
<br />
<p className='text-2xl text-white ms-5'>UP TO 30% OFF</p>
<button className='btn rounded-full ms-5'>Shop now</button>
</div>
         
      
            </div>
            <div className="relative overflow-hidden">
            <img className='duration-300 ' src={subcat3} alt="" />    
            <div    className='absolute  hover:bg-black  hover:bg-opacity-30 duration-300 hover:scale-105 transform   w-full h-full   top-0 left-0 '>
<p className='text-start font-semibold text-white text-2xl mt-10 ms-5'>Medicine <br />Products</p>
<br />
<p className='text-1xl text-white ms-5'>UP TO 25% OFF</p>
<button className='btn rounded-full ms-5'>Shop now</button>
</div>
        
            </div>
            
        </div>
    );
};

export default Category2;