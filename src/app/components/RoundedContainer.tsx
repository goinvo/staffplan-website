
type RoundedContainerProps = {
    align?: 'left' | 'right';
    children?: React.ReactNode;
    className?: string;
};

const RoundedContainer: React.FC<RoundedContainerProps> = ({ align = 'left', className, children }) => {
    const roundedClass = align === 'left' ? 'rounded-r-full' : 'rounded-l-full';
    const alignmentClass = align === 'left' ? 'ml-0 pl-4' : 'ml-auto pr-4';

    return (
        <div className={`relative w-full py-4 sm:py-0  sm:w-1/2 aspect-[16/10] ${className} ${roundedClass} ${alignmentClass} flex sm:block items-center justify-center`}>
            {children}
        </div >
    );
};

export default RoundedContainer;


{/* <div
                className="w-full h-full bg-center bg-no-repeat bg-contain translate-y-12"
                style={{ backgroundImage: "url('/peoplePreview.png')" }}
            >
                {/* Ваш контент здесь, если нужно */}
// </div> */}