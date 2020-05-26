import React, {useState} from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route, useRouteMatch, withRouter} from 'react-router-dom';

import Nav from './Components/nav.js';
import Blog from './Components/blog.js';
import About from './Components/about.js';
import Projects from './Components/projects.js';
import Experience from './Components/experience.js';
import Example from './Components/example.js';
import Entry from './Components/entry.js';

function App() {
  const [name, updateName] = useState([
    {
      name: 'Harry Potter and the Prisoner of Azkaban'
    },
    {
      name: 'Harry Potter and the Goblet of Fire'
    }
  ]);
  return (
    <Router>
    <Switch>
     <div className="App">

       <Route path ="/" component={Nav} />
       <Route exact="true" path="/about" component={About}/>
       <Route exact="true" path="/projects" component={Projects}/>
       <Route exact="true" path="/blog" component={Blog}/>
       <Route exact="true" path="/experience" component={Experience}/>
       <Route exact="true" path="/resume" component={Example}/>
       {/* <Route exact="true" path="/projects/entry"  component={Entry}/> */}
       <Route path="/projects/entry" render={(props) => <Entry {...props} name={name[0].name} />} />

       
    </div>
    </Switch>
    </Router>

  );
}


export default withRouter(App);
