import Link from 'next/link';
import React from 'react';

type RoundedButtonProps = {
    text: string;
    variant?: 'outline' | 'filled';
    size?: 'small' | 'medium' | 'large';
    href?: string
};

enum ButtonSize {
    Small = 'small',
    Medium = 'medium',
    Large = 'large',
}

const RoundedButton: React.FC<RoundedButtonProps> = ({ text, href = "/", variant = 'outline', size = 'medium' }) => {
    const baseClasses = "rounded-full font-normal transition-colors duration-300";

    const variantClasses =
        variant === 'filled'
            ? "bg-tiffany text-white hover:bg-white hover:text-tiffany"
            : "bg-white text-tiffany hover:bg-tiffany hover:text-white";

    const sizeClassesMap: Record<ButtonSize, string> = {
        [ButtonSize.Small]: "px-3 py-1 text-sm",
        [ButtonSize.Medium]: "px-6 py-2",
        [ButtonSize.Large]: "px-20 py-2 text-26px font-semibold"
    };

    const sizeClasses = sizeClassesMap[size];

    return (
        <Link href={href} className={`border my-2 border-tiffany ${baseClasses} ${variantClasses} ${sizeClasses}`}>
            {text}
        </Link>
    );
};

export default RoundedButton;
