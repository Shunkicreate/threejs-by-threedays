import React, { useState, useEffect, useRef } from "react";
 
function PlayAudio() {
// ...
const [audioBuffer, setAudioBuffer] = useState(null); 
// ...
  // 再描画の影響を受けない不変なオブジェクト
  const audioContext = useRef(null);
 
  // 初期化
  useEffect(() => {
    audioContext.current = new AudioContext();
  }, []);
 
  // イベントコールバック
  const handleChangeFile = async (event) => {
    const _file = event.target.files[0];
    const _audioBuffer = await audioContext.current.decodeAudioData( // 追加
      await _file.arrayBuffer()
    );
    setAudioBuffer(_audioBuffer); // 追加
  };

  const handleClickPlay = () => { 
    // 自動再生ブロックにより停止されたオーディオを再開させる
    if (audioContext.current.state === "suspended") {
      audioContext.current.resume();
    }
 
    // ソースノード生成 ＋ 音声を設定
    const sourceNode = audioContext.current.createBufferSource();
    sourceNode.buffer = audioBuffer;
 
    // 出力先に接続
    sourceNode.connect(audioContext.current.destination);
 
    // 再生発火
    sourceNode.start();
  };
 
  return (
    <div>
      <input type="file" onChange={handleChangeFile} />
      <button onClick={handleClickPlay}>再生</button>
    </div>
  );
}
 
export default PlayAudio;