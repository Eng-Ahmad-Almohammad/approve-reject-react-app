import React from 'react';



const CommentDetali = function(props){
    return(
        <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={props.image} />
                </a>

                <div className="content">
                    <a href="/" className="author">{props.author}</a>



                    <div className="metadata">
                        <span className="date">{props.date}</span>
                    </div>

                    <div className="text">
                        {props.comment}
                    </div>
                </div>
            </div>
    )
}

export default CommentDetali;