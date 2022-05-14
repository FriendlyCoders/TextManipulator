//import logo from './logo.svg';
//import { useState } from 'react/cjs/react.development';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter,
Routes,
Route,} from 'react-router-dom';

//const name="Pragati"
function App() {
  const [mode,setMode] = useState("light");
  const[alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000)  
  }
  const togglemode = ()=>{
    if(mode === 'dark')
    {
      setMode('light');
      document.body.style.backgroundColor ="white";
      showAlert("Light mode has been enabled","success");
      document.title = 'PlayWithText - Light Mode';
      /* setInterval(()=>{
        document.title = 'Install Project App now!!';
      },1500); */
    }
    else
    {
      setMode('dark');
      document.body.style.backgroundColor ="#042743";
      showAlert("Dark Mode has been enabled","success");
      document.title = 'PlayWithText - Dark Mode';
      /* setInterval(()=>{
        document.title = 'Install Project App now!!';
      },1500); */
    }
  }
  return (
    < >
      <BrowserRouter>
      <Navbar title="PlayWithText" aboutText="Modify" mode={mode} togglemode={togglemode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
          <Route exact path="/" element={<About showalert={showAlert} mode={mode}/>}/>
          <Route exact path="/text" element={<TextForm showalert={showAlert} heading="Enter the text below" mode={mode}/>}/>
      </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
