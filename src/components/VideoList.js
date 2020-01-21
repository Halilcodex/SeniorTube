import React from "react";
import VideoCard from "./VideoCard";

const VideoList = ({ videos, onVideoSelect }) => {
  const videoList = videos.map(video => {
    return (
      <VideoCard
        key={video.id.videoId}
        video={video}
        onVideoSelect={onVideoSelect}
      />
    );
  });

  return (
    <div>
      <div className="ui selection list">{videoList}</div>
    </div>
  );
};

export default VideoList;
