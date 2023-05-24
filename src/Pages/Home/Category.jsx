import React from 'react';
import healthicon  from '../../assets/healthcare.png'
import healthProduct from '../../assets/hygiene-products.png'
import diagnostic from '../../assets/examination.png'
import info from '../../assets/info.png'

const Category = () => {
    return (
        <div className='bg-gray-200 bg-opacity-30 flex  mx-auto  gap-10  justify-center my-10'>
            <div className='grid text-center py-10 hover:-translate-y-4 ms-4 text-[10px] lg:text-[20px] duration-300 ' >
         <img className='w-6 h-6 lg:w-20 lg:h-20 md:w-10 md:h-10 my-auto mx-auto ' src="https://img.freepik.com/premium-vector/medicine-pills-cartoon-icon-illustration-medical-healthy-icon-concept-isolated-flat-cartoon-style_138676-1704.jpg?w=740" alt="" />
                <div>
                    <p className='font-medium tracking-wide'>Medicine</p>
                    <p className=' font-thin text-zinc-500'>Over 25000 products</p>
                </div>
            </div>
            <div className='grid text-center py-10 hover:-translate-y-4 ms-4 text-[10px] lg:text-[20px] duration-300 ' >
         <img className='w-6 h-6 lg:w-20 lg:h-20 md:w-10 md:h-10 my-auto mx-auto' src={healthProduct} alt="" />
                <div>
                    <p className='font-medium tracking-wide'>Wellness</p>
                    <p className=' font-thin text-zinc-500'>Health products</p>
                </div>
            </div>
            <div className='grid text-center py-10 hover:-translate-y-4 ms-4 text-[10px] lg:text-[20px] duration-300 ' >
         <img className='w-6 h-6 lg:w-20 lg:h-20 md:w-10 md:h-10 my-auto mx-auto' src={diagnostic} alt="" />
                <div>
                    <p className='font-medium tracking-wide'>Diagnostic</p>
                    <p className=' font-thin text-zinc-500'>Book tests and checkups </p>
                </div>
            </div>
            <div className='grid text-center py-10 hover:-translate-y-4 ms-4 text-[10px] lg:text-[20px] duration-300 ' >
         <img className='w-6 h-6 lg:w-20 lg:h-20 md:w-10 md:h-10 my-auto mx-auto' src={healthicon} alt="" />
                <div>
                    <p className='font-medium tracking-wide'>Health corner</p>
                    <p className=' font-thin text-zinc-500'>Trendings from health experts </p>
                </div>
            </div>
            <div className='grid text-center py-10 hover:-translate-y-4 ms-4 text-[10px] lg:text-[20px] duration-300 ' >
         <img className='w-6 h-6 lg:w-20 lg:h-20 md:w-10 md:h-10 my-auto mx-auto' src={info} alt="" />
                <div>
                    <p className='font-medium tracking-wide'>others</p>
                    <p className=' font-thin text-zinc-500'>More info</p>
                </div>
            </div>
       
        </div>
    );
};

export default Category;