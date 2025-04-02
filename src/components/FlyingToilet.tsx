import { useEffect, useState } from 'react';

interface FlyingToiletProps {
  className?: string;
}

export const FlyingToilet: React.FC<FlyingToiletProps> = ({ className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isBoosted, setIsBoosted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClick = () => {
    if (!isBoosted) {
      setIsBoosted(true);
      setTimeout(() => setIsBoosted(false), 1000); // Reset after 1 second
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes flyAcross {
            0%, 15% {
              transform: translate(-50vw, 96vh) rotate(25deg);
            }
            50% {
              /* For 12° angle: tan(12°) ≈ 0.213, so we move up by 21.3% of the horizontal distance */
              transform: translate(calc(100vw + 100%), -32vh) rotate(25deg);
            }
            100% {
              transform: translate(calc(100vw + 100%), -32vh) rotate(25deg);
            }
          }
          .flying-toilet {
            transform-origin: center center;
            will-change: transform;
            transform: translate(-200vw, 96vh) rotate(25deg);
          }
          .flying-toilet.boosted {
            animation-duration: 2s !important;
          }
          .flying-toilet img {
            cursor: pointer;
            transition: filter 0.2s ease;
          }
          .flying-toilet img:hover {
            filter: brightness(1.2);
          }
        `}
      </style>
      <div
        className={`fixed flying-toilet ${className} ${isBoosted ? 'boosted' : ''}`}
        style={{
          animation: isVisible ? 'flyAcross 16s linear infinite' : 'none',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s ease-in',
        }}
      >
        <img
          src="/space-toilet.png"
          alt="Flying Space Toilet"
          className="w-24 h-auto"
          onClick={handleClick}
        />
      </div>
    </>
  );
}; 