import React from 'react';
import '../App.css';
import { withRouter, useParams } from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Blog from './blog'
import './Blog.css';
import calendarIcon from './calendarIcon.png';



function blogentry(props){
    
    return(
        <div className="blog-entry-container">
            <div className="blog-entry-header">
                <div className="blogentry-title">{props.titleEntry}</div>
                <img class="calendar" src={calendarIcon}/>
                <div className="blogentry-date">{props.dateEntry}</div>
            </div>
            <div className="blog-entry-description">{props.descriptionEntry}</div>
        </div>
    );
}

// class Blogentry extends React.Component{
//     constructor(props) {
//         super(props);

//         this.state={
           
//         };

//         let {blogId} = useParams();
//     }

//     render(){
//         return( 
//             <div>
//                 <div className="blog-entry-description">{this.props.description}</div>
//             </div>
//         );
//     }
// }


export default blogentry;