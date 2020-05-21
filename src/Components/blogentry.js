import React from 'react';
import '../App.css';



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
        // this.updateText = this.updateText.bind(this);
        // this.addItem = this.addItem.bind(this);
        // this.deleteItem = this.deleteItem.bind(this);
    }
    // updateText = () =>{
    //     this.setState({title: this.props.title,
    //                    date: this.props.date,
    //                    description: this.props.description});
    // };

    
    render(){
        return( 
            // <div>
            //     <div className="blog-entry-title">{this.props.title}</div>
            //     <div className="blog-entry-date">{this.props.date}</div>
            //     <div className="blog-entry-description">{this.props.description}</div>
            // </div>
            <div>
                <div className="blog-entry-description">{this.props.description}</div>
            </div>
        );
    }
}


export default Blogentry;