import React from 'react';
import Dropzone from 'react-dropzone';

const DropzoneComp = () => {

  const maxSize = 1048576;

  const onDrop = (acceptedFiles) => {
    console.log(acceptedFiles);
  }

  return (
    <div className="dropzone_parent text-center mt-5 p-2">
      <Dropzone 
        onDrop={ondrop}
        // accept="image/png, image/gif"
        accept="image/*"
        minSize={0}
        maxSize={maxSize}
        multiple
      >
        {({getRootProps, getInputProps, isDragActive, isDragReject, acceptedFiles, rejectedFiles}) => {
          // const isFileTooLarge = rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize;
          console.log(acceptedFiles, rejectedFiles)
          return (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
                {!isDragActive && 'Click here or drop a file to upload!'}
                {isDragActive && !isDragReject && "Drop it like it's hot!"}
                {isDragReject && "File type not accepted, sorry!"}
                {/* {isFileTooLarge && (
                  <div className="text-danger mt-2">
                    File is too large.
                  </div>
                )} */}
              <ul className="list-group mt-2">
                {acceptedFiles.length > 0 && acceptedFiles.map(acceptedFile => (
                  <li className="list-group-item list-group-item-success" style={{wordWrap: "break-word"}}>
                    {acceptedFile.name}
                  </li>
                ))}
              </ul>
            </div>
          )
        }}
      </Dropzone>
    </div>
  )
}

export default DropzoneComp;
