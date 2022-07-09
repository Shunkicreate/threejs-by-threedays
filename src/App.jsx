// import logo from './logo.svg';
import "./App.css";
import ThreeMain from "./ThreeMain";
import React, { useEffect, useRef } from "react";

function App() {
  // let time = Clock
  // console.log(time)
  const audioContext = useRef(null);
  useEffect(() => {
    audioContext.current = new AudioContext();
  }, []);
  document.addEventListener("click", audioPlay);
  function audioPlay() {
    document.getElementById("audio").play();
    document.removeEventListener("click", audioPlay);
  }
  return (
    <div className="App">
      <ThreeMain></ThreeMain>
    </div>
  );
}

export default App;
