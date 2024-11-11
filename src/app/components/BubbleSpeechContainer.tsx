import LeftSpeechBubble from "./LeftSpeechBubble"
import RightSpeechBubble from "./RightSpeechBubble"

interface BubbleSpeechContainerProps {

}

const BubbleSpeechContainer: React.FC<BubbleSpeechContainerProps> = () => {
    return (
        <div className="my-2">
            <div className="flex flex-col ml-0 sm:ml-2 md:ml-4 mt-4 mb-0">
                <div className="relative ml-16 xs:ml-20 sm:ml-10 md:ml-20 lg:ml-32">
                    <LeftSpeechBubble text={'Our team has needs help with something in Staffplan...'} />
                </div>
                <div className="relative z-10 -mt-2">
                    <RightSpeechBubble text={"We can help with that!"} />
                </div>
                <div className="relative ml-16 xs:ml-20 sm:ml-10 md:ml-20 lg:ml-32">
                    <LeftSpeechBubble text={'Also, we have ideas!'} />
                </div>
                <div className="relative z-10 -mt-4">
                    <RightSpeechBubble text={"Let’s chat! We can help with that too!"} />
                </div>
            </div>
        </div>
    );
};

export default BubbleSpeechContainer;
