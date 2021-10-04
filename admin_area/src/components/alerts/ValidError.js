import React from 'react';

const ValidError = ({error}) => {
  return (
    <>
      { error ? <div className="validation_error">{error}</div> : null }
    </>
  )
}

export default ValidError;
