import React from 'react';

const AdminLogin = () => {
  return (
    <div>
      <form className="admin_login_form">
        <h1>Admin Panel</h1>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email</small>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>

        {/* <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div> */}

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default AdminLogin;
