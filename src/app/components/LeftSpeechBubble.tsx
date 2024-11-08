import React from 'react';
import './SpeechBubble.css'; // Подключаем стили

interface LeftSpeechBubbleProps {
    text: string;
}

const LeftSpeechBubble: React.FC<LeftSpeechBubbleProps> = ({ text }) => {
    return (
        <div className="speech-left max-w-[320px] sm:min-w-[310px] md:min-w-[330px] lg:min-w-[350px] xl:min-w-[485px]">{text}</div>
    );
};

export default LeftSpeechBubble;




