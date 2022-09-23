import React, {useState} from "react"
import APIService from "../components/APIService";
import { useNavigate } from "react-router-dom";




function Register() {

    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password1,setPassword1] = useState('')
    const [password2, setPassword2] = useState('')

    let navigate = useNavigate()

    const register =() =>{
        APIService.RegisterUser({username,email,password1,password2})
        .then(()=>{
            navigate('/')
        })
        .catch(error=>console.log(error))
    }


    return (
        <div className="contianer mt-5 p-5">

              <div className="card text-center">
                <div className="card-header">
                    Register Account
                </div>
                <div className="card-body">
                    <div className="mb-3">
                        <input type='text' className='form-control' name="username" 
                        placeholder="Please Enter User Name" value={username}
                        onChange={evt=>setUsername(evt.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <input type='email' className='form-control' name="email" 
                        placeholder="Please Enter email" value={email}
                        onChange={evt=>setEmail(evt.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <input type='password' className='form-control' 
                        placeholder="Please Enter Password " value={password1}
                        onChange={evt=>setPassword1(evt.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <input type='password' className='form-control' 
                        placeholder="Confirmed Password" value={password2}
                        onChange={evt=>setPassword2(evt.target.value)}/>
                    </div>
                    
                </div>
                <div className="card-footer text-muted">
                  <button onClick={register} className="btn btn-success btn-lg btn-block">Register</button>
                </div>
            </div>

        </div>

    )
}

export default Register