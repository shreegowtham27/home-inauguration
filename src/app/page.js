import Hero from "./components/hero";
import NavBar from "./components/NavBar";
import MapsComponent from "./components/maps"
import Venue from "./components/venue";
import ContactForm from "./components/contact"

export default function Home() {
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
