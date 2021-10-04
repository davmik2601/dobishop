import React from 'react';
import { useEffect } from 'react';
import ApiFactory from '../../utils/ApiFactory';

const MenuBar = () => {

  useEffect(() => {
    // ApiFactory.get('')
  }, []);

  return (
    <div className="menu_bar">
      <div className="card">
        <h6 className="card-header">Ըստ Տեսակների</h6>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MenuBar;
