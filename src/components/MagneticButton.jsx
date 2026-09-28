import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MagneticButton = ({ children, className = "", onClick, ...props }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.5, y: middleY * 0.5 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  // If children is already a button, clone it instead of nesting <button><button>
  if (React.isValidElement(children) && children.type === 'button') {
    return (
      <motion.div
        style={{ position: 'relative', display: 'inline-block' }}
        ref={ref}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        animate={{ x, y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      >
        {React.cloneElement(children, {
          onClick: (e) => {
            if (children.props.onClick) children.props.onClick(e);
            if (onClick) onClick(e);
          },
          className: `${children.props.className || ''} ${className}`.trim(),
          ...props
        })}
      </motion.div>
    );
  }

  return (
    <motion.div
      style={{ position: 'relative', display: 'inline-block' }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      <button className={className} onClick={onClick} {...props}>
        {children}
      </button>
    </motion.div>
  );
};

export default MagneticButton;
