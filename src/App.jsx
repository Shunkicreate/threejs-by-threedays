// import logo from './logo.svg';
import "./App.css";
import ThreeMain from "./ThreeMain";
import Clock from "./Clock";
import React, { useEffect, useRef } from "react";
import PlayAudio from "./PlayAudio";

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
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <PlayAudio></PlayAudio>
      <Clock></Clock>
      <audio id="audio" controls loop src="./audio.mp3"></audio>
      <ThreeMain></ThreeMain>
    </div>
  );
}

export default App;
