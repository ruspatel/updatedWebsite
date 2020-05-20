import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Components/nav.js';

import Blog from './Components/blog.js';
import About from './Components/about.js';

function App() {
  return (
     <Router>
     <div className="App">
       <Nav />
       <Route path="/about" component={About} />
       <Route path="/blog" component={Blog}/>

    </div>
    </Router>

  );
}

export default App;
