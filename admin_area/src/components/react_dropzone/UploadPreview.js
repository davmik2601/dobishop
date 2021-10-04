import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import SimpleFile1 from './SimpleFile1';
import { ReactSortable } from 'react-sortablejs';
import ReactFileReader from 'react-file-reader';
import { useDispatch, useSelector } from 'react-redux';
import { setProductFiles } from '../../redux/actions/addProductTempAction';

const UploadPreview = () => {


  const { addPrTemp } = useSelector(state => state);
  const [fileArr, setFileArr] = useState(addPrTemp.files);
  const dispatch = useDispatch();


  const handleFiles = files => {
    const arr = files.base64.map((item, idx) => ({id: Date.now()+idx, base64: item, file: files.fileList[idx]}));
    setFileArr(curr => [...curr, ...arr]);
  }

  const handleEnd = e => {
    // setFileArr(tmpArr);
  }

  const handleRemove = (id) => {
    setFileArr(fileArr.filter(f => f.id !== id))
  }

  useEffect(() => {
    dispatch(setProductFiles(fileArr));
  }, [fileArr])


  return (
    <div className="dropzone_parent">

      <ReactFileReader 
      fileTypes={[".jpg", ".png", ".jpeg", ".gif"]}
      handleFiles={handleFiles}
      multipleFiles={true}
      base64={true}
      name="files"
      >
        <button type="button" className="btn btn-outline-secondary upload">Upload</button>
      </ReactFileReader>


      <div className="upload_preview">
        <div className="main_image_preview">
          {fileArr[0] && <img src={fileArr[0].base64} alt="" /> }
        </div>
        <ReactSortable
          list={fileArr}
          setList={setFileArr}
          animation={150}
          // group="cards"
          onChange={(order, sortable, e) => {}}
          onEnd={e => {handleEnd(e)}}
          animation={200}
          delayOnTouchStart={true}
          delay={2}
          >
          {fileArr.map((item, idx) => (
            <SimpleFile1 key={idx} file={item} handleRemove={handleRemove} />
          ))}
        </ReactSortable>
      </div>
      
    </div>
  )
}

export default UploadPreview;
