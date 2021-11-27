import React, { useState } from "react";
import { Navigation } from "../components/Navigation";
import { ResultsHeader } from "../components/ResultsHeader";
import { SingleProduct } from "../components/SingleProduct";
import { useLocation } from "react-router-dom";
import { Footer } from "../components/Footer";


export const SingleProductPage = () => {
  const location = useLocation();
  const [product] = useState(location.state.pr);

  return (
    <>
      <Navigation />
      <ResultsHeader maintext={product.title} />
      <SingleProduct
        product={product}
        productimg={product.image}
        producttitle={product.title}
        productdesc={product.description}
        productprice={product.price}
      />
      <Footer />
    </>
  );
};
