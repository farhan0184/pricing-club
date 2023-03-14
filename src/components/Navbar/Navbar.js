import React, { useState } from 'react';
import {Bars3CenterLeftIcon, XMarkIcon} from '@heroicons/react/24/solid';

const Navbar = () => {
    const routes = [
        {id: 1, name: 'Home', link: '/home'},
        {id: 2, name: 'Products', link: '/products'},
        {id: 3, name: 'Order', link: '/order'},
        {id: 4, name: 'AboutUs', link: '/about_us'},
        {id: 5, name: 'SignUp', link: '/sign_up'},
    ]
    const [open, setOpen] = useState(false)

    return (
        <div className=''>
            <div onClick={() => setOpen(!open)} className='flex justify-end md:hidden mt-6 mr-6 text-gray-700'>
                {
                    open ? <XMarkIcon className='h-8 w-8'></XMarkIcon> :<Bars3CenterLeftIcon className='h-8 w-8'></Bars3CenterLeftIcon>
                }
            </div>
            <nav className={`md:flex md:justify-between w-11/12 mx-auto text-center mt-[-50px] md:mt-0 `}>
                <h1 className='text-4xl italic py-3 text-gray-700' >BengalMarket</h1>
                {/* ${open ? 'bg-slate-800': 'bg-white'} */}
                <div className={`md:flex items-center mt-4 mr-6`}>
                    <ul className={`md:flex md:static absolute w-11/12 ease-in  duration-1000 ${open ? 'top-20 bg-slate-800 text-white': 'top-[-420px] bg-white text-gray-700'} md:p-0 pb-6`}>
                        {
                            routes.map(route => 
                                <li key={route.id} className='md:mt-0  mt-6'>
                                    <a href={route.link} className='px-4 py-2 text-xl italic'>{route.name}</a>
                                </li> 
                            )
                        }
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;