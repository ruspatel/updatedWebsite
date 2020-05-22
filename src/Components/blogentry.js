import React from 'react';
import '../App.css';
import { withRouter, useParams } from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Blog from './blog'




function Blogentry(){

    let {blogId} = useParams();
    console.log(blogId);

    return(
        <div>
            <h1>YAY</h1>
            <div className="blog-entry-description">Hello World</div>

        </div>
    );
}

// class Blogentry extends React.Component{
//     constructor(props) {
//         super(props);

//         this.state={
//             title: "",
//             date: "",
//             description: ""
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