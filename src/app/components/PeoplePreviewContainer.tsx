import Image from "next/image";

const PeoplePreviewContainer: React.FC = () => {
    return (
        <div className="relative mr-auto w-[100%] max-w-[555px] aspect-[8.5/5.5] sm:translate-y-12">
            <Image
                src="/peoplePreview.png"
                alt="Description of image"
                fill
                className="rounded-lg object-cover object-top pr-0 sm:pr-1 xl:pr-0"
            />
        </div>
    );
};

export default PeoplePreviewContainer;



