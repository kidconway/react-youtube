import React, { useState, useEffect } from "react";

import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

import useVideos from "./hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("jimi hendrix");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui divider"></div>
      <div className="ui grid">
        <div className="ui row">
          <div className="ten wide column">
            <VideoDetail video={selectedVideo} className="ten wide column" />
          </div>
          <div className="six wide column">
            <VideoList
              onVideoSelect={setSelectedVideo}
              videos={videos}
              className="six wide column"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
