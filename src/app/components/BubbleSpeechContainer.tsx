import Image from "next/image";


const BubbleSpeechContainer: React.FC = () => {
    return (
        <>
            <div className="hidden sm:block relative z-10 ml-auto w-[100%] max-w-[600px] sm:aspect-[11/7] sm:translate-y-4 md:translate-y-6 lg:translate-y-9 overflow-visible">
                <Image
                    src="/getInvolved.png"
                    alt="Get involved bubble speech"
                    fill
                    className="sm:block hidden object-cover object-center"
                />
            </div >
            <div className="sm:hidden relative w-[90%] max-w-[220px] aspect-[7.5/9.7] translate-y-4 ml-5">
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
