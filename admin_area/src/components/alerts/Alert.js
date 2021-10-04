import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearAlert } from '../../redux/actions/alerts/alertAction';

const Alert = () => {

  const { alert } = useSelector(state => state);
  const dispatch = useDispatch();
  const today = new Date(); 

  return (
    <>
    {alert.message && 
      <div 
      className="alert toast show text-light"
      style={{ background: alert.success ? "green" : "red" }}
      role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header bg-transparent text-light">
          <strong className="mr-auto">Success { alert.success +'' } </strong>
          <small className="text-light">
            {`${today.getDate()}/${today.getMonth()}/${today.getFullYear()}, ${today.getHours()}:${today.getMinutes()}`}
          </small>
            <span aria-hidden="true" className="text-light ml-2 close" type="button" 
            data-dismiss="toast" aria-label="Close" onClick={() => {dispatch(clearAlert())}}>&times;</span>
        </div>
        <div className="toast-body">
          { alert.message }
        </div>
      </div>
    }
    </>
  )
}

export default Alert;
