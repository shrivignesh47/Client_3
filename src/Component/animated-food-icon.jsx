import React, { useState, useEffect, useRef } from 'react';

export function AnimatedFoodIcon({ icon, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay * 1000); // Convert delay to milliseconds
          observer.disconnect(); // Stop observing once the element is visible
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      style={{
        transform: isVisible ? 'scale(1)' : 'scale(0)',
        opacity: isVisible ? 1 : 0,
        transition: 'transform 0.5s, opacity 0.5s',
      }}
    >
      {icon}
    </div>
  );
}