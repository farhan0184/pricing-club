import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Prices = () => {
    const prices = [
        {id:1, name: 'Free', price: 0, benefits:[
            'OneTime Free',
            'Unlimited Deals',
            'Localization Deals',
            'Fantastic Deals',
            'Crazy Deals']
        },
        {id:2, name: 'Regular', price: 9.99, benefits:[
            'Regular Free',
            'Unlimited Deals',
            'Localization Deals',
            'Fantastic Deals',
            'Crazy Deals']
        },
        {id:3, name: 'Premium', price: 19.99, benefits:[
            'LifeTime Free',
            'Unlimited Deals',
            'Localization Deals',
            'Fantastic Deals',
            'Crazy Deals']
        },
    ]
    return (
        <div className='w-11/12 mt-5 text-gray-700 mx-auto mb-10'>
            <h1 className='text-3xl text-center italic font-semibold'>Best Price</h1>
            <div className='grid md:grid-cols-3 gap-3 mt-8'>
                {
                   prices.map(item=>
                    <PriceOption
                        key={item.id}
                        priceRate={item}
                    >
                    </PriceOption>
                   ) 
                }
            </div>
        </div>
    );
};

export default Prices;