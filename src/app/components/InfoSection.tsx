import { InfoSectionTypes } from "../typeInterfaces";
import RoundedButton from "./RoundedButton";

type InfoSectionProps = {
    infoData: InfoSectionTypes[];
    showButton?: boolean;
    href?: string;
    buttonText?: string;
    align?: string
    className?: string;
};

const InfoSection: React.FC<InfoSectionProps> = ({ infoData, showButton = false, href, buttonText = "Click Me", align, className }) => {
    const rightAlign = align === 'right' ? 'ml-auto' : ''
    return (
        <section className={`h-auto mt-8 sm:mt-0 space-y-8 pl-6 sm:pl-10 pr-14 sm:w-1/2 sm:mx-auto mb-auto mb-8 sm:mb-0 order-1 sm:order-none ${className}`}>
            <div className={`max-w-[555px] ${rightAlign}`}>
                {infoData.map((info, index) => (
                    <div key={index} className="space-y-2 mb-4 mt-6">
                        <h1 className="font-bold">{info.title}</h1>
                        <h2 className="font-medium">{info.description}</h2>
                    </div>
                ))}
                <div className="mt-10">
                    {showButton && (
                        <RoundedButton text={buttonText} href={href} variant="outline" />
                    )}
                </div>
            </div>
        </section>
    );
};

export default InfoSection;
