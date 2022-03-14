import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video(props) {
  const videoRef = useRef(null);
  const { video } = props;

  // to play and pause video
  const [playing, setPlaying] = useState(false);
  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        ref={videoRef}
        onClick={onVideoPress}
        className="video-player"
        src={video.url}
      ></video>
      {/* video footer */}
      <VideoFooter
        channel={video.channel}
        description={video.description}
        song={video.song}
      />
      {/* video sidebar */}
      <VideoSidebar
        likes={video.likes}
        messages={video.messages}
        shares={video.shares}
      />
    </div>
  );
}

export default Video;
