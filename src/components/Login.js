
import React from "react";
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';



function Login(){

    const [username,setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error,setError] = useState('')

    let navigate = useNavigate()

    const login = () => {
        fetch("http://127.0.0.1:8000/api/rest-auth/login/",{

        method:'POST',
        headers:{
           'Content-Type': 'application/json'
        },
        body:JSON.stringify({username,password})
        })
        .then(resp => resp.json())
        .then(result=>{
            if(result.key===undefined){
                setError("Invalid user name and password")
                return;
            }
            localStorage.setItem('mytoken',result.key)
            navigate('/articles')

        })
    }

    return (
           <div className="container p-5">
            <br></br>

            {error ?
            <div className="alert alert-warning alert-dismissable" role="alert">
                <p>{error}</p>

            </div> 
            :
            null
            }

            <div className="card text-center">
                <div className="card-header">
                    Please login here
                </div>
                <div className="card-body">
                    <div className="mb-3">
                        <input type='text' className='form-control' name="username" 
                        placeholder="Please Enter User Name" value={username}
                        onChange={evt=>setUsername(evt.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <input type='password' className='form-control' name="password" 
                        placeholder="Please Enter Password " value={password}
                        onChange={evt=>setPassword(evt.target.value)}/>
                    </div>
                    
                </div>
                <div className="card-footer text-muted">
                  <button onClick={login} className="btn btn-success btn-lg btn-block">Login</button>
                </div>
            </div>
           </div>
    
    )
}

export default Login