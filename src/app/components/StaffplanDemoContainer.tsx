import Image from "next/image";
import RoundedButton from "./RoundedButton";

interface StaffplanDemoContainerProps {
    children?: React.ReactNode;
}

const StaffplanDemoContainer: React.FC<StaffplanDemoContainerProps> = ({ children }) => {
    return (
        <section className="min-h-[50vh] sm:min-h-screen flex flex-col items-center justify-between bg-demo-gradient pb-6">
            <h1 className="hidden sm:block text-huge font-bold mb-4">Try Staffplan!</h1>
            {children}
            <div className="relative w-full h-full px-4 aspect-[21/18] sm:aspect-[20/6.5] my-6 sm:my-0">
                <div className="relative w-full h-full rounded-lg">
                    <Image
                        src="/tryStaffplanPreview.png"
                        alt="Staffplan Demo"
                        fill
                        className="sm:block hidden rounded-lg object-cover"
                    />
                    <Image
                        src="/tryStaffplanMobilePreview.png"
                        alt="Staffplan Demo"
                        fill
                        className="sm:hidden block rounded-lg object-cover"
                    />
                </div>
            </div>
            <RoundedButton text="Sign me up!" variant="filled" size="large" href="https://staffplan.com/registrations/new" />
        </section>
    );
};

export default StaffplanDemoContainer;