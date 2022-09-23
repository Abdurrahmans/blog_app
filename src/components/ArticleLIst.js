
import React from "react";
import { Link } from "react-router-dom";

function ArticleList(props){

    return (
        <div>
            <div>
                {props.articles && props.articles.map(article => {
                    return (
                    <div key={article.id} className='container mt-5'>
                        <span className='badge rounded-pill bg-success'>Author: {article.author}</span>
                        <h2><Link to = {`/articles/${article.id}`} className='link-style'>{article.title}</Link></h2>
                    </div>
                    ) 
                })}
            </div>
        </div>
    )
}

export default ArticleList