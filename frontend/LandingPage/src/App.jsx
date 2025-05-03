import { React } from 'react';
import { ToastContainer } from 'react-toastify';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ServiceCards from './components/ServicesCards/ServiceCards';
import Tecnology from './components/Tecnologies/Tecnology';
import "./styles/Global.css";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function App() {

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
