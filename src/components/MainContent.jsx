import React, { useState, useEffect } from "react";
import { videoData } from "../data/videoData";
import VideoGrid from "./VideoGrid";


const MainContent = ({ searchTerm = "", activeCategory = "All"  }) => {
  const [filteredVideos, setFilteredVideos] = useState(videoData);

  // Filter videos based on category and search term
  useEffect(() => {
    let results = videoData;
    
    // Filter by category
    if (activeCategory !== "All") {
      results = results.filter(video => video.category === activeCategory);
    }
    
    // Filter by search term if provided
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      results = results.filter(
        video => 
          video.title.toLowerCase().includes(term) || 
          video.channel.toLowerCase().includes(term)
      );
    }
    
    setFilteredVideos(results);
  }, [activeCategory, searchTerm]);

  return (
    <div className="pl-56 pt-14 min-h-screen bg-black">
      <div className="p-4">
        <VideoGrid videos={filteredVideos} />
      </div>
    </div>
  );
};

export default MainContent;