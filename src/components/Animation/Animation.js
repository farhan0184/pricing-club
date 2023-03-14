import React, { useState } from 'react';
import { animated, config, useSpring } from '@react-spring/web'

const Animation = () => {
    const  [flip,set] = useState(false)
    const springs = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        reset: true,
        reverse: flip,
        delay: 200,
        config: config.molasses,
        onRest: () => set(!flip)
      })
    return (
        <animated.div style={springs} className='text-center text-3xl mb-10 italic text-gray-700'>Hello World</animated.div>
    );
};

export default Animation;