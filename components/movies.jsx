import React, {Component} from 'react';
import {Render} from 'react-dom';
import {getMovies} from './services/fakeMoviesService';

class Movies extends Component{
  // constructor(){
  //   this.state = {
  //     movies = getMovies()
  //   }
  // }
  Render(){
    return(<h1>Test</h1>
    )
  }
};

export default Movies;