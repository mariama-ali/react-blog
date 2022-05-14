import { useState } from "react"
import { Link } from "react-router-dom"
import "./register.css"
import axios from "axios";

export default function Register() {
  const [error, setError] = useState(false)
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [email, setEmail] = useState(" ");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false)
    try {
      const res = await axios.post("/auth/register", {
        username, password, email
      })
      res.data && window.location.replace("/login")
    } catch (err) {
      setError(true)
    }
  }
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form onSubmit={handleSubmit} className="registerForm">
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter your username..." onChange={e => setUsername(e.target.value)} />
        <label>Email</label>
        <input className="registerInput" type="email" placeholder="Enter your email..." onChange={e => setEmail(e.target.value)} />
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your passoword..." onChange={e => setPassword(e.target.value)} />
        <button type="submit" className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">  
            <Link to="/login" className="link">Login</Link>
      </button>
      {error && <span className="error">Something went wrong!!</span>}
    </div>
  )
}
