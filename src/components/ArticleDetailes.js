
import React from "react";
import {useState,useEffect} from "react";
import {useParams,Link} from 'react-router-dom';

function ArticleDetails(props){

    const params= useParams()
    const [article ,setArticle] = useState({})
    const [req,setReq] = useState('')

    const token = localStorage.getItem('mytoken')

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/articles/${params.id}/`, {

        'method':'GET',
         headers: {
            'Content-Type': 'application/json',
            'Authorization':`Token ${token}`
  }
  })

  .then(resp => resp.json())
  .then(result => setArticle(result))
  .catch(error => console.log(error))

    },[params.id, token])

    useEffect (()=>{

        fetch('http://127.0.0.1:8000/api/rest-auth/user/', {

        'method':'GET',
         headers: {
            'Content-Type': 'application/json',
            'Authorization':`Token ${token}`
         }

    })
    .then(resp => resp.json())
    .then(result => setReq(result))
    .catch(error => console.log(error))


    },[token])


    const updateBtn = (article) => {
        props.updateBtn(article)
    
}



    return (
           <div className="container mt-5">
            <h2>{article.title}</h2>
            <h6>Published {article.date_create} by : { article.author}</h6>
            <br></br>
            <p>{article.content}</p>

   
            <div>

            <button className="btn btn-danger mx-3 mt-3">Delete</button>
           <Link to='/update'> <button onClick={() => updateBtn(article)} className="btn btn-success mx-3 mt-3">Update</button></Link>
           </div> 
          
        </div>

    )
}

export default ArticleDetails