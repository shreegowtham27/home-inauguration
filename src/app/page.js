"use client";

import React , {useEffect} from "react";

import Hero from "./components/hero";
import NavBar from "./components/NavBar";
import MapsComponent from "./components/maps"
import Venue from "./components/venue";
import ContactForm from "./components/contact"

export default function Home() {
  useEffect(() => {
    // Wait until the DOM is loaded
    const placeNameElement = document.querySelector(".place-name");
    if (placeNameElement) {
      // Replace content with your custom name
      placeNameElement.textContent = "Custom Place Name";
    }
  }, []);
  return (
    <div>
      <NavBar/>
      <Hero/>
      {/* <VenueDetails/> */}
      {/* <div className="flex flex-row"> */}
        <Venue/>
        <MapsComponent/>
        <ContactForm/>
      {/* </div> */}
    </div>
  );
}
