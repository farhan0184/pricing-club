import { ArrowRightIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Benefit from '../Benefit/Benefit';

const PriceOption = (props) => {
    const {name,price,benefits} = props.priceRate
    return (
        <div>
            <div className='bg-gray-200 rounded-md'>
                <h1 className='text-2xl italic text-gray-700 text-center p-3 font-semibold'>{name}</h1>
            </div>
            <div className='text-center'>
                <span className='text-5xl italic text-gray-700 font-semibold'>{price}</span>
                <span className='text-xl italic text-gray-700 font-semibold'>/mo</span>
            </div>
            <div className='px-5 mt-3'>
                <h1 className='text-xl italic text-gray-700 font-semibold'>Benefits:</h1>
                {
                    benefits.map(item => 
                    <Benefit
                    key={item}
                       benefit={item}
                    >
                    </Benefit>)
                }
                <button className='w-full bg-gray-800 text-white italic text-xl rounded-lg mt-2 py-2 '>
                    Buy Now
                    <ArrowRightIcon className=' ml-2 w-6 h-6  inline'></ArrowRightIcon>
                </button>
            </div>
        </div>
    );
};

export default PriceOption;