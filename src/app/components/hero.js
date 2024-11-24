"use client";

import CountdownTimer from "./timer";

export default function Hero() {
    return (
        <div id="#" className="hero min-h-screen flex items-center justify-center">
            <div className="hero-content text-center grid gap-6 px-4 sm:px-8">
                <div className="container">
                    <p className="py-6 font-extrabold font-drSugi bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                        You&apos;re Cordially Invited for the <br /> <br />
                        <b className="inline-block p-2 md:p-4 font-drSugi bg-gradient-to-r from-emerald-500 to-emerald-900 bg-clip-text text-transparent text-base sm:text-lg md:text-2xl lg:text-4xl">
                            House Warming Ceremony of our <span className="highlight-text text-emerald-800 px-1 sm:px-2 md:px-4">Very First Home</span> of upcoming Many...
                        </b>
                    </p>
                    <div className="bg-gradient px-4 sm:px-6 py-2 sm:py-4 rounded-lg">
                        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-extrabold rainbow-text background-gradient p-2 md:p-4 bg-green-800 border-0">
                            Shree Bhavanam
                        </h1>
                    </div>
                    <p className="mt-4 font-extrabold font-drSugi text-lg sm:text-xl md:text-2xl lg:text-4xl text-emerald-800">
                        on Thursday, December 5, 2024.
                    </p>
                </div>
                <div className="mt-6 sm:mt-8">
                    <CountdownTimer />
                </div>
            </div>
        </div>
    );
}
