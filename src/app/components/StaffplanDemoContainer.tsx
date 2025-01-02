import Image from "next/image";
import RoundedButton from "./RoundedButton";

interface StaffplanDemoContainerProps {
    children?: React.ReactNode;
}

const StaffplanDemoContainer: React.FC<StaffplanDemoContainerProps> = ({ children }) => {
    return (
        <section className="flex flex-col items-center justify-between bg-demo-gradient pb-6 px-4">
            <div className="sm:flex justify-center h-[60px] mt-32">
                <h1 style={{ fontWeight: 'bold', fontSize: '2.5rem', }}>Design your work future.</h1>
            </div>
            {children}
            <div className="relative w-full h-full px-8 aspect-[21/19.4] max-w-[1238px] sm:aspect-[21/7] my-6 sm:mb-6 mt-10">
                <Image
                    src="/tryStaffplanPreview.png"
                    alt="StaffPlan Demo"
                    fill
                    className="sm:block hidden rounded-lg object-cover px-1 xl:px-0"
                />
                <Image
                    src="/tryStaffplanMobilePreview.png"
                    alt="StaffPlan Demo"
                    fill
                    className="sm:hidden block rounded-lg object-cover"
                    style={{ marginTop: '20px' }}
                />
            </div>
            <RoundedButton text="Sign up!" variant="filled" size="large" href="https://app.staffplan.com/registrations/new" />
        </section >
    );
};

export default StaffplanDemoContainer;
