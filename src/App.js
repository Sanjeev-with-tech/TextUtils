import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light'); 
  const[alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
        setAlert({
          msg: message,
          type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1000);
  }
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode';
      // },2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // },1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
    <BrowserRouter>
      {/* <Navbar title ="TextUtils"/> */}
      {/* <Navbar/> */}
      <Navbar title ="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
        <div className='container my-3'mode={mode}>
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact path="/"element={
              <TextForm showAlert={showAlert} heading = "Enter the text to analize below" mode={mode}/>
            }
            ></Route>
            {/* <About/> */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
