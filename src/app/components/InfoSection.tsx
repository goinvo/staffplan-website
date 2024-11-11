import { InfoSectionTypes } from "../typeInterfaces";
import RoundedButton from "./RoundedButton";

type InfoSectionProps = {
    infoData: InfoSectionTypes[];
    showButton?: boolean;
    href?: string;
    buttonText?: string;
};

const InfoSection: React.FC<InfoSectionProps> = ({ infoData, showButton = false, href, buttonText = "Click Me" }) => {
    return (
        <section className="space-y-8 pl-6 sm:pl-10 pr-14 sm:w-1/2 mb-8 sm:mb-0 order-1 sm:order-none">
            {infoData.map((info, index) => (
                <div key={index} className="space-y-2 mb-4">
                    <h1 className="text-26px font-bold">{info.title}</h1>
                    <h2 className="text-26px font-medium">{info.description}</h2>
                </div>
            ))}
            {showButton && (
                <RoundedButton text={buttonText} href={href} variant="outline" />
            )}
        </section>
    );
};

export default InfoSection;
