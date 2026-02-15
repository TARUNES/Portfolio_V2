import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

const DecryptedText = ({ text }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 30);
    
    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayText}</span>;
}

export default DecryptedText;
