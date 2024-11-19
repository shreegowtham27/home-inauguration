"use client";

import CountdownTimer from "./timer"

export default function Hero(){
    return(
        <div id="#" className="hero min-h-screen">
            {/* //bg-gradient-to-r from-emerald-500 to-emerald-900 */}
            <div className="hero-content text-center">
                <div className="container text-4xl">
                <p className="py-6 font-extrabold py-3 font-drSugi bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                    You&apos;re Cordially Invited for the <br/> <br/> <b className="p-1 px-8 font-drSugi py-3 p-4 bg-gradient-to-r from-emerald-500 to-emerald-900 bg-clip-text">House Warming Ceremony  of our <span className="highlight-text text-emerald-800 px-4">Very First Home</span> of upcoming Many...</b>
                </p><br/>
                <div className="bg-gradient px-6 py-4 rounded-lg">
                    <h1 className="text-9xl font-extrabold rainbow-text background-gradient p-4 bg-green-800 border-0 font-bold">Shree Bhavanam</h1>
                </div>
                <br/>
                <p className="font-extrabold font-drSugi text-4xl text-emerald-800">on Thursday, December 5, 2024.</p>
                </div>
                <div>
                <CountdownTimer/>
                </div>
            </div>
        </div>
    )
}