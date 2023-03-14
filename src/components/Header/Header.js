import React from 'react';
import Animation from '../Animation/Animation';
import Navbar from '../Navbar/Navbar';
import Slider from '../Slider/Slider';

const Header = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Animation></Animation>
        </div>
    );
};

export default Header;