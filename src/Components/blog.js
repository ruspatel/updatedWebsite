import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {BrowserRouter as Router, Switch, useRouteMatch, Route, match} from 'react-router-dom';
import Blogentry from './blogentry.js';
import '../App.js';


export default function Blog(){

    let {path, url} = useRouteMatch();
   
    return (
        
            <div>
            {/* <Route path="/blog/blogentry1" render={(props) => <Blogentry {...props} description={"No way this worked!"} />} />
            <Route path="/blog/blogentry2" render={(props) => <Blogentry {...props} description={"second entry lets go!"} />} />
             */}

            {/* <Route path="/blog/blogentry2" render={(props) => <Blogentry {...props} description={"second entry lets go!"} />} /> */}
            

            {/* <Link to={`${url}/blogentry1`}>Rendering with React</Link> */}
            {/* <Route path={`${path}/firstblogentry`} component={firstblogentry} /> */}
            {/* <Route exact path="/blog/firstblogentry" component={firstblogentry} /> */}


            <div className="blogbox">
            <div className="blog-entry">

                    {/* <Link to={`${url}/blogentry1`}> */}
                    <Link to="/blog/blogentry1">
                        <div className="blog-entry-title">First Post</div>
                        <div className="blog-entry-date">May 20th 2020</div>
                        <div className="blog-entry-description">git commit "intial commit"</div>
                    </Link>

            </div>
            <div className="blog-entry">

                <Link to={`${url}/blogentry2`}>
                    <div className="blog-entry-title">Second Post</div>
                    <div className="blog-entry-date">May 20th 2020</div>
                    <div className="blog-entry-description">Making this blog entry currently!</div>
                </Link>
            </div>
            
        </div>
        <Switch>

        {/* <Route path={`${path}/:blogId`} render={(props) => <Blogentry {...props} description={"No way this worked!"} />} /> */}
        {/* <Route path={`${path}/:blogId`} render={(props) => <Blogentry {...props} description={"No way this worked!"} />}><Blogentry /></Route> */}
        {/* <Route path={`${path}/:blogId`} render={({routeProps}) => ( <div><h3>Hello World </h3></div>)}/> */}
        {/* <Route path={`${path}/:blogId`}><Blogentry /></Route> */}
        <Route path="/blog/blogentry1" component={Blogentry}/>
        
        
        </Switch>
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