import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UploadPreview from '../components/react_dropzone/UploadPreview';
import SelectCategories from '../components/SelectCategories';
import { activateSelectCategories, addSelectCategories } from '../redux/actions/addProductTempAction';
import { addProduct } from '../redux/actions/productAction';

const AddProduct = () => {

  const { category, addPrTemp } = useSelector(state => state);
  const dispatch = useDispatch();
  const [prData, setPrData] = useState({
    name: 'Ականջակալ MX 360',
    price: '13000',
    count: '3',
    description: `Ձեր նախընտրած երաժշտությունն այսուհետ կարող եք վայելել սմարթֆոնով՝ Bluetooth-ի միջոցով, մի քանի ժամ անընդմեջ: 
    Այս ականջակալի առավելությունը ոչ միայն ձայնի որակն է, այն իր մեջ ներառում է նաև ռադիո և ունի SD քարտի հնարավորություն, 
    բացի այդ իր ծալվող հատկության շնորհիվ այն հեշտությամբ կարելի է նաև պայուսակում տեղավորել:
    Անկրկնելի ընկեր կլինի ճանապարհորդելիս, երբ ճամպրուկը լիքն է, իսկ երաժշտությունը՝ երկար ճանապարհի միակ ընկերը…`,
  });

  const handleRemoveSelected = (ctg) => {
    const arr = addPrTemp.selectedCategories.filter(item => item._id !== ctg._id);
    dispatch(addSelectCategories(arr));
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setPrData({...prData, [name]: value});
  }

  const handleSubmit = async (e) => {

    e.preventDefault();

    // Создаем коллекцию файлов:
    // var dt = new DataTransfer();
    // addPrTemp.files.forEach(item => {
    //   dt.items.add(item.file);
    // })
    // const files = dt.files;

    let formData = new FormData();

    // var imagedata = document.querySelector('input[type="file"]').files;
    // console.log(imagedata);
    // formData.append("files", imagedata);

    addPrTemp.files.forEach(item => {
      formData.append("files", item.file);
    })
    for(let key in prData) {
      formData.append(key, prData[key]);
    }
    addPrTemp.selectedCategories.forEach(item => {
      formData.append("categories", item);
    })
    
    dispatch(addProduct(formData));
  }

  return (
    <div className="page add_product_page">
      <h2>Նոր ապրանք</h2>

      {addPrTemp.active && <SelectCategories />}

      <form onSubmit={handleSubmit} encType="multipart/form-data">

        <div className="add_product_board">

          <div className="left">
            {/* <DropZoneComp /> */}
            <UploadPreview />
          </div>

          <div className="right">

              <div className="form-group">
                <label htmlFor="name">Անվանումը</label>
                <input 
                type="text" 
                className="form-control" 
                id="name" 
                defaultValue={prData.name}
                onChange={handleChange}
                name="name" />
              </div>

              <div className="form-group form-row">
                <div className="col-xl-3">
                  <button type="button" onClick={() => {dispatch(activateSelectCategories(true))}}
                  className="btn btn-warning btn-sm">
                    Ընտրել կատեգորիաներ
                  </button>
                </div>
                <div className="col-xl-9">
                  <div className="form_selected_ctgs">
                    {addPrTemp.selectedCategories.map(item => (
                      <div className="form_selected_ctg">
                        {item.name}
                        <span className="close" onClick={() => handleRemoveSelected(item)}>&times;</span>
                      </div>
                    ))}
                  </div>
                </div>
                
              </div>

              

              <div className="form-group form-row">
                <label htmlFor="price" className="col-form-label">Գինը (դրամ)</label>
                <div className="col-sm-2">
                  <input 
                  type="text" 
                  className="form-control" 
                  id="price" 
                  defaultValue={prData.price}
                  onChange={handleChange}
                  name="price" />
                </div>
                  <input className="col-sm-2 form-control text-center" value="դրամ (AMD)" disabled />
              </div>

              <div className="form-group form-row">
                <label htmlFor="count" className="col-form-label">Քանակը</label>
                <div className="col-sm-2">
                  <input 
                  type="text" 
                  className="form-control" 
                  id="count" 
                  onChange={handleChange}
                  defaultValue={prData.count}
                  name="count" />
                </div>
                  <input className="col-sm-2 form-control text-center" value="(հատ)" disabled />
              </div>

              <div className="form-group">
                <label htmlFor="description">Նկարագրություն</label>
                <textarea type="text" className="form-control" id="description"
                style={{
                  resize: "none",
                  minHeight: "300px", 
                  height: "auto",
                }} 
                defaultValue={prData.description}
                onChange={handleChange}
                name="description"
                />

              </div>

                
              <button type="submit" className="btn btn-primary">Ավելացնել</button>
          </div>

        </div>
      </form>
    </div>
  )
}

export default AddProduct;
