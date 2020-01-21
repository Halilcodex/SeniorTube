import React from "react";

const VideoDetail = ({ selectedVideo }) => {
  if (!selectedVideo) {
    return (
      <div className="null-video ">
        <div className="ui active text loader">
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
