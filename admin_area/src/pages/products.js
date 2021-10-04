import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {

  

  return (
    <div className="page products_page">
      <h2>
        Ապրանքներ 
        <Link
        to="/admin/addProduct" 
        className="btn btn-md btn-primary float-right" 
        data-toggle="collapse" 
        data-target="#collapseOne"
        // onClick={handleAddCategory}
        >
          Ավելացնել Նոր Ապրանք
        </Link>
      </h2>
    </div>
  )
}

export default Products;
