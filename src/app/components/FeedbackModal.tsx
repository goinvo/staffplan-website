'use client';

import { useState } from "react";

const FeedbackModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <button
                onClick={openModal}
                className="text-start"
            >
                Feedback
            </button>
            {isModalOpen && (
                <div className="fixed inset-0 z-50 w-screen">
                    <div className="flex min-h-full p-4 text-center justify-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden w-1/2 rounded-xl bg-white text-left shadow-xl transition-all border-2 border-gray-300">
                            <div className="bg-white px-10 pb-10 my-2">
                                <div className="flex justify-end pb-2">
                                    <button
                                        className="rounded-full flex items-center"
                                        onClick={closeModal}
                                    >
                                        <div className="text-tiffany w-8 h-8">✖</div>
                                    </button>
                                </div>
                                <div>
                                    <iframe
                                        className="airtable-embed w-full h-133 bg-transparent border border-gray-300"
                                        src="https://airtable.com/embed/appE6EvqnfyQTmfcG/paggYwwsljwfF9Jdm/form"
                                        width="100%"
                                        height="533"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default FeedbackModal;
