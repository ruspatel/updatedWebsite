import React from 'react';
import { Link } from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Blogentry from './blogentry.js';
import {Redirect} from 'react-router-dom';



// function blog(){
//     var blogText = "";
//     return(
//         <div className="blogbox">
//             <div className="blog-entry">
//                 {/* <Link to="../blog">
//                 <div className="blog-entry-title">First Post</div>
//                 <div className="blog-entry-date">May 20th 2020</div>
//                 <div className="blog-entry-description">git commit "intial commit"</div>
//                 </Link> */}

//                 <blogentry title="First Post" date="May 20th 2020" description="hello world"/>
//             </div>
//             <div className="blog-entry">
//                 <div className="blog-entry-title">Second Post</div>
//                 <div className="blog-entry-date">May 20th 2020</div>
//                 <div className="blog-entry-description">Making this blog entry currently!</div>
//             </div>
//         </div>
//     );
// }

class blog extends React.Component{
    render(){
        return(
            <Router>
            <Switch>
            <div className="blogbox">
            <div className="blog-entry">
                    <Route exact path="/blogentry1" render={(props) => <Blogentry {...props} description={"No way this worked!"} />} />
                    <Link to="/blogentry1">
                    <div className="blog-entry-title">First Post</div>
                    <div className="blog-entry-date">May 20th 2020</div>
                    <div className="blog-entry-description">git commit "intial commit"</div>
                    </Link>

            </div>
            <div className="blog-entry">
                <div className="blog-entry-title">Second Post</div>
                <div className="blog-entry-date">May 20th 2020</div>
                <div className="blog-entry-description">Making this blog entry currently!</div>
            </div>
        </div>
        </Switch>
        </Router>
        );
    }
}


export default blog;