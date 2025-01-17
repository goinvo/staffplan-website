import React from "react";
import RoundedContainer from "./RoundedContainer"

interface RightContentSectionProps {
  children?: React.ReactNode;
  roundedContainerChildren?: React.ReactNode;
  roundedContainerClassName?: string;
}

const RightContentSection: React.FC<RightContentSectionProps> = ({ children, roundedContainerChildren, roundedContainerClassName }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between sm:items-start w-full my-8 sm:my-20">
      <RoundedContainer align="left" className={`bg-tiffany ${roundedContainerClassName}`}>
        {roundedContainerChildren}
      </RoundedContainer>
      {children}
    </div>)

}

export default RightContentSection