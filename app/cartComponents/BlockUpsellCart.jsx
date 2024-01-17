import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from "./productItem";

const BlockUpsellCart = () => {
  // Access the rangeValue from the upsellContent slice
  const rangeValue = useSelector(state => state.upsellContent.rangeValue);

  // Create an array of ProductItem components based on rangeValue
  const productItems = Array.from({ length: rangeValue }, (_, index) => (
    <ProductItem key={index} />
  ));

  return (
    <div style={{ display: "flex", flexDirection:"column", justifyContent: "center", alignItems:"center", marginTop:24 }}>
      <p style={{fontSize:20, fontWeight:"500"}}>Recommended for you!</p>
      {productItems}
    </div>
  );
};

export default BlockUpsellCart;
