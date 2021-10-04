import React from 'react';
import { Link } from 'react-router-dom';
// import { getCategories } from '../redux/actions/categoryAction';

const MenuBar = () => {

  return (
    <div className="menu_bar">
      <div className="list-group menu_list">
        <Link to="/admin/categories" className="list-group-item list-group-item-action">Կատեգորիաներ</Link>
        <Link to="/admin/team" className="list-group-item list-group-item-action">Մեր Թիմը</Link>
        <Link to="/admin/users" className="list-group-item list-group-item-action">Օգտատերեր</Link>
        <Link to="/admin/products" className="list-group-item list-group-item-action">Ապրանքներ</Link>
      </div>
    </div>
  )
}

export default MenuBar;
