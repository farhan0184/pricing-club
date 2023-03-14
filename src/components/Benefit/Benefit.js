import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const Benefit = ({benefit}) => {

    return (
        <div>
            <p className='flex items-center mb-1'>
                <CheckCircleIcon className='w-4 h-4 text-gray-700 mr-2'></CheckCircleIcon>
                {benefit}
            </p>
        </div>
    );
};

export default Benefit;