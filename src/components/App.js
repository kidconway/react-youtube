import React from "react";
import youtube from "../api/youtube";

import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onSearch("jimi hendrix");
  }

  onSearch = async query => {
    const res = await youtube.get(`/search`, {
      params: {
        q: query
      }
    });
    this.setState({
      videos: res.data.items,
      selectedVideo: res.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearch} />
        <div className="ui divider"></div>
        <div className="ui grid">
          <div className="ui row">
            <div className="ten wide column">
              <VideoDetail
                video={this.state.selectedVideo}
                className="ten wide column"
              />
            </div>
            <div className="six wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
                className="six wide column"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
