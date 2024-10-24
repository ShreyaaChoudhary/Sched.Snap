import React, { useEffect, useState } from 'react';
import './HomeCursor.css';

const HomeCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            // Calculate the center of the cursor image to align it with the mouse pointer
            const cursorWidth = 40;  // Example width of cursor image
            const cursorHeight = 40; // Example height of cursor image

            setPosition({
                x: event.clientX - cursorWidth / 2,
                y: event.clientY - cursorHeight / 2
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            className="custom-cursor"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`
            }}
        />
    );
};

export default HomeCursor;
