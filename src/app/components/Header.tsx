import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FeedbackModal from './FeedbackModal';

interface NavbarLinksTypes {
    href: string;
    label: string;
}

const navbarLinks: NavbarLinksTypes[] = [
    { href: "https://staffplan.com/registrations/new", label: "Try" },
    { href: "https://staffplan.com/sign_in", label: "Sign in" }
];


const Header: React.FC = () => {

    return (
        <header className="sticky sm:fixed top-0 w-full max-w-[1238px] sm:inset-x-0 sm:w-[calc(100%-40px)] sm:mx-auto bg-white z-50 text-tiffany px-4 rounded-lg sm:mt-4" >
            <div className="flex justify-between items-center">
                <div className="py-4">
                    <Image src="/logo.svg" width={174} height={43} alt="staffplan logo" />
                </div>
                <nav className='mr-4'>
                    <Link className="block sm:hidden" href={"https://staffplan.com/sign_in"}>
                        {"Sign In"}
                    </Link>
                    <ul className="hidden sm:flex space-x-8">
                        <li className='py-2.5 font-semibold'>
                            <FeedbackModal />
                        </li>
                        {navbarLinks.map((link, index) => (
                            <li key={index} className='py-2.5 font-semibold'>
                                <Link href={link.href}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header >)
};

export default Header;