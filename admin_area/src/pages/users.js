import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';

const Users = () => {

  const [text, setText] = useState('');
  // const dispatch = useDispatch();
  // const { messages } = useSelector(state => state);

  // const handleClear = () => {
  //   setText('');
  //   // dispatch(clearValidationErrors());
  // }

  const handleChange = (e) => {
    setText(e.target.value);
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(addCategory({name}));
  }


  return (
    <div className="page users_page">
      <h2>Օգտատերեր</h2>

      <div className="search_users mt-4">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input 
            className="form-control"
            type="text"
            autoFocus
            onChange={handleChange}
            placeholder="Search . . ." />
            <button className="btn btn-outline-success">Որոնել</button>
          </div>
        </form>
      </div>

      <div className="search_results mt-4">
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Անունը</th>
              <th scope="col">Ծննդյան Ամսաթիվը</th>
              <th scope="col">էլ․ Հասցե</th>
              <th scope="col">Հեռախոս</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users
