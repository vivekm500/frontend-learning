import React, { createContext, useEffect, useState } from 'react'
import { getAllProductData } from '../api/ProductApi';

export const ProductDataContext =  createContext()

const ProductContext = (props) => {

  const [ProductData, setProductData] = useState([]);

  const setdata = async ()=>{
     setProductData(await getAllProductData())
  }

  const getFirstData = async (id) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);

    console.log(response.data);
  };

  useEffect(function () {
    setdata();
  }, []);


  return (
    <div>
      <ProductDataContext.Provider value={ProductData}>
        {props.children}
      </ProductDataContext.Provider>
    </div>
  )
}

export default ProductContext
