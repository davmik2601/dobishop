import React from 'react'

const NotFound = () => {
  return (
    <div className="not_found position-relative" style={{minHeight: '100%'}}>
      <h2 className="position-absolute text-secondary" 
      style={{top: '40%', left: '50%', transform: 'translate(-50%, -50%)'}}>
        404 | NotFound
      </h2>
    </div>
  )
}

export default NotFound
