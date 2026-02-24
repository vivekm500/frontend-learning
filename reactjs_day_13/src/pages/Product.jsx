import React from 'react'
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <h1 className="text-white-700 text-5xl font-bold px-5 underline">
        Product Page
      </h1>

      <div className="flex gap-5 mt-5 px-5">
        <Link className="text-xl font-semibold underline cursor-pointer" to="/product/men">
          Men's Product Page
        </Link>
        <Link className="text-xl font-semibold underline cursor-pointer" to="/product/women">
          Women's Product Page
        </Link>

      </div>
    </div>
  );
}

export default Product
