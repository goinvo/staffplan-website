import InfoSection from "./components/InfoSection";
import LeftContentSection from "./components/LeftContentSection";
import RightContentSection from "./components/RightContentSection";
import { ADVANTAGES_INFO, STAFFPLAN_INFO } from "./constants";
import StaffplanDemoContainer from "./components/StaffplanDemoContainer";
import MyStaffplanPreviewContainer from "./components/MyStaffplanPreviewContainer";
import PeoplePreviewContainer from "./components/PeoplePreviewContainer";
// import BubbleSpeechContainer from "./components/BubbleSpeechContainer";

const contentSections = [
  {
    Component: RightContentSection,
    roundedContainerChildren: <MyStaffplanPreviewContainer />,
    infoData: STAFFPLAN_INFO,
    // showButton: true,
    buttonText: "Learn More",
    roundedContainerClassName: 'pr-auto sm:pr-16 pl-4',
    infoSectionStyles: 'sm:-translate-y-12'
  },
  {
    Component: LeftContentSection,
    roundedContainerChildren: <PeoplePreviewContainer />,
    infoData: ADVANTAGES_INFO,
    showButton: false,
    alignInfo: 'right',
    roundedContainerClassName: 'pl-auto sm:pl-16 pr-4',
    infoSectionStyles: 'sm:-translate-y-12'
  },
  // {
  //   Component: RightContentSection,
  //   roundedContainerChildren: <BubbleSpeechContainer />,
  //   infoData: INVOLVED_INFO,
  //   showButton: true,
  //   buttonText: "Go to our GitHub",
  //   href: "https://github.com/goinvo/staffplan-next-app",
  //   roundedContainerClassName: 'my-8 px-5',
  //   infoSectionStyles: 'mt-8'

  // },
];


export default function Content() {

  return (
    <>
      <StaffplanDemoContainer />
      {contentSections.map((section, index) => {
        const { Component, roundedContainerChildren, infoData, showButton, buttonText, alignInfo, infoSectionStyles } = section;
        return (
          <Component key={index} roundedContainerChildren={roundedContainerChildren} roundedContainerClassName={section.roundedContainerClassName}>
            <InfoSection infoData={infoData} showButton={showButton} buttonText={buttonText} align={alignInfo} className={infoSectionStyles} />
          </Component>
        );
      })}
    </>
  );
}
