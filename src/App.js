import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './home/home';
import ContentDetail from './content-detail/contentDetail';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Router>
            <div className="col-md-12">
              <Route exact path="/" component={Home} />
              <Route path="/detail/:id" component={ContentDetail}/>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
