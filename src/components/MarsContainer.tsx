import React from 'react';

interface SpeechBubbleProps {
  text: string;
  position: string;
  style?: React.CSSProperties;
}

const SpeechBubble: React.FC<SpeechBubbleProps> = ({ text, position, style }) => {
  return (
    <div className={`absolute ${position} bg-white/90 rounded-2xl p-4 max-w-[250px] shadow-lg`} style={style}>
      <div className="relative">
        <p className="text-gray-800">{text}</p>
        <div className="absolute -bottom-2 left-4 w-4 h-4 bg-white/90 transform rotate-45"></div>
      </div>
    </div>
  );
};

const MarsContainer: React.FC = () => {
  return (
    <div className="mars relative w-full min-h-[600px] flex items-center justify-center rounded-[30px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: 'url(/mars.png)',
        }}
      />
      {/* Speech Bubbles */}
      <SpeechBubble 
        text="I can't do it. I'm already booked."
        position="top-5 left-5"
        style={{ fontStyle: 'italic', fontSize: '125%' }}
      />
      <SpeechBubble 
        text="What are we supposed to do then?"
        position="top-40 right-5"
        style={{ fontStyle: 'italic', fontSize: '125%' }}
      />
      <SpeechBubble 
        text="Just shit in the sand."
        position="top-60 left-5"
        style={{ fontStyle: 'italic', fontSize: '125%' }}
      />
      <SpeechBubble 
        text="Ohhh, my tummy. This isn't going to be pretty...."
        position="top-80 right-5"
        style={{ fontStyle: 'italic', fontSize: '125%' }}
      />
      {/* Content overlay will go here */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Mars section content will go here */}
      </div>
    </div>
  );
};

export default MarsContainer; 