import React, { Component } from 'react';
import { render } from 'react-dom';
import {Movies} from './components/movies.jsx';
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <React.Fragment>
      <div className="container">
      <div className="row">
      <div className="btn-group-vertical m-2" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-secondary">All Generes</button>
        <button type="button" className="btn btn-secondary">Action</button>
        <button type="button" className="btn btn-secondary">Comedy</button>
        <button type="button" className="btn btn-secondary">Thriller</button>
      </div>
      <Movies />
      </div>
      </div>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById('root'));
