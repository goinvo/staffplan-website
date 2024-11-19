import React from "react";
import RoundedContainer from "./RoundedContainer"

interface RightContentSectionProps {
    children?: React.ReactNode;
    roundedContainerChildren?: React.ReactNode;
    roundedContainerClassName?: string;
}

const LeftContentSection: React.FC<RightContentSectionProps> = ({ children, roundedContainerChildren, roundedContainerClassName }) => {
    return (
        <div className="flex flex-col sm:flex-row sm:justify-between md:items-center lg:items-start w-full">
            {children}
            <RoundedContainer align="right" className={`bg-purple ${roundedContainerClassName}`}>
                {roundedContainerChildren}
            </RoundedContainer>
        </div>
    )
}

export default LeftContentSection