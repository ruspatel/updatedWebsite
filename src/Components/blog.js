import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {BrowserRouter as Router, Switch, useRouteMatch, Route, match} from 'react-router-dom';
import Blogentry from './blogentry.js';
import '../App.js';


export default function Blog(){

   
    return (
        
            <div>

            <div className="blogbox">
            <div className="blog-entry">

                    <Link to="/blog/blogentry1">
                        <div className="blog-entry-title">First Post</div>
                        <div className="blog-entry-date">May 20th 2020</div>
                        <div className="blog-entry-description">git commit "intial commit"</div>
                        
                    </Link>

            </div>
            <div className="blog-entry">

                <Link to= "blog/blogentry2">
                    <div className="blog-entry-title">Second Post</div>
                    <div className="blog-entry-date">May 20th 2020</div>
                    <div className="blog-entry-description">Making this blog entry currently!</div>
                </Link>
            </div>
            
        </div>
        </div>
    );
}

// function Blogentry(){

//     let {blogId} = useParams();

//     return(
//         <div>
//             <h1 fontsize="300px">YAY</h1>
//             <div className="blog-entry-description">Hello World</div>
//         </div>
//     );
// }

// export default Blog;