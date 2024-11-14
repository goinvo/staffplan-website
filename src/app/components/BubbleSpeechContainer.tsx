import Image from "next/image";


const BubbleSpeechContainer: React.FC = () => {
    return (
        <>
            <div className="hidden sm:block relative z-20 mr-auto w-[100%] sm:w-[90%] sm:aspect-[11/7] sm:translate-y-4 md:translate-y-6 lg:translate-y-9 ml-4 overflow-visible">
                <Image
                    src="/getInvolved.png"
                    alt="Get involved bubble speech"
                    fill
                    className="sm:block hidden object-cover object-center"
                />
            </div >
            <div className="sm:hidden relative w-[65%] ml-1 aspect-[7.5/9.7] translate-y-4">
                <Image
                    src="/getInvolvedMobile.png"
                    alt="Get involved bubble speech"
                    fill
                    className="sm:hidden block object-cover scale-150"
                />
            </div>
        </>
    );
};

export default BubbleSpeechContainer;
