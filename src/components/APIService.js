export default class APIService {

    static InsertArticle(body,token){
        return fetch('http://127.0.0.1:8000/api/articles/', {
            'method':'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':`Token ${token}`
            },
            body:JSON.stringify(body)
       }).then(resp=>resp.json())
    }

    static RegisterUser(body){

        return fetch('http://127.0.0.1:8000/api/rest-auth/registration/', {
            'method':'POST',
            headers: {
                'Content-Type': 'application/json'
               
            },
            body:JSON.stringify(body)
       }).then(resp=>resp.json())
    }

    static UpdateArticle(article_id,body,token){

        return fetch(`http://127.0.0.1:8000/api/articles/${article_id}/`, {
            'method':'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':`Token ${token}`
            },
            body:JSON.stringify(body)
       }).then(resp=>resp.json())

    }
}