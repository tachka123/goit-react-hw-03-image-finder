import React, { Component } from 'react';
import SearchBar from './ImgFinder/Searchbar/SearchBar';
import ImageGallery from './ImgFinder/ImageGallery/ImageGallery';
import Loader from './ImgFinder/SetLoader/SetLoader';
import './App.css';

class App extends Component {
  state = {
    Loading: false,
  };
  render () {
    const { Loading } = this.state;
    return (
      <div className='App'>
        <SearchBar />
        <ImageGallery />
        {Loading && <Loader />}
      </div>
    );
  }
}

export default App;
