
import React,{useState,useEffect} from "react";
import APIService from "../components/APIService";
import {useNavigate} from 'react-router-dom'


function UpdateArticle(props){

    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')

    const token = localStorage.getItem('mytoken')

    let navigate = useNavigate()

    useEffect(()=>{
        setTitle(props.article.title)
        setContent(props.article.content)
    },[props.article])
    

    const updateArticle =()=>{
        APIService.UpdateArticle(props.article.id,{title,content},token)
        .then(resp => {
            props.updatedData(resp)
            navigate('/articles')
        })
        .catch(error=>console.log(error))

    }

    return (
        <div className="contianer mt-5">


            <h2 className="text-center">Update Article</h2>

          
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
                <button onClick={updateArticle} className="btn btn-success">Update Article</button>
            </div>
            
        </div>
    )
}

export default UpdateArticle