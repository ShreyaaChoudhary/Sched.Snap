import React, { useState, useEffect } from 'react';
import './Animated.css';
const Animated = () => {
  const messages = ["Welcome to Sched.Snap", "Your own study planner"];
  const [displayedText, setDisplayedText] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(190);

  useEffect(() => {
    const handleTyping = () => {
      const currentMessage = messages[messageIndex];

      if (!isDeleting) {
        // Typing logic
        setDisplayedText(currentMessage.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        if (charIndex + 1 === currentMessage.length) {
          setTimeout(() => setIsDeleting(true), 2000); // Pause before starting to delete
        }
      } else {
        // Deleting logic
        setDisplayedText(currentMessage.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setMessageIndex((prev) => (prev + 1) % messages.length); // Move to next message
        }
      }

      const typingSpeed = isDeleting ? 100 : 200;
      setSpeed(typingSpeed);
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, messageIndex, speed, messages]);

  return (
    <div className="Typing">
        <p className='hey'>{displayedText}</p>
        <span className="blinking-cursor"></span>
    </div>
  );
};

export default Animated;
