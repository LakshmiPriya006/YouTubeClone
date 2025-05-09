import React from "react";
import { CheckCircle } from "lucide-react";

const VideoCard = ({ video }) => {
  const handleClick = () => {
    console.log(`Clicked on: ${video.title} by ${video.channel}`);
    // Here you would typically navigate to the video page
  };

  return (
    <div 
      className="cursor-pointer transition-transform hover:scale-[1.02]" 
      onClick={handleClick}
    >
      {/* Thumbnail with duration */}
      <div className="relative mb-2">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-48 object-cover rounded-lg"
        />
        <div className="absolute bottom-2 right-2 px-1 py-0.5 bg-black bg-opacity-80 text-white text-xs font-medium rounded">
          {video.duration}
        </div>
      </div>
      
      {/* Video info section */}
      <div className="flex">
        {/* Channel image */}
        <div className="mr-3">
          <img 
            src={video.channelImage} 
            alt={video.channel}
            className="w-9 h-9 rounded-full object-cover"
          />
        </div>
        
        {/* Title and metadata */}
        <div className="flex-1">
          {/* Title - line clamp to 2 lines */}
          <h3 className="text-white font-medium text-sm mb-1 line-clamp-2">
            {video.title}
          </h3>
          
          {/* Channel name with verified badge if needed */}
          <div className="flex items-center text-gray-400 text-xs">
            {video.channel}
            {video.verified && (
              <CheckCircle className="w-3 h-3 ml-1 text-gray-400" />
            )}
          </div>
          
          {/* Views and upload date */}
          <div className="text-gray-400 text-xs">
            {video.views} • {video.uploadDate}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;