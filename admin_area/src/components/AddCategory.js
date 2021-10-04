import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearMessage } from '../redux/actions/alerts/messageAction';
import { clearValidationErrors } from '../redux/actions/alerts/validationErrorsAction';
import { addCategory } from '../redux/actions/categoryAction';
import Message from './alerts/Message';
import ValidError from './alerts/ValidError';

const AddCategory = () => {

  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const { messages, validation } = useSelector(state => state);

  const handleChange = (e) => {
    setName(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1));
    dispatch(clearMessage("addCategory"));
    dispatch(clearValidationErrors("addCategory"));
  }

  const handleClear = () => {
    setName('');
    dispatch(clearValidationErrors("addCategory"));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCategory({name}));
  }
  
  useEffect(() => {
    messages.addCategory && messages.addCategory.success && setName('');
  }, [messages.addCategory])


  return (
    <div className="accordion">
      <div className="form_parent add_category collapse mt-4" id="collapseOne" aria-labelledby="headingOne">
        <div>
          <form onSubmit={handleSubmit}>
            {messages.addCategory && <Message data={messages.addCategory} /> }
            <div className="form-group mt-2">
              <label htmlFor="name">Նոր կատեգորիայի անունը․</label>
              { validation.addCategory && <ValidError error={validation.addCategory.errors.name} /> }
              <div className="position-relative">
                <input 
                  type="text" 
                  className="form-control" 
                  id="name" 
                  name="name"
                  value={name}
                  onChange={handleChange}
                  />
                { name && <span className="input_clear" onClick={handleClear}>&times;</span> }
              </div>
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <button type="submit" className="btn btn-primary">Ավելացնել</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddCategory;
