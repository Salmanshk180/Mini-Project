import React from 'react';

const VideoThumbnail = ({ imageURL, title }) => {
  return (
    <div className="video-thumbnail">
      <img src={imageURL} alt={title} className="thumbnail-image" />
      <div className="thumbnail-details">
        <h3 className="thumbnail-title">{title}</h3>
      </div>
    </div>
  );
};

export default VideoThumbnail;
