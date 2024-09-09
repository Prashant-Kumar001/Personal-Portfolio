import React,{useEffect} from 'react'
import Header from './components/Header'
import Home from './components/Home'
import './App.css'
import Work from './components/Work'
import TimeLine from './components/TimeLine'
import Service from './components/Service'
import Connect from './components/Contact'
import Footer from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Testimonial from './components/Testimonial'
import toast, { Toaster } from 'react-hot-toast';
const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 600, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
  }, []);
  return (
    <>
      <Header />
      <Home />
      <Work />
      <TimeLine />
      <Service />
      <Testimonial/>
      <Connect/>
      <Footer/>
      <Toaster />
    </>
  )
}

export default App