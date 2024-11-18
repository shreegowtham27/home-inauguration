"use client";
import { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        try {
        const response = await fetch("/api/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setStatus("Message sent successfully!");
            setFormData({ name: "", message: "" });
        } else {
            throw new Error("Failed to send message.");
        }
        } catch (error) {
        setStatus("Error: " + error.message);
        }
    };

    return (
        <div className="py-12" style={{backgroundColor:"#006f5f"}}>
            <h2 className="text-center font-bold text-7xl py-5 pb-12">
                {/* 🌍 <span className="bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-transparent font-black">Shower Your Wishes....</span> */}
                ✨🏡 <span className="bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text text-transparent">Share Your Warm Blessings...</span>
            </h2>
            <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md p-8 py-18">
                <form onSubmit={handleSubmit} className="space-y-4 p-5">
                    <div className="relative mb-6">
                        <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">Name <svg width="7" height="7" className="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444" />
                            </svg>
                        </label>
                        <input type="text" id="default-search" className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none " placeholder="Name" required="" />
                    </div>

                    <div className="relative mb-6">
                        <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">Message <svg width="7" height="7" className="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444"></path>
                            </svg>
                        </label>

                        <div className="flex">
                            <div className="relative w-full">
                                <textarea className="block w-full h-40 px-4 py-2.5 text-base leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-2xl placeholder-gray-400 focus:outline-none resize-none" placeholder="Write a message..."></textarea>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="w-full h-12 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 rounded-full shadow-xs text-white text-base font-semibold leading-6">Send Message</button>
                </form>
                {status && (
                    <p className={`mt-4 text-center text-sm ${status.startsWith("Error") ? "text-red-500" : "text-green-500"}`}> {status} </p>
                )}
            </div>
        </div>

    );
};

export default ContactForm;
