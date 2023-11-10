// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";

import Navbar from "./Components/Navbar";
import TextF from "./Components/TextF";
import Alert from "./Components/Alert";

function App() {
  const [mode, setMode] = useState("light"); // whatever dark mode enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "	#042743";
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'TextUtils - Dark Mode';
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
      // document.title = 'TextUtils - Light Mode';
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        AboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextF
          showAlert={showAlert}
          heading="Enter your text for anaylize below"
          mode={mode}
        />

        
      </div>
    </>
  );
}

export default App;
