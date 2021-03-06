import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import { Wrapper } from './FromDirection.style';

const transition = { ease: [0.7, 0, 0.3, 1] };

const FromDirection = ({ children, duration = 0.8, delay = 0, from = 'top', ...props }) => {
  const [isOverflow, setIsOverflow] = useState(true);

  const ref = useRef(null);

  const variants = {
    hidden: {
      ...(from.includes('top') && { y: '-100%' }),
      ...(from.includes('bottom') && { y: '100%' }),
      ...(from.includes('left') && { x: '-100%' }),
      ...(from.includes('right') && { x: '100%' }),
      opacity: 0,
    },
    visible: (i = 1) => ({
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        ...transition,
        duration,
        delay: i * delay,
      },
    }),
  };

  return (
    <Wrapper isOverflow={isOverflow}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        onAnimationComplete={() => {
          setIsOverflow(false);
          if (ref.current !== null) {
            ref.current.style.transform = '';
          }
        }}
        ref={ref}
        {...props}
      >
        {children}
      </motion.div>
    </Wrapper>
  );
};

FromDirection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  duration: PropTypes.number,
  delay: PropTypes.number,
  isOverflow: PropTypes.bool,
  from: PropTypes.string,
};

export { FromDirection };
