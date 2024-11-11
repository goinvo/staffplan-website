import Image from "next/image";

const PeoplePreviewContainer: React.FC = () => {
    return (
        <div className="absolute lg:top-8 right-1 sm:right-4 w-[100%] sm:w-[90%] h-[90%] w-[100%] sm:h-[95%] aspect-[5/2] rounded-lg ">
            <Image
                src="/peoplePreview.jpg"
                alt="Description of image"
                fill
                sizes="(max-width: 640px) 100vw, 
                   (max-width: 768px) 80vw, 
                   (max-width: 1024px) 70vw, 
                   (max-width: 1280px) 60vw, 
                   50vw"
                className="rounded-lg object-contain sm:object-contain lg:object-fill"
            />
        </div>
    );
};

export default PeoplePreviewContainer;



