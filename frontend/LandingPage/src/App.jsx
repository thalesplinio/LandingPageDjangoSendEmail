import { React } from 'react';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header/Header';
import "./styles/Global.css";

function App() {

  return (
    <div className="App">
      <ToastContainer autoClose={3000}/>
      <Header/>
    </div>
  )
}

export default App
