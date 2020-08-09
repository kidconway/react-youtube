import React from "react";
import youtube from "../api/youtube";

import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearch = async query => {
    const res = await youtube.get(`/search`, {
      params: {
        q: query,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: KEY
      }
    });
    console.log(res.data.items);
    // this.setState({ images: res.data.results });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearch} />
        <div className="ui divider"></div>
      </div>
    );
  }
}

export default App;
