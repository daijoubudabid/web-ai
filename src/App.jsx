import { Hero } from "./Hero/Hero";
import { AiMade } from "./components/AiMade/AiMade";
import { BackToTop } from "./components/BackToTop/BackToTop";
import { Features } from "./components/Features/Features";
import { Footer } from "./components/Footer/Footer";
import { Gallery } from "./components/Gallery/Gallery";
import { GetStarted } from "./components/GetStarted/GetStarted";
import { GradientBg } from "./components/GradientBg/GradientBg";
import { Marquee } from "./components/Marquee/Marquee";
import { Navbar } from "./components/Navbar/Navbar";
import NewNavbar from "./components/Navbar/NewNavbar";
import { Testimonial } from "./components/Testimonial/Testimonial";

function App() {
  return (
    <div className="overflow-hidden">
      <GradientBg />
      {/* <Navbar /> */}
      <NewNavbar/>
      <Hero />
      <Gallery/>
      <Features/>
      <AiMade/>
      <Marquee/>
      <Testimonial/>
      <GetStarted/>
      <BackToTop/>
      <Footer/>
    </div>
  );
}

export default App;
