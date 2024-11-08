import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const columnOneLinks = [
    {
        href: "https://github.com/goinvo/staffplan-next-app", label: "Get Involved"
    },
    { href: "#", label: "Feedback" },
    { href: "https://goinvo.com/", label: "Contact" }
];

const columnTwoLinks = [
    { href: "#", label: "Help" },
    { href: "#", label: "Pricing" }
];

const columnThreeLinks = [
    { href: "#", label: "Sign In" },
    { href: "#", label: "Try for Free" }
];

const Footer: React.FC = () => (
    <footer className="bg-contrastBlue flex flex-col sm:flex-row justify-center sm:justify-between px-14 sm:px-7 py-10 min-h-[4rem]">
        <div className="flex flex-col justify-between min-h-[4rem] sm:mb-6 md:mb-0">
            <Image src="/logo.svg" width={98} height={52} alt="GoInvo logo" />
            <div className="hidden sm:flex items-end mt-4">
                <Image src="/goinvoLogo.svg" width={98} height={52} alt="GoInvo logo" />
                <p className="ml-2 self-end text-contrastGrey">&copy; {new Date().getFullYear()}</p>
            </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between justify-normal sm:space-x-24 space-y-8 sm:space-y-2 text-white">
            <div className="flex flex-col space-y-8 sm:mt-2 mt-0">
                {columnOneLinks.map((link, index) => (
                    <Link key={index} href={link.href}>
                        {link.label}
                    </Link>
                ))}
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
        <div className="self-end bg-tiffany rounded-full w-20 h-20 flex items-center justify-center">
            <Image src="/chat.svg" width={45} height={45} alt="Chat image" />
        </div>
        <div className="flex sm:hidden items-end mt-4">
            <Image src="/goinvoLogo.svg" width={98} height={52} alt="GoInvo logo" />
            <p className="ml-2 self-end text-contrastGrey">&copy; {new Date().getFullYear()}</p>
        </div>
    </footer >
);

export default Footer;