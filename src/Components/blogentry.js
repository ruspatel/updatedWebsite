import React from 'react';
import '../App.css';
import { withRouter, useParams } from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Blog from './blog'




function Blogentry(){

    console.log('hello i am on blogentry');
    // let {blogId} = useParams();
    // console.log(blogId);

    return(
        <div>
            <h1>YAY</h1>
            <h1>blogId</h1>
            <div className="blog-entry-description">Hello World</div>
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


export default Blogentry;