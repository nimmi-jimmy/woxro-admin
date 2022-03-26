import React,{useState} from 'react'
import { TabTitle } from '../utils/GeneralFunctions';
import {CardMain,TextDir,Button,Sub,Main} from './LoginElements'

const Login = () => {

    const [loginInput, setLogin] = useState({
        email: '',
        password: '',
    });

    const handleInput = (e) => {
        e.persist();
        setLogin({...loginInput, [e.target.name]: e.target.value});
    }

    const loginsubmit = (e) => {
        e.preventDefault();

        const data = {
            email: loginInput.email,
            password: loginInput.password
        }  
        axios.post(`api/login`, data).then(res => {

        });
    }

    TabTitle('Admin Login');
  return (
    <Main>
    <CardMain>
        <h1>Login</h1>
        <TextDir>
            <label>Username</label>
            <input placeholder="Enter Username" onChange={handleInput} value={loginInput.email} type="email"></input>
        </TextDir>
        <TextDir>
            <label>Password</label>
            <input placeholder="Enter Password" onChange={handleInput} value={loginInput.password} type="password"></input>
        </TextDir>
        <br></br>

        <Sub>
            Forgot password?
        </Sub>

        <br></br>
        <Button onClick={loginsubmit}>
            Submit
        </Button>
    
    </CardMain>
    </Main>
  )
}

export default Login