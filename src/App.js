import React, { Component } from 'react';

import ShowContainer from "./ShowContainer.js"
import SideBar from "./SideBar.js"

import './App.css';

const tvShowURL = "http://api.tvmaze.com/shows";

class App extends Component {

  state = {
    shows: [],
    selectedShow: {}
  }

  async componentDidMount() {
    // fetch(tvShowURL)
    //   .then(response => response.json())
    //   .then(shows => this.setState({ shows }))
    
    const result = await fetch(tvShowURL);
    const shows = await result.json();
    this.setState( { shows: shows } );
  }

  setSelectedShow = (show) => {
    this.setState({ selectedShow: show });
  }

  desetSelectedShow = () => {
    this.setState({ selectedShow: {} })
  }
  
  render() {
    // const shows = this.state.shows;
    const { shows, selectedShow } = this.state;

    return (
      <div className="App">
        <ShowContainer shows={shows} setSelectedShow={this.setSelectedShow} />
        <SideBar show={selectedShow} desetSelectedShow={this.desetSelectedShow} />
      </div>
    );
  }
}

export default App;
