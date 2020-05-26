import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, useRouteMatch, Route, match, Link} from 'react-router-dom';
import Entry from './entry.js';
import { withRouter } from "react-router";
import '../App.js';


function Projects(){
  const [name, updateName] = useState([
    {
      name: 'Harry Potter and the Prisoner of Azkaban'
    },
    {
      name: 'Harry Potter and the Goblet of Fire'
    }
  ]);

    return(
        
    <div>
        {/* <Router> */}
          <div>
            <Link to="/projects">
                <h1>Home</h1>
            </Link>
          
            <Link to="/topics"><h1>Topics</h1></Link>
            
            {/* <Link to="/projects/entry"><h1>Entry</h1></Link> */}

          <Link to={{
            pathname: "/projects/entry",
            state:{
              name: 'Harry Potter'
            } 
          }}><h1>Entry</h1></Link>

    <hr />
          </div>
        <Router>

        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/topics">
            <Topics />
          </Route>
          {/* <Route exact="true" path="/projects/entry" component={Entry}/> */}
        </Switch>

        </Router>
    </div>
    );
}

// function Projects(){
    
    
//     const [value, updateValue] = useState(1);

   

//    function rollDice(){
//         this.updateValue(1 * 6);
//       };



    

//     return(
        
//     <div>
//         <Router>
//       <div>
//             <Link to="/projects">
//                 <h1>Home</h1>
//             </Link>
          
//             <Link to="/topics"><h1>Topics</h1></Link>
            
//             {/* <Link to="/projects/entry"><h1>Entry</h1></Link> */}
//             <Link to="/projects/entry" onClick={rollDice}><h1>Entry</h1></Link>
//         <hr />
//       </div>



//         <Switch>
//           <Route exact path="/home">
//             <Home />
//           </Route>
//           <Route exact path="/topics">
//             <Topics />
//           </Route>
//           {/* <Route exact="true" path="/projects/entry" component={Entry}/> */}
//         </Switch>

//         </Router>
//         </div>
//     );
// }


function Home() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
}

function Topics(){
    return(
        <div>
            <h1>Topics</h1>
        </div>
    )
}

// function Entry(){
//     return(
//         <div>
//             <h1>entry1</h1>
//         </div>
//     )
// }

function Project(){
    console.log('on project1');
    return(
        <div>
            <h1>my first project</h1>
        </div>
    )
}

export default Projects;