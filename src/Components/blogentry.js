import React from 'react';
import '../App.css';
import { withRouter } from 'react-router-dom';




// function blogentry(){

//     super(props);
//     return(
//         <div>
//             <div className="blog-entry-title">{props.title}</div>
//             <div className="blog-entry-date">May 20th 2020</div>
//             <div className="blog-entry-description">git commit "intial commit"</div>
//         </div>
//     );
// }

class Blogentry extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            title: "",
            date: "",
            description: ""
        };
    }
    
    
    render(){
        return( 
            <div>
                <div className="blog-entry-description">{this.props.description}</div>
            </div>
        );
    }
}


export default withRouter(Blogentry);