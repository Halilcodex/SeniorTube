import React from "react";
import ContainerCard from "./ContainerCard";
import SearchCard from "./SearchCard";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  onVideoSearch = async searchTerm => {
    const response = await youtube.get("/search", {
      params: {
        q: searchTerm
      }
    });
    console.log(response.data.items);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };
  onVideoSelect = video => {
    console.log("App component", video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div>
        <h1 className="main-header">Video Search Application</h1>
        <ContainerCard>
          <SearchCard onVideoSearch={this.onVideoSearch} />
          <p className="centred">
            Max Number of videos as pre-defined is: {this.state.videos.length}
          </p>
          <div className="ui grid">
            <div className="ten wide column">
              <VideoDetail selectedVideo={this.state.selectedVideo} />
            </div>
            <div className="six wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </ContainerCard>
      </div>
    );
  }
}

export default App;
