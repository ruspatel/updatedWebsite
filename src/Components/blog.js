import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {BrowserRouter as Router, Switch, useRouteMatch, Route} from 'react-router-dom';
import Blogentry from './blogentry.js';
import '../App.js';


function Blog(){

    let {path, url} = useRouteMatch();
   
    return (
        <Switch>

            {/* <Route path="/blog/blogentry1" render={(props) => <Blogentry {...props} description={"No way this worked!"} />} />
            <Route path="/blog/blogentry2" render={(props) => <Blogentry {...props} description={"second entry lets go!"} />} />
             */}

            {/* <Route path="/blog/blogentry2" render={(props) => <Blogentry {...props} description={"second entry lets go!"} />} /> */}
            


            {/* <Link to={`${url}/rendering`}>Rendering with React</Link> */}


            <div className="blogbox">
            <div className="blog-entry">

                    <Link to={`${url}/blogentry1`}>
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
        {/* <Route path={`${path}/:blogId`} render={(props) => <Blogentry {...props} description={"No way this worked!"} />} /> */}
        {/* <Route path={`${path}/:blogId`} render={(props) => <Blogentry {...props} description={"No way this worked!"} />}><Blogentry /></Route> */}
        <Route path={`${path}/:blogId`}><Blogentry /></Route>


        </Switch>
    );

}

function Topic(){
    let { topicId } = useParams();

    return(
        <div>
            <h1>Hey</h1>
            <h3>{topicId}</h3>
        </div>
    );
}


export default Blog;