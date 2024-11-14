import Image from "next/image"

const Chat: React.FC = () => {
    return (
        <div className="fixed bottom-5 right-5 bg-tiffany rounded-full w-20 h-20 flex items-center justify-center">
            <Image src="/chat.svg" width={45} height={45} alt="Chat image" />
        </div>)
}

export default Chat