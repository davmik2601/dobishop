import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTeam } from '../redux/actions/userAction';

const Team = () => {

  const dispatch = useDispatch();
  const { users } = useSelector(state => state);

  useEffect(() => {
    dispatch(getTeam());
  }, []);


  return (
    <div className="page team_page">
      <h2>Մեր թիմը</h2>
      <div className="list-group user_list">
        {users.team && users.team.map(user => (
          <div key={user._id} className="list-group-item list-group-item-action">
            <div className="user_info">
              <div className="name">{user.name.first} {user.name.last}</div>
              <div className="dob">{user.dob}</div>
              <div className="phone">{user.phone}</div>
              <div className="email">{user.email}</div>
              <div className="role">{user.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team;
