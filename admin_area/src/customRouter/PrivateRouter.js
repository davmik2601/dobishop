import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';


const PrivateRouter = ({component: Component, ...rest}) => {

  const { auth } = useSelector(state => state);

  return (
    <Route {...rest} render={
      props => {
        if(auth.token) {
          return <Component {...rest} {...props} />
        } else {
          return <Redirect to={
            {
              pathname: "/admin/login",
              // state: {
              //   from: props.location
              // }
            }
          } />
        }
      }
    } />
  )
  
  
  // auth.token ? <Route {...props} /> : <Redirect to="/admin/login" />
}

export default PrivateRouter;
