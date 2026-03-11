import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

    const productData = useContext(ProductDataContext)

    const {productId} = useParams()
    // console.log(id)

    const selectedProduct = productData.find((elem)=>elem.id==productId)

    console.log(selectedProduct)

    if (!selectedProduct) {
      return <h1>Loading...</h1>;
    }

  return (
    <div>
      <div>
        <img src={selectedProduct.image} alt="" />
        <h2>{selectedProduct.title}</h2>
      </div>
    </div>
  );
}

export default ProductDetails
