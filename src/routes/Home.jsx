import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
import AboutImg from "./../assets/2.jpg";

function Home() {
  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero"
        heroImg= {AboutImg}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        btnClass="show"
        buttonText="Travel Plan"
        url="/"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
