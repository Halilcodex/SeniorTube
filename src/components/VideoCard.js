import React from "react";

const VideoCard = ({ video, onVideoSelect }) => {
  return (
    <div
      onClick={() => {
        onVideoSelect(video);
      }}
      className="video-card item"
    >
      <img
        className="ui image"
        alt={video.snippet.title}
        src={video.snippet.thumbnails.default.url}
      />
      <div className="content">
        <div id="image-title" className="header">
          {video.snippet.title}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
