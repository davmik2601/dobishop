import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddCategory from '../components/AddCategory';
import AddSubCategory from '../components/AddSubCategory';
import { clearMessage } from '../redux/actions/alerts/messageAction';
import { clearValidationErrors } from '../redux/actions/alerts/validationErrorsAction';
import { deleteCategory, getCategories } from '../redux/actions/categoryAction';

const Categories = () => {

  const { category } = useSelector(state => state);
  const dispatch = useDispatch();
  const [subId, setSubId] = useState('')

  const handleDelete = (id) => {
    dispatch(deleteCategory(id));
  }

  const handleAddCategory = () => {
    dispatch(clearMessage("addCategory"));
    dispatch(clearValidationErrors("addCategory"));
  }

  const handleAddSub = (id) => {
    setSubId(subId ? '' : id);
  }

  const handleSubDelete = (id) => {
    console.log(id)
    dispatch(deleteCategory(id));
  }

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  
  return (
    <div className="page categories_page">
      <h2>
        Կատեգորիաներ 
        <button 
        className="btn btn-md btn-primary float-right  dropdown-toggle" 
        data-toggle="collapse" 
        data-target="#collapseOne"
        onClick={handleAddCategory}>
          Ավելացնել Հիմնական Կատեգորիա
        </button>
      </h2>
      
      <AddCategory />
      
      <div className="list-group categories_list">
        {category.categories && category.categories.map(ctg => (
          <div key={ctg._id} className="list-group-item list-group-item-action">

            <div className="main_categories">
              <h6>{ctg.name}</h6>
              <div className="category_list_item_menu mt-3">
                <span className="material-icons delete_icon" onClick={() => handleDelete(ctg._id)}>delete_outline</span>
                <span className="material-icons edit_icon">edit</span>
                <span className="material-icons add_icon" 
                data-toggle="collapse" 
                data-target={`#id-${ctg._id}`} 
                onClick={() => handleAddSub(ctg._id)}>
                  add
                </span>
              </div>
              {subId && subId === ctg._id &&
                <AddSubCategory parentId={`id-${ctg._id}`} />
              }
            </div>

            <div className="list-group subcategories_list">
              {ctg.subCategories.map(subctg => (
                <div key={subctg._id} className="list-group-item list-group-item-action">
                  {subctg.name}
                  <div className="category_list_item_menu">
                  <span className="material-icons delete_icon" onClick={() => handleSubDelete(subctg._id)}>delete_outline</span>
                  <span className="material-icons edit_icon">edit</span>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories;
