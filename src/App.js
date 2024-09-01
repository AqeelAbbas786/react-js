
import { useState } from 'react';
import './App.css';
import About from './components/About.mjs';
import Navbar from './components/Navbar.mjs';
import Textform from "./components/Textform.mjs";
import Alert from "./components/Alert.mjs";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


function App() {


  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode("light");
      document.body.style.backgroundColor = "white"
      showAlert("light Mode Is Enabled", "success")
      document.title = "Desi Food - light mode"
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "black"
      showAlert("Dark Mode Is Enabled", "success")
      document.title = "Desi Food - Dark mode"
      // setInterval(() => {
      //   document.title = "install Desi Food now"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Desi Food is Amazing"
      // }, 1500);
    }
  }
  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/About" element={<About showAlert={showAlert} mode={mode} toggleMode={toggleMode}/>}>
          </Route>
          <Route exact path="/Textform" element={<Textform showAlert={showAlert} mode={mode} toggleMode={toggleMode} />}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
