import Navbar from "./scenes/Navbar";
import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import LineGradient from "./components/LineGradient";
import MySkills from "./scenes/MySkills";
import Projects from "./scenes/Projects";
import Testimonials from "./scenes/Testimonials";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import AnchorLink from "react-anchor-link-smooth-scroll";
function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("Home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar
        isTopOfpage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx:auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div className="mx:auto md:h-full">
        <MySkills
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </div>
      <LineGradient />
      <div className="mx:auto md:h-full">
        <Projects
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </div>
      <LineGradient />
      <div className=" mx:auto md:h-full">
        <Testimonials />
      </div>
      <LineGradient />
      <div className=" mx:auto md:h-full">
        <Contact
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </div>
      <LineGradient />
      <div className="flex md:justify-center justify-center">
        <AnchorLink
          className="bg-light-blue text-center hover:bg-pink-500 hover:border-yellow text-white font-semibold w-full transition duration-500"
          href="#home"
          onClick={() => setSelectedPage("home")}
        >
          Go to HomePage
        </AnchorLink>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

export default App;
