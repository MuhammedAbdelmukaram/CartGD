import React from 'react';
import { useSelector } from 'react-redux';
import CounterComponent from "./counterComponent";

const CartItem = () => {
  // Use useSelector to access the cartTextColor state from Redux
  const cartTextColor = useSelector(state => state.designContent.cartTextColor);
  const strikethroughPricesChecked = useSelector(state => state.designContent.strikethroughPricesChecked);


  // Style for the text elements
  const textStyles = {
    color: cartTextColor,
  };

  return (
    <div style={{height:"fit-content"}}>
      <div style={{ display: "flex", padding: "20px 30px", borderBottom: '1px solid rgba(0, 0, 0, .1)' }}>
        <div id="leftSide" style={{ marginTop: 10 }}>
          <div id="imageContainer">
            <img
              src="https://cdn.shopify.com/s/files/1/0642/9435/5203/products/campstool-1.jpg?v=1651950743&height=176"
              alt="productImg"
              style={{ width: "100%", height: "auto", maxHeight: 88, maxWidth: 88 }}
            />
          </div>
        </div>
        <div id="rightSide" style={{ width: "100%", marginLeft: 20, marginTop: 10 }}>
          <div id="upperSection" style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
            <div id="productHeading">
              <p style={textStyles}>Placeholder Product</p>
              <p style={textStyles}>Size: Medium</p>
            </div>
            <div id="trashIcon">
              <span>X</span>
            </div>
          </div>
          <div id="lowerSection" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div id="quantityPicker" style={{ }}>
              <CounterComponent/>
            </div>
            <div id="texts">
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <div style={{ display: "flex" }}>

                  {strikethroughPricesChecked && (
                    <div>
                      <p style={{...textStyles, fontSize:16, textDecoration:"line-through", marginRight:8 }}>$80</p>
                    </div>
                  )}
                  <div>
                    <p style={{...textStyles, fontSize:18, fontWeight:500 }}>$46.99</p>
                  </div>

                </div>
                <div style={{marginTop:6}}>
                  <p style={{marginRight:8, fontSize:20, fontWeight:'600', color:"#1a5603"}}>(Save $36.00)</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
