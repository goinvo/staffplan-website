import Image from "next/image";

const PeoplePreviewContainer: React.FC = () => {
    return (
        <div className="relative ml-auto w-[100%] sm:w-[90%] aspect-[8.5/5.5] sm:translate-y-14 py-4">
            <Image
                src="/peoplePreview.png"
                alt="Description of image"
                fill
                className="rounded-lg object-cover object-center"
            />
        </div>
    );
};

export default PeoplePreviewContainer;



