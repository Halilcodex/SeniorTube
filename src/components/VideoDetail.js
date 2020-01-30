import React from "react";
import logo from "../android-chrome-512x512.png";

const VideoDetail = ({ selectedVideo }) => {
  if (!selectedVideo) {
    return (
      <div className="null-video ">
        <div className="ui active text loader">
          <img className="logo" src={logo} alt="senior tube" />
          <br />
          Waiting for you to make a search
        </div>
      </div>
    );
  }

  return (
    <div>
      <iframe
        src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
        title={selectedVideo.snippet.title}
        className="video-detail"
      ></iframe>
    </div>
  );
};

export default VideoDetail;
