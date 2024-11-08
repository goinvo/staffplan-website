import InfoSection from "./components/InfoSection";
import LeftContentSection from "./components/LeftContentSection";
import RightContentSection from "./components/RightContentSection";
import { ADVANTAGES_INFO, INVOLVED_INFO, STAFFPLAN_INFO } from "./constants";
import StaffplanDemoContainer from "./components/StaffplanDemoContainer";
import MyStaffplanPreviewContainer from "./components/MyStaffplanPreviewContainer";
import PeoplePreviewContainer from "./components/PeoplePreviewContainer";
import BubbleSpeechContainer from "./components/BubbleSpeechContainer";

const contentSections = [
  {
    Component: RightContentSection,
    roundedContainerChildren: <MyStaffplanPreviewContainer />,
    infoData: STAFFPLAN_INFO,
    showButton: true,
    buttonText: "Learn More",
  },
  {
    Component: LeftContentSection,
    roundedContainerChildren: <PeoplePreviewContainer />,
    infoData: ADVANTAGES_INFO,
    showButton: false,
  },
  {
    Component: RightContentSection,
    roundedContainerChildren: <BubbleSpeechContainer />,
    infoData: INVOLVED_INFO,
    showButton: true,
    buttonText: "Go to our GitHub",
    href: "https://github.com/goinvo/staffplan-next-app"
  },
];


export default function Content() {

  return (
    <>
      <StaffplanDemoContainer />
      {contentSections.map((section, index) => {
        const { Component, roundedContainerChildren, infoData, showButton, buttonText, href } = section;
        return (
          <Component key={index} roundedContainerChildren={roundedContainerChildren}>
            <InfoSection infoData={infoData} showButton={showButton} buttonText={buttonText} href={href} />
          </Component>
        );
      })}
    </>
  );
}
