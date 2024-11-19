import Image from "next/image";

const MyStaffplanPreviewContainer: React.FC = () => {
    return (
        <div className="relative w-[100%] max-w-[555px] aspect-[8.5/5.5] ml-auto sm:-translate-y-12 rounded-lg">
            <Image
                src="/myStaffplanPreview.png"
                alt="Description of image"
                fill
                className="rounded-lg object-cover object-top pl-0 sm:pl-1 xl:pl-0"
            />
        </div>
    );
};

export default MyStaffplanPreviewContainer;

