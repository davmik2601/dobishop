import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearMessage } from '../redux/actions/alerts/messageAction';
import { clearValidationErrors } from '../redux/actions/alerts/validationErrorsAction';
import { addSubCategory } from '../redux/actions/categoryAction';
import Message from './alerts/Message';
import ValidError from './alerts/ValidError';

const AddSubCategory = ({parentId}) => {

  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const { messages, validation } = useSelector(state => state);

  const handleChange = (e) => {
    setName(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1));
    e.target.style.height = e.target.scrollHeight+"px";
    dispatch(clearMessage("addCategory"));
    dispatch(clearValidationErrors("addSubCategory"));
  }

  const handleClear = () => {
    setName('');
    dispatch(clearValidationErrors());
  }

  // const handleClose = () => {
  //   setName('');
  //   dispatch(clearValidationErrors());
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addSubCategory({name, parent: parentId.split('-')[1]}));
  }
  
  useEffect(() => {
    messages.addSubCategory && messages.addSubCategory.success && setName('');
  }, [messages.addSubCategory])



  return (
    <div className="accordion">
      <div className="form_parent add_sub_category collapse mt-2" id={parentId} aria-labelledby="headingOne">
        <div>
          {/* <span className="close add_sub_category_close" onClick={handleClose}>&times;</span> */}
          <form onSubmit={handleSubmit}>
          {messages.addSubCategory && <Message data={messages.addSubCategory} /> }
            <div className="form-group">
              <label htmlFor="name">Ենթակատեգորիայի անունը․</label>
              { validation.addSubCategory && <ValidError error={validation.addSubCategory.errors.name} /> }
              <div className="position-relative">
                <textarea 
                  type="text" 
                  maxLength="50"
                  style={{
                    padding: ".1rem 1.5rem .3rem .3rem",
                    height: "35px",
                    // lineHeight: "20px",
                    overflow: "hidden",
                    resize: "none"
                    // textTransform: "capitalize",
                  }}
                  className="form-control" 
                  id="name" 
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
                { name && <span className="input_clear" onClick={handleClear}>&times;</span> }
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-sm">Ավելացնել</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddSubCategory;
