import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for cursor movement
  // Increased stiffness for snappier response (was 150)
  const springConfig = { damping: 30, stiffness: 400 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
        // Direct update for faster feel
      mouseX.set(e.clientX - 10);
      mouseY.set(e.clientY - 10);
    };

    const mouseDown = () => setClicked(true);
    const mouseUp = () => setClicked(false);
    
    // Check if mouse is leaving the window
    const mouseLeave = () => setHidden(true);
    const mouseEnter = () => setHidden(false);

    // Add event listeners for hover effects
    const handleLinkHoverEvents = () => {
      document.querySelectorAll('a, button, .hover-target').forEach((el) => {
        el.addEventListener('mouseenter', () => setHovered(true));
        el.addEventListener('mouseleave', () => setHovered(false));
      });
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', mouseDown);
    window.addEventListener('mouseup', mouseUp);
    document.addEventListener('mouseleave', mouseLeave);
    document.addEventListener('mouseenter', mouseEnter);

    // Initial check
    handleLinkHoverEvents();

    // Re-check periodically for dynamic content
    const observer = new MutationObserver(handleLinkHoverEvents);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', mouseDown);
      window.removeEventListener('mouseup', mouseUp);
        document.removeEventListener('mouseleave', mouseLeave);
        document.removeEventListener('mouseenter', mouseEnter);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <motion.div
        ref={cursorRef}
        className={`custom-cursor ${clicked ? 'clicked' : ''} ${hovered ? 'hovered' : ''} ${hidden ? 'hidden' : ''}`}
        style={{
          translateX: cursorX,
          translateY: cursorY,
        }}
      />
      <div className="cursor-dot" style={{ left: mouseX, top: mouseY, transform: `translate(${mouseX.get()}px, ${mouseY.get()}px)` }} />
    </>
  );
}
