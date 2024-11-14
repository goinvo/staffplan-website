import Image from "next/image";

const MyStaffplanPreviewContainer: React.FC = () => {
    return (
        <div className="relative mr-auto w-[100%] sm:w-[90%] aspect-[8.5/5.5] sm:-translate-y-4 rounded-lg">
            <Image
                src="/myStaffplanPreview.png"
                alt="Description of image"
                fill
                className="rounded-lg object-cover object-top"
            />
        </div>
    );
};

export default MyStaffplanPreviewContainer;

