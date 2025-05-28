import axios from "axios";
import { useEffect } from "react";
import { SkeletonTheme } from 'react-loading-skeleton';
import { ToastContainer } from 'react-toastify';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ServiceCards from './components/ServicesCards/ServiceCards';
import Tecnology from './components/Tecnologies/Tecnology';
import { API_ENDPOINTS } from "./services/api";
import "./styles/Global.css";


function App() {

  useEffect(() => {
    axios.get(API_ENDPOINTS.SITE_SETUP)
      .then(res => {
        const siteName = res.data[0].name;
        document.title = `|| ${siteName}`
      })
      .catch(() => { document.title = "Fora do ar | Offline"})
  }, []);


  return (
    <div className="App">
      <SkeletonTheme>
        <ToastContainer autoClose={3000}/>
        <Header/>
        <Hero/>
        <Tecnology/>
        <ServiceCards/>
        <Contact/>
        <Footer/> 
      </SkeletonTheme>
    </div>
  )
}

export default App
