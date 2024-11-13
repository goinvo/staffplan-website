import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavbarLinksTypes {
    href: string;
    label: string;
}

const navbarLinks: NavbarLinksTypes[] = [
    { href: "#Feedback", label: "Feedback" },
    { href: "#Try", label: "Try" },
    { href: "https://staffplan.com/sign_in", label: "Sign in" }
];

const Header: React.FC = () => (
    <header className="bg-white sticky top-0 z-50 text-tiffany px-4">
        <div className="flex justify-between items-center py-1">
            <div className="py-1">
                <Image src="/logo.svg" width={174} height={43} alt="staffplan logo" />
            </div>
            <nav className='mr-4'>
                <ul className="hidden sm:flex text-26px space-x-8">
                    {navbarLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.href}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    </header>
);

export default Header;