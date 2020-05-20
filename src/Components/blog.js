import React from 'react';
import { Link } from 'react-router-dom';



function blog(){
    return(
        <div className="blogbox">
            <div className="blog-entry">
                <div className="blog-entry-title">First Post</div>
                <div className="blog-entry-date">May 20th 2020</div>
                <div className="blog-entry-description">git commit "intial commit"</div>
            </div>
            <div className="blog-entry">
                <div className="blog-entry-title">Second Post</div>
                <div className="blog-entry-date">May 20th 2020</div>
                <div className="blog-entry-description">Making this blog entry currently!</div>
            </div>
        </div>
    );
}

export default blog;