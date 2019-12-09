import React, { Component } from 'react';
import { render } from 'react-dom';
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
      <div class="btn-group-vertical m-2" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-secondary">All Generes</button>
  <button type="button" class="btn btn-secondary">Middle</button>
  <button type="button" class="btn btn-secondary">Right</button>
</div>
      <div className="btn-group-vertical">
      
      </div>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById('root'));
