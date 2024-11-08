import Image from "next/image";
import RoundedButton from "./RoundedButton";

interface StaffplanDemoContainerProps {
    children?: React.ReactNode;
}

const StaffplanDemoContainer: React.FC<StaffplanDemoContainerProps> = ({ children }) => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-between bg-demo-gradient pb-6">
            <h1 className="text-huge font-bold mb-4">Try Staffplan!</h1>
            {children}
            <div className="relative w-full max-w-[95vw] h-[auto] aspect-[16/9] mb-8 px-4">
                <Image
                    src="/image.png"
                    alt="Description of image"
                    fill
                    sizes="(max-width: 640px) 80vw, (max-width: 768px) 80vw, (max-width: 1024px) 70vw, 50vw"
                    className="rounded-lg object-cover"
                />
            </div>
            <RoundedButton text="Sign me up!" variant="filled" size="large" href="https://staffplan.com/sign_in" />
        </section>
    );
};

export default StaffplanDemoContainer;