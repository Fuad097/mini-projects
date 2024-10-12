// CursorLight.js
import  { useEffect, useState } from 'react';

const CursorLight = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

// Update the mouse position when the cursor moves
useEffect(() => {
const handleMouseMove = (event) => {
  setMousePosition({
    x: event.clientX,
    y: event.clientY,
  });
};

window.addEventListener('mousemove', handleMouseMove);

return () => {
  window.removeEventListener('mousemove', handleMouseMove);
};
}, []);

    return (
        <div className="App">
        <div
          className="cursor-light"
          style={{
            left: `${mousePosition.x-400}px`, // Adjust position for the light effect
            top: `${mousePosition.y-400}px`,
          }}
        ></div>
      </div>
    );
};

export default CursorLight;
