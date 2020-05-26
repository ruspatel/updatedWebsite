import React from 'react';
import '../App.css';
import { withRouter, useParams } from 'react-router-dom';
import {BrowserRouter as Router, Switch, useRouteMatch, Route, match, Link} from 'react-router-dom';
import Blog from './blog'
import Project from './projects';




function entry(props){
    console.log('IT WORKS');

    return(
        <div>
            <h1>YAY</h1>
            <h1>YAY</h1>
            <h1>YAY</h1>
            <h1>YAY</h1>
            <h1>YAY</h1>

            <div className="blog-entry-description">{props.name}</div>
            <div className="blog-entry-description">{props.date}</div>

        </div>
    );
}

// class entry extends React.Component{

//     constructor(props){
//         super(props);
//     }
    
//     render(){
        
//             return(
//                 <div>
//                     <h1>YAY</h1>
//                     <h1>YAY</h1>

//                     <div className="blog-entry-description">{this.props.location.state}</div>
//             </div>
//             );
//         }
// }



export default entry;