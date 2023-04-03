import { useState, useRef } from "react";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const refVideo = useRef(null);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    isPlaying ? refVideo.current.pause() : refVideo.current.play();
    setIsPlaying(nextIsPlaying);
  }

  return (
    <>
      <button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>
      <video
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        ref={refVideo}
        width="250"
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}
