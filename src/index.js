import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/vedio_list';
import VideoDetail from './components/vedio_detail';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyAjMe_hW10FFssalvwYkAEZkuDTjcvoqDs';



//Create a new component that should produce some HTML.
//*****************************************************
//=====>Function based component
//const App = () => {
//  return (
    //<div>
//      <SearchBar />
    //</div>
  //);
//}

//======>Class based component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
     };
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) =>  {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}

//Take this component generated HTML and put it on the page(in the DOM)
ReactDOM.render(<App />,document.querySelector('.container'));
