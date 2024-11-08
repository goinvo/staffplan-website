import React from 'react';
import Link from 'next/link';

interface NavbarLinksTypes {
    href: string;
    label: string;
}

const navbarLinks: NavbarLinksTypes[] = [
    { href: "#Feedback", label: "Feedback" },
    { href: "#Try", label: "Try" },
    { href: "#Sign in", label: "Sign in" }
];

const Header: React.FC = () => (
    <header className="bg-white text-tiffany px-4">
        <div className="flex justify-between items-center">
            <h1 className="text-huge font-bold">Staffplan</h1>
            <nav className='mr-4'>
                <ul className="flex text-26px space-x-8">
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