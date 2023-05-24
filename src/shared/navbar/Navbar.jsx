import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { HiMagnifyingGlass } from "react-icons/hi2";


const Navbar = () => {
    return (
      <>
      <div className='flex justify-between bg-[rgb(72,209,186)] text-white'><p >Free Shipping for all Order of $99</p> <div className='flex'><FaFacebookF/> <FaGoogle/> </div></div>

<div className='grid lg:grid-cols-4 py-6 justify-items-center '>
            
            <div class="content my-10 me-20">
		<h4>MediCare</h4>
		<h4>MediCare</h4>
	</div>
      
            <div className='grid'>
       <div className='flex col-span-2    '> 
       <input type="text" placeholder="Search" className="input input-bordered  w-full max-w-xs " /><span className='my-auto  bg-[rgb(72,209,186)] py-3 px-4 rounded-lg ms-5'><HiMagnifyingGlass /></span>
    
       </div>
       <>
                <ul className='flex gap-2 my-5'>
                    <li className='mx-5 font-bold tracking-wide text-black hover:text-[rgb(72,209,186)]'>Home</li>
                    <li className='mx-5 font-bold tracking-wide text-black hover:text-[rgb(72,209,186)]'>Shop</li>
                    <li className='mx-5 font-bold tracking-wide text-black hover:text-[rgb(72,209,186)]'>Page</li>
                    <li className='mx-5 font-bold tracking-wide text-black hover:text-[rgb(72,209,186)]'>Blog</li>
                    <li className='mx-5 font-bold tracking-wide text-black hover:text-[rgb(72,209,186)]'>on sale</li>
                    <li className='mx-5 font-bold tracking-wide text-black hover:text-[rgb(72,209,186)]'>Contact</li>
                </ul>
            </>
          
            </div>
            <div className=' mx-auto'>
sign in
            </div>

            
        </div>
      
      </>
    );
};

export default Navbar;