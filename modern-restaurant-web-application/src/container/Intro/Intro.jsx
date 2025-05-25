import React, { useEffect, useRef, useState } from "react";
import { RiPauseLine, RiPlayFill } from "react-icons/ri";

import { meal } from "../../constants/index";
import "./Intro.css";

const Intro = () => {
  const [isVidoePlaying, setIsVideoPlaying] = useState(false);
  const videoPlayer = useRef();
  useEffect(
    function () {
      if (isVidoePlaying === true) {
        videoPlayer.current.play();
      } else {
        videoPlayer.current.pause();
      }
    },
    [isVidoePlaying]
  );

  return (
    <section className="geritch__intro">
      <video muted src={meal} ref={videoPlayer}></video>
      <button type="button">
        {isVidoePlaying ? (
          <RiPauseLine
            color="#ffffff"
            size={24}
            onClick={() => setIsVideoPlaying(false)}
          />
        ) : (
          <RiPlayFill
            color="#ffffff"
            size={24}
            onClick={() => setIsVideoPlaying(true)}
          />
        )}
      </button>
    </section>
  );
};

export default Intro;
