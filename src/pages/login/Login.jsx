import axios from "axios";
import { useContext, useRef } from "react"
import { Link } from "react-router-dom"
import { Context } from "../../context/Context";
import "./login.css"

export default function Login() {
  const userRef  = useRef();
  const passswordRef = useRef();
  const { dispatch, isFetching} = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type: "LOGIN_START"});
    try{
      const res = await axios.post('/auth/login', {
        username: userRef.current.value,
        password: passswordRef.current.value,
      });
      dispatch({type: "LOGIN_SUCCESS", payload: res.data});
    }catch(err){
      dispatch({type: "LOGIN_FAILURE"});
    }
  };
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form onSubmit={handleSubmit} className="loginForm">
        <label>Username</label>
        <input className="loginInput" type="text" placeholder="Enter your username..." ref={userRef}/>
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your passoword..." ref={passswordRef}/>
        <button type="submit" disabled={isFetching} className="loginButton">Login</button>
      </form>
      <button className="loginResgisterButton">
        <Link to="/register" className="link">
          Register
        </Link>
      </button>
    </div>
  )
}
