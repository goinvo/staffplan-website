import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import FeedbackModal from './FeedbackModal';

// const columnOneLinks = [
//     {
//         href: "https://github.com/goinvo/staffplan-next-app", label: "Open Source"
//     },
// ];

const columnTwoLinks = [
    // { href: "#", label: "Help" },
    { href: "mailto:staffplan@goinvo.com?subject=StaffPlan Contact", label: "Contact" }, 
    { href: "https://github.com/goinvo/staffplan-next-app", label: "Open Source" }
];

const columnThreeLinks = [
    { href: "https://app.staffplan.com/sign_in", label: "Sign In" },
    { href: "https://app.staffplan.com/registrations/new", label: "Try StaffPlan" }
];

const Footer: React.FC = () => (
    <footer className="bg-contrastBlue flex flex-col sm:flex-row justify-center px-14 sm:px-7 py-10 min-h-[20rem]">
        <div className='flex flex-col sm:flex-row justify-between w-full max-w-[1238px] mx-auto'>
            <div className="flex flex-col justify-between min-h-[4rem] sm:mb-6 md:mb-0 mr-auto">
                <Image src="/logo.svg" width={174} height={43} alt="staffplan logo" />
                <div className="hidden sm:flex items-end mt-8">
                    <Link href="https://goinvo.com/">
                        <Image src="/goinvoLogo.svg" width={98} height={52} alt="GoInvo logo" />
                    </Link>
                    <p className="ml-2 self-end text-contrastGrey">&copy; 2025</p>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-center justify-normal sm:space-x-24 space-y-8 sm:space-y-2 text-white mr-auto">
                <div className="flex flex-col space-y-8 sm:mt-2 mt-0">
                </div>
                <div className="flex flex-col space-y-8">
                    {columnTwoLinks.map((link, index) => (
                        <Link key={index} href={link.href}>
                            {link.label}
                        </Link>
                    ))}
                </div>
                <div className="flex flex-col space-y-8">
                    {columnThreeLinks.map((link, index) => (
                        <Link key={index} href={link.href}>
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
            <div className="flex sm:hidden items-end mt-4">
                <Link href="https://goinvo.com/">
                    <Image src="/goinvoLogo.svg" width={98} height={52} alt="GoInvo logo" />
                </Link>
                <p className="ml-2 self-end text-contrastGrey">&copy; 2025</p>
            </div>
        </div>
    </footer >
);

export default Footer;
