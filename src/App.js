import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Nav from './Components/nav.js';
import Blog from './Components/blog.js';
import About from './Components/about.js';
import Projects from './Components/projects.js';
import Experience from './Components/experience.js';

function App() {
  return (
    <Router>
    <Switch>
     <div className="App">

       <Route path ="/" component={Nav} />
       <Route exact path="/about" component={About}/>
       <Route exact path="/projects" component={Projects}/>
       <Route exact path="/blog" component={Blog}/>
       <Route exact path="/experience" component={Experience}/>

       
    </div>
    </Switch>
    </Router>

  );
}

export default (App);
