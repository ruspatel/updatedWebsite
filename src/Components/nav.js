import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function nav(){

    
    return(
        <div className="navbar">
            <Link exact="true" className="header-link" to="/about"><h1>About</h1></Link>
            <Link exact="true" className="header-link" to="/blog"><h1>Blog</h1></Link>
            <Link exact="true" className="header-link" to="/projects"><h1>Projects</h1></Link>
            <Link exact="true" className="header-link" to="/experience"><h1>Experience</h1></Link>
            <Link exact="true" className="header-link" to="/resume"><h1>Resume</h1></Link>
        </div>
    );
}



export default (nav);