import React from 'react';
import { useDispatch } from 'react-redux';
import { clearMessage } from '../../redux/actions/alerts/messageAction';

const Message = ({data}) => {

  const dispatch = useDispatch();

  return (
    <div className={`message ${data.success ? "success_message" : "error_message" }`}>
      <span className="text">{data.message}</span>
      <span className="close" onClick={() => dispatch(clearMessage(data.title))}>&times;</span>
    </div>
  )
}

export default Message;
