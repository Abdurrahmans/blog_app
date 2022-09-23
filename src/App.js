import './App.css';
import {useState,useEffect} from 'react';
import ArticleList from './components/ArticleLIst';
import Navbar from './components/Navbar';
import Login from './components/Login';
import {Routes,Route} from 'react-router-dom';
import ArticleDetails from './components/ArticleDetailes';
import {useNavigate} from 'react-router-dom'
import AddArticle from './components/AddArticle';
import Register from './components/Register';
import UpdateArticle from './components/UpdateArticle';

function App() {

const [articles,setArticles] = useState([]) 
const [editArticle,setEditArticle] = useState('') 


const token = localStorage.getItem('mytoken')
let navigate = useNavigate()

useEffect(()=> {
  fetch("http://127.0.0.1:8000/api/articles/", {

   'method':'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token ${token}`

  }
  })
  .then(resp => resp.json())
  .then(result => setArticles(result))

  .catch(error =>
    console.log(error)
    )
  

},[token])

useEffect(() => {
  if(!token) {
    navigate('/')
    return;
  }

  navigate('/articles')

},[token])

const InsertArticle =(article) =>{

  const new_article = [...articles, article]
  setArticles(new_article)
}

const updatedData=(article)=>{
  const new_article = article.map(myarticle=>{
    if ( myarticle.id===article.id){
      return article
    }
    else{
      return myarticle
    }
  })
  setArticles(new_article)

}
const updateBtn=(article)=>{
  setEditArticle(article)

}


  return (
    <div>
      <Navbar></Navbar>
      
      <Routes>
        <Route path='/' element={<Login/>}>
        </Route>
        <Route path='articles' element={ <ArticleList articles = {articles}></ArticleList>}>
        </Route>
        <Route path='/articles/:id' element={<ArticleDetails updateBtn={updateBtn} />}>
        </Route>
        <Route path='/add' element={<AddArticle InsertArticle={InsertArticle}/>}></Route>

        <Route path='/login' element={<Login/>}></Route>

        <Route path='/register' element={<Register/>}></Route>

        <Route path='/update' element={<UpdateArticle article={editArticle} updatedData={updatedData}/>}></Route>


      </Routes>
     
    </div>
  );
}

export default App;
