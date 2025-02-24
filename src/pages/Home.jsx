import React from 'react';
import { Categories } from '../assets/MockData';  // Ensure the path is correct

const Home = () => {

    return (
        <div className='bg-white mt-2 px-4 md:px-16 lg:px-24 py-8'>
            <div className='container mx-auto py-4 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8'>
                <div className='w-full md:w-1/4'>
                    <div className='bg-red-600 text-white text-sm font-bold px-4 py-3 rounded-t-lg'>
                        Shop by Categories
                    </div>
                    <ul className='space-y-4 bg-gray-100 p-4 border border-gray-200 rounded-b-lg'>
                        {Categories.map((category, index) => (
                            <li key={index} className='flex items-center text-sm font-medium hover:text-red-600 cursor-pointer'>
                               <div className='w-2 h-2 border border-red-500 rounded-full mr-3'></div>
                               {category}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='w-full md:w-3/4 h-96 relative rounded-lg overflow-hidden shadow-lg'>
                    <img src="https://images.pexels.com/photos/919453/pexels-photo-919453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Banner" className='h-full w-full object-cover' />
        
                    <div className='absolute top-10 left-8 font-extrabold text-white'>
                        <p className='text-gray-300 mb-2 text-lg'>Shop with NAINO</p>
                        <h2 className='text-4xl font-bold mb-3'>Welcome to e-shop</h2>
                        <p className='text-xl font-bold text-gray-200'>Millions+ Products</p>
                        <button className='bg-red-600 px-8 py-2 text-white mt-6 hover:bg-red-700 transform transition-transform
                        duration-300 hover:scale-105 rounded-lg shadow-md'>SHOP NOW</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;