// components/Cursor.jsx
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessKnight } from '@fortawesome/free-solid-svg-icons';


const Cursor = () => {
  const [cursorStyle, setCursorStyle] = useState({ left: 0, top: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      // Request animation frame to optimize performance
      requestAnimationFrame(() => {
        setCursorStyle({ left: e.clientX, top: e.clientY });
      });
    };

    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div className="cursor-container">
      <div
        className="cursor"
        style={{ left: cursorStyle.left, top: cursorStyle.top }}
      >
        <FontAwesomeIcon icon={faChessKnight} style={{color: "#ffffffb3",}} size="2x" />
      </div>
      
    </div>
  );
};

export default Cursor;
