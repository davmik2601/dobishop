import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activateSelectCategories, addSelectCategories } from '../redux/actions/addProductTempAction';
import { getCategories } from '../redux/actions/categoryAction';

const SelectCategories = () => {

  const dispatch = useDispatch();
  const { category, addPrTemp } = useSelector(state => state);

  const [selectedCtgs, setSelectedCtgs] = useState(addPrTemp.selectedCategories);

  const handleSelectCategory = (e, ctg) => {
    const a = selectedCtgs.find(item => item._id === ctg._id);
    if(a) {
      setSelectedCtgs(selectedCtgs.filter(item => item._id !== a._id));
    } else {
      setSelectedCtgs([...selectedCtgs, ctg]);
    }
  }
  const handleRemoveSelected = (e, ctg) => {
    setSelectedCtgs(selectedCtgs.filter(item => item._id !== ctg._id));
  }
  const handleConfirm = () => {
    dispatch(addSelectCategories(selectedCtgs));
  }
  const handleClose = () => {
    dispatch(addSelectCategories(selectedCtgs));
  }
  const handleRemove = () => {
    setSelectedCtgs([]);
    dispatch(addSelectCategories([]));
  }

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div className="select_categories">
      <span className="close" 
      style={{position: "absolute", right: "5px", top: "2px", color: "white", fontSize: "30px"}}
      onClick={handleClose}
      >
        &times;
      </span>
      <div style={{position: "relative", width: "100%", height: "100%"}}>
        <div className="selected_categories">
          {selectedCtgs.map(sCtg => (
            <div key={sCtg._id} className="selected_category bg-info">
              {sCtg.name}
              <span className="close" onClick={(e) => handleRemoveSelected(e, sCtg)}>&times;</span>
            </div>
          ))}
        </div>
        {category.categories && category.categories.map(ctg => (
          <div key={ctg._id} className="category_content">
            <div className={`category ${selectedCtgs.includes(ctg) ? "bg-warning" : "bg-transparent" }`} 
            onClick={(e) => handleSelectCategory(e, ctg)}>
              {ctg.name}
            </div>
            <div className="sub_category_content">
              {ctg.subCategories.map(sub => (
                <div key={sub._id} className={`sub_category ${selectedCtgs.includes(sub) ? "bg-warning" : "bg-transparent" }`} 
                onClick={(e) => handleSelectCategory(e, sub)}>
                  {sub.name}
                </div>
                ))}
            </div>
          </div>
        ))}
        <div className="footer">
          <button type="button" className="btn btn-outline-success" onClick={handleConfirm}>Հաստատել</button>
          <button type="button" className="btn btn-outline-danger" onClick={handleRemove}>Ջնջել</button>
        </div>
      </div>
    </div>
  )
}

export default SelectCategories;
