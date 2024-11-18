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
    <div id="maps" style={{backgroundColor:"#4aa391"}} className="p-12 text-center">
      <h2 className=" font-bold text-orange-200 text-7xl pt-5 pb-8">
        🌍 <span className="bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-transparent font-black">Venue Assistance Here!</span>
      </h2>
      <div
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
        className="p-4"
      >
        <iframe
          title="Google Maps"
        //   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.094603536907!2d144.95605521553208!3d-37.81720957975156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xb130a3330e3b13cf!2sMelbourne%20Central!5e0!3m2!1sen!2sau!4v1696448190321!5m2!1sen!2sau"
          src="https://maps.google.com/maps?width=500&amp;height=400&a
       │ mp;hl=en&amp;q=11%C2%B016'51.6%22N%2076%C2%B059'17.7%22E+(Shree%20Bhava
       │ nam)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          style={{ border: "0", width: "100%", height: "100%" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default MapsComponent;
