import React, { useState } from "react";
import "./App.css";
import Background from "./components/Background";
import Footer from "./components/Footer";
import MainContainer from "./components/MainContainer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  document.body.style.background = darkMode ? "#171823" : "#FAFAFA";

  return (
    <>
      <Background darkMode={darkMode} />
      <MainContainer darkMode={darkMode} setDarkMode={setDarkMode} />
      <Footer darkMode={darkMode}/>
    </>
  );
}

export default App;
