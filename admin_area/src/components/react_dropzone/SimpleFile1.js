import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { removeProductFile } from '../../redux/actions/addProductTempAction';

const SimpleFile1 = ({file, handleRemove}) => {

  const dispatch = useDispatch();

  return (
    <div className="loaded_item" >
      <img src={file.base64} alt="" />
      <span className="delete_item" onClick={() => handleRemove(file.id)}>&times;</span>
    </div>
  )
}

export default SimpleFile1
