
import React from "react";
import {useState} from 'react';
import APIService from '../components/APIService'
import {useNavigate} from 'react-router-dom';


function AddArticle(prps){

    const [title,setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [content,setContent] = useState('')
    const [error,setError] = useState('')

    let navgate = useNavigate()

    const token = localStorage.getItem('mytoken')

    const addArticle = () =>{

        if(title ===" " || content === ""){
            setError("Please add ed all fileds")
            return;

        }

        APIService.InsertArticle({author,title,content}, token)
        .then(result =>{
            prps.InsertArticle(result)
            navgate('/articles')
        })


    }

    return (
        <div className="container mt-5 p-5">
              

            {error ?
                <div className="alert alert-warning alert-dismissable" role="alert">
                    <p>{error}</p>

                </div> 
                :
                null
            }


            <h2 className="text-center">Add Article</h2>

            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Enter Author name"
                value={author} onChange={evt=> setAuthor(evt.target.value)}
                 />
            </div>


            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Enter title here"
                value={title} onChange={evt=> setTitle(evt.target.value)}
                 />
            </div>

            <div className="mb-3">
                <textarea type="text" className="form-control" rows="5"
                value={content} onChange={evt=> setContent(evt.target.value)}
                 />
            </div>
            <div className="mb-3">
                <button onClick={addArticle} className="btn btn-success">Add Article</button>
            </div>
          
        </div>
    )
}

export default AddArticle