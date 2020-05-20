import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


function nav(){

    
    return(
        <div className="navbar">
                <Link className="header-link" to="/about"><h1>About</h1></Link>
                <Link className="header-link" to="/blog"><h1>Blog</h1></Link>
                <Link className="header-link" to="/projects"><h1>Projects</h1></Link>
                <Link className="header-link" to="/experience"><h1>Experience</h1></Link>
                <h1>Resume</h1>
        </div>
    );
}

export default nav;