"use client";

import React , {useEffect} from "react";

const MapsComponent = () => {
    useEffect(() => {
        // Find the element with the class name "place-name"
        const elements = document.getElementsByClassName("place-name");
        if (elements.length > 0) {
          elements[0].outerHTML = "Shree Bhavanam"; 
        }
      }, []); 
  return (
    <div
        id="maps"
        style={{ backgroundColor: "#4aa391" }}
        className="p-6 sm:p-8 lg:p-12 text-center"
    >
    <h2 className="font-bold text-4xl sm:text-5xl lg:text-7xl text-orange-200 pt-5 pb-8">
        🌍{" "}
        <span className="bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-transparent font-black">
            Venue Assistance Here!
        </span>
    </h2>
    <div
        className="p-4"
        style={{
            border: "2px solid #ddd",
            borderRadius: "10px",
            overflow: "hidden",
            width: "100%",
            maxWidth: "600px",
            margin: "0 auto",
            height: "400px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
    >
        <iframe
            title="Google Maps"
            src="https://maps.google.com/maps?width=500&amp;height=700&amp;hl=en&amp;q=11%C2%B016'51.6%22N%2076%C2%B059'17.7%22E+(Shree%20Bhavanam)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            style={{ border: "0", width: "100%", height: "100%" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
    <div className="flex flex-col py-5">
        <a className="text-lg underline py-3" href="https://maps.app.goo.gl/Hz8JaRwcrW8FemHX8" target="_blank noopener">Click to Open Maps</a>
        <a className="text-lg py-3" href="tel:+919677502587">Call : 9677502587</a>
    </div>
  </div>
  );
};

export default MapsComponent;
