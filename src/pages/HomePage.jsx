import React,{useState} from "react";
import styles from "../styles";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Do from "../components/Do";
import Services from "../components/Services";
import GuideHeader from "../components/GuideHeader";
import Guide from "../components/Guide";
import Clients from "../components/Clients";
import CampaignHeader from "../components/CampaignHeader";
import Campaigns from "../components/Campaigns";
import Nav from "../components/Nav";
import ImageSlider from "../components/ImageSlider";
import NewImageSlider from "../components/NewImageSlider";
import Footer from "../components/Footer";
import Pramotion from "../components/Pramotion";
import Studio from "../components/Studio";
import CaseStudy from "../components/CaseStudy";
import FooterSlider from "../components/FooterSlider";
import Cords from "../components/Cords";
import Demo from "../components/Demo";
import { FaArrowUp } from 'react-icons/fa';
const HomePage = () => {

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 200); // Show the button when scrolling down 200 pixels
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Add event listener to handle scroll events
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className=" w-full overflow-hidden relative bg-white">
      <div className={`   ${styles.flexCenter} w-full`}>
        <div className={`${styles.boxWidth} `}>
          <div className="fixed top-0 block w-full z-50    bg-white">
          <Nav />
          </div>
          
          <div >
            <Hero />
          </div>
        </div>
      </div>

      <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`} id="about">
          <About />
        </div>
      </div>

      <div id="services" className={` `}>
        <Do />
      </div>

      <div  >
        <NewImageSlider />
      </div>

      <div id="pramotion" className="pramotion">
        <Pramotion />
      </div>
      <div id="cords" className="cords">
        <Cords />
      </div>
      <div id="demo" className="demo">
        <Demo />
      </div>
      <div id="casestudy" className="casestudy">
        <CaseStudy />
      </div>
      <div id="studio" className="studio">
        <Studio />
      </div>

      {/* <div className='FooterSlider' id="Footerslider">
          <FooterSlider/>
          </div> */}
      <div id="footerslider" className="footerslider">
        <FooterSlider />
      </div>
      <div id="footer" className="footer">
        <Footer />
      </div>

      <button
      className={`fixed right-4 bottom-4 p-3 rounded-full bg-gray-800 text-white shadow-lg transition-opacity ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </button>

    </div>
  );
};

export default HomePage;
