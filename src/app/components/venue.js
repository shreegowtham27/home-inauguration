
const Venue = () => { 
    return (
        <div
            id="venue"
            style={{ backgroundColor: "#205d67" }}
            className="py-12 flex flex-col items-center text-center min-h-fit leading-8 px-4 sm:px-8 lg:px-16"
        >
            <h2 className="font-bold text-orange-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl p-3 sm:p-5">
                🏡 <span className="bg-gradient-to-r from-lime-300 to-slate-400 bg-clip-text text-transparent font-black">Venue</span>
            </h2>
            <div className="items-center p-6 sm:p-8 text-center leading-7 sm:leading-8 md:leading-9">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-lato font-black bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text text-transparent">
                    Shree Bhavanam
                </h3>
                <p className="text-base sm:text-lg md:text-xl">MKK JS Avenue</p>
                <p className="text-base sm:text-lg md:text-xl">Then Thirupathi Naal Road,</p>
                <p className="text-base sm:text-lg md:text-xl">Jadayampalayam Po,</p>
                <p className="text-base sm:text-lg md:text-xl">Mettupalayam - 641 302</p>
            </div>
        </div>
    );
};

export default Venue;
