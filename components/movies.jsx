import React, {Component} from 'react';
import {Render} from 'react-dom';
import {getMovies} from '../services/fakeMoviesService';

class movies extends Component{
  constructor(){
    this.state = {
      movies = getMovies()
    }
  }
  Render(){
    return(
      <table>
          <th>
          Title
          </th>
          <th>
          Genere
          </th>
          <th>
          Stock
          </th>
          <th>
          Rate
          </th>
        <tbody>
          <tr>
          </tr>
        </tbody>
      </table>
    );
  }
}

default export movies;