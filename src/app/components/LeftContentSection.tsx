import React from "react";
import RoundedContainer from "./RoundedContainer"

interface RightContentSectionProps {
    children?: React.ReactNode;
    roundedContainerChildren?: React.ReactNode;
}

const LeftContentSection: React.FC<RightContentSectionProps> = ({ children, roundedContainerChildren }) => {
    return (
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full">
            {children}
            <RoundedContainer align="right" className="bg-purple" children={roundedContainerChildren} />
        </div>
    )
}

export default LeftContentSection