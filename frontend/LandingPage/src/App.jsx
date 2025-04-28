import { React } from 'react';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import "./styles/Global.css";

function App() {

  return (
    <div className="App">
      <ToastContainer autoClose={3000}/>
      <Header/>
      <Hero/>
    </div>
  )
}

export default App
