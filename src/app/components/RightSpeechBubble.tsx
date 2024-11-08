import React from 'react';
import './SpeechBubble.css';

interface RightSpeechBubbleProps {
    text: string;
}

const SpeechBubble: React.FC<RightSpeechBubbleProps> = ({ text }) => {
    return (
        <div className="speech max-w-[300px] sm:max-w-[280px] md:min-w-[300px] lg:min-w-[350px] xl:min-w-[485px]">{text}</div>
    );
};

export default SpeechBubble;














