type RoundedContainerProps = {
    align?: 'left' | 'right';
    children?: React.ReactNode;
    className?: string;
};

const RoundedContainer: React.FC<RoundedContainerProps> = ({ align = 'left', className, children }) => {
    const roundedClass = align === 'left' ? 'rounded-r-full' : 'rounded-l-full';
    const alignmentClass = align === 'left' ? 'ml-0' : 'ml-auto';

    return (
        <div className={`relative w-[90%] sm:w-1/2 h-[40vh] sm:h-[45vh] ${className} ${roundedClass} ${alignmentClass} flex sm:block items-center justify-center`}>
            {children}
        </div >

    );
};

export default RoundedContainer;
