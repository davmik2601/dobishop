import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/alerts/Message';
import { login } from '../redux/actions/authAction';

const Login = () => {

  const [userData, setUserData] = useState({email: '', password: ''});
  // const {email, password} = userData;
  const { messages } = useSelector(state => state);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserData({...userData, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(userData));
  }


  return (
    <div className="login">
      <h1 className="login_title mb-4">Admin Panel</h1>
      <form onSubmit={handleSubmit}>
        { messages.messages && <Message /> }
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            name="email"
            onChange={handleChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="password" 
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="form-group form-check">
          <input 
            type="checkbox" 
            className="form-check-input" 
            id="remember" 
          />
          <label className="form-check-label" htmlFor="remember">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Login;
