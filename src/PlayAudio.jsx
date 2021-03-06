import React, { useState, useEffect, useRef } from "react";
// import Musics from "../data/Musics";
// import Next from "../assets/next.svg";
// import Prev from "../assets/prev.svg";
// import Play from "../assets/play.svg";
// import Pause from "../assets/pause.svg";
// import Progress from "../components/Progress";
// import MusicTitle from "../components/MusicTitle";
// import Button from "../components/Button";
// import Container from "../components/Container";
//import Audio from "../models/Audio";

const PlayAudio = () => {
  const [state, setState] = React.useState({
    isPlaying: false,
    title: "audio",

    path: "./audio.mp3"
    /**
     * Define your state here
     */
  });

  const [currentTime, setCurrentTime] = React.useState(0);

  const audio = new Audio();
  audio.src = state.path;
  audio.addEventListener("timeupdate", function () {
    let time = this.currentTime;
    setCurrentTime(time);
    console.log(time);
  });

  const next = () => {
    // TODO Implement this function
  };
  const prev = () => {
    // TODO Implement this function
  };
  const play = () => {
    console.log(5);
    audio.play();
  };

  return (
    // <Container>
    <div>
      {/* <MusicTitle title={state.title} /> */}
      {/* <Progress currentTime={currentTime} /> */}
      <div className="row justify-content-center">
        {/* <Button data-testid="prev-btn" onClick={prev} src={Prev} /> */}
        <button
          data-testid={state.isPlaying ? "pause" : "play-btn"}
          onClick={play}
        //   src={state.isPlaying ? Pause : Play}
        />
        {/* <Button data-testid="next-btn" onClick={next} src={Next} /> */}
      </div>

    </div>
    // </Container>
  );
};

export default PlayAudio;

// function PlayAudio() {
    // const music = new Audio('audio.mp3');
    // const play = document.getElementById('play');
    // const volumeUp = document.getElementById('volume-up');
    // const volumeDown = document.getElementById('volume-down');
    // const mute = document.getElementById('mute');
    
    // ???????????????
    // Document.addEventListener('click', function(){
    //     console.log("audio")
    //   if(!music.paused){
    //     // Document.innerHTML ="??????";
    //     music.pause();
    //   }else{
    //     // Document.innerHTML = "??????";
    //     music.play();
    //   }
    // });
    
    // // ???????????????
    // volumeUp.addEventListener('click', function(){
    //   const volume = music.volume;
    //   if(volume < 1){
    //     music.volume = (volume * 10 + 1) / 10;
    //   }
    // });
    // volumeDown.addEventListener('click', function(){
    //   const volume = music.volume;
    //   if(volume > 0){
    //     music.volume = (volume * 10 - 1) / 10;
    //   }
    // });
    
    // // ?????????????????????
    // mute.addEventListener('click', function(){
    //   if(music.muted){
    //     music.muted = false;
    //     mute.innerHTML = '<i class="fas fa-volume-mute">';
    //   }else{
    //     music.muted = true;
    //     mute.innerHTML = '<i class="fas fa-volume-up"></i>';
    //   }
    // });
// ...
// const [audioBuffer, setAudioBuffer] = useState(null); 
// // ...
//   // ????????????????????????????????????????????????????????????
//   const audioContext = useRef(null);
 
//   // ?????????
//   useEffect(() => {
//     audioContext.current = new AudioContext();
//   }, []);
 
//   // ??????????????????????????????
//   const handleChangeFile = async (event) => {
//     const _file = event.target.files[0];
//     const _audioBuffer = await audioContext.current.decodeAudioData( // ??????
//       await _file.arrayBuffer()
//     );
//     setAudioBuffer(_audioBuffer); // ??????
//   };

//   const handleClickPlay = () => { 
//     // ?????????????????????????????????????????????????????????????????????????????????
//     if (audioContext.current.state === "suspended") {
//       audioContext.current.resume();
//     }
 
//     // ???????????????????????? ??? ???????????????
//     const sourceNode = audioContext.current.createBufferSource();
//     sourceNode.buffer = audioBuffer;
 
//     // ??????????????????
//     sourceNode.connect(audioContext.current.destination);
 
//     // ????????????
//     sourceNode.start();
//   };
 
//   return (
//     // <div>
//     //   <input type="file" onChange={handleChangeFile} />
//     //   <button onClick={handleClickPlay}>??????</button>
//     // </div>
//     <div>
//     <button id="play" class="btn btn-primary">??????</button>
//     <button id="volume-up" class="btn btn-success"><i class="fas fa-caret-up"></i></button>
//     <button id="volume-down" class="btn btn-success"><i class="fas fa-caret-down"></i></button>
//     <button id="mute" class="btn btn-warning"><i class="fas fa-volume-mute"></i></button>
//   </div>
//   );
// }
 
// export default PlayAudio;