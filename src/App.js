import { useEffect, useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("primary");

  const toggleMode = () => {
    if (mode === "primary") {
      setmode("dark");
      document.body.style.backgroundColor = "rgb(22, 30, 40)";
      showAlert("Dark Mode is enabled", "success");
    } else {
      setmode("primary");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is enabled", "success");
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      {/* <Router> */}
      <Navbar
        title="TXTmold"
        mode={mode}
        toggleMode={toggleMode}
        aboutText="About"
      />
      <Alert alert={alert} />
      <div className="container my-5">
        {/* <Routes>
          {/* Use the element prop for components */}
        {/* <Route exact path="/about" element={<About />} /> */}
        {/* <Route exact path="/" */}
        {
          <TextForm
            showAlert={showAlert}
            mode={mode}
            heading="Enter the text to analyze"
          />
        }
        {/* />
        </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
