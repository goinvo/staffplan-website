import Image from "next/image";
import RoundedButton from "./RoundedButton";

interface StaffplanDemoContainerProps {
    children?: React.ReactNode;
}

const StaffplanDemoContainer: React.FC<StaffplanDemoContainerProps> = ({ children }) => {
    return (
        <section className="flex flex-col items-center justify-between bg-demo-gradient pb-6 px-4">
            <div className="relative hidden sm:flex justify-center w-[270px] h-[50px] mt-32">
                <Image src="/tryStaffplan.png"
                    fill
                    className="object-contain" alt="Try Staffplan!" />
            </div>
            {children}
            <div className="relative w-full h-full px-8 aspect-[21/19.4] max-w-[1238px] sm:aspect-[21/7] my-6 sm:mb-6 mt-10">
                <Image
                    src="/tryStaffplanPreview.png"
                    alt="Staffplan Demo"
                    fill
                    className="sm:block hidden rounded-lg object-cover px-1 xl:px-0"
                />
                <Image
                    src="/tryStaffplanMobilePreview.png"
                    alt="Staffplan Demo"
                    fill
                    className="sm:hidden block rounded-lg object-cover"
                />
            </div>
            <RoundedButton text="Sign me up!" variant="filled" size="large" href="https://staffplan.com/registrations/new" />
        </section >
    );
};

export default StaffplanDemoContainer;