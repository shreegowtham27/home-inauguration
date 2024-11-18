
const Venue = () => { 
    return (
        <div style={{backgroundColor:"#00a360"}} className="p-12 flex flex-col text-center min-h-fit leading-8">
            <h2 className=" font-bold text-orange-200 text-7xl p-5">
                🏡 <span className="bg-gradient-to-r from-lime-300 to-slate-400 bg-clip-text text-transparent font-black">Venue</span>
            </h2>
            <div className="items-center p-8 text-center leading-8">
                <h3 className="text-4xl font-lato font-black bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text text-transparent">Shree Bhavanam</h3>
                <p>MKK JS Avenue</p>
                <p>Then Thirupathi Naal Road,</p>
                <p>Jadayampalayam Po,</p>
                <p>Mettupalayam - 641 302</p>
            </div>
        </div>
    );
};

export default Venue;
