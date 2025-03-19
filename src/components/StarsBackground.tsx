import React, { useEffect, useState } from 'react';

interface Star {
  id: number;
  top: string;
  left: string;
  size: string;
  delay: string;
  duration: string;
  speed?: string;
}

const StarsBackground: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      // Use document height instead of window height for full coverage
      const starCount = Math.floor(window.innerWidth * Math.max(document.documentElement.scrollHeight, document.body.scrollHeight) / 2000);
      
      for (let i = 0; i < starCount; i++) {
        // Determine if this star will have the twinkling effect (about 30% of stars)
        const hasTwinkle = Math.random() < 0.3;
        // Determine star movement speed (slower for distant/smaller stars)
        const starSize = Math.random() * 2 + 1;
        const movementSpeed = ((starSize - 1) / 2) * 20 + 10; // 10-30s based on size
        
        newStars.push({
          id: i,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          size: `${starSize}px`,
          delay: `${Math.random() * 5}s`,
          duration: hasTwinkle ? ['twinkle', 'twinkle-slow', 'twinkle-slower'][Math.floor(Math.random() * 3)] : '',
          speed: `${movementSpeed}s`
        });
      }
      
      setStars(newStars);
    };

    generateStars();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className={`star ${star.duration ? `animate-${star.duration}` : ''} animate-space-travel`}
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
            animationDuration: star.speed,
            opacity: 0.5,
          }}
        />
      ))}
    </div>
  );
};

export default StarsBackground;
