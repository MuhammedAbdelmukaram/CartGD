import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DiscountCart from "./DiscountCart";
import TrustBadgesCart from "./trustBadgesCart";

const CheckoutCart = () => {
  const cartAccentColor = useSelector(state => state.designContent.cartAccentColor);
  const buttonColor = useSelector(state => state.designContent.buttonColor);
  const buttonTextColor = useSelector(state => state.designContent.buttonTextColor);
  const buttonHoverColor = useSelector(state => state.designContent.buttonTextHoverColor);
  const cartTextColor = useSelector(state => state.designContent.cartTextColor); // Added cartTextColor

  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const trustBadgesPosition = useSelector(state => state.trustBadgesContent.position);


  const parentDivStyle = {
    backgroundColor: cartAccentColor,
    padding: "20px 20px 20px 20px",
  };

  const backgroundStyle = {
    backgroundColor: isButtonHovered ? buttonHoverColor : buttonColor,
    padding: 16,
    width: "100%",
    cursor: "pointer",
    transition: 'background-color 0.2s',
  };

  // Updated styles for span and p elements
  const spanStyle = {
    color: cartTextColor, // Apply the cart text color to span elements
  };

  const pStyle = {
    color: cartTextColor, // Apply the cart text color to p elements
  };

  const buttonTextStyle = {
    display: "flex",
    color: buttonTextColor,
    backgroundColor: isButtonHovered ? buttonHoverColor : buttonColor,
    fontSize: 16,
    fontWeight: "500",
    justifyContent: "center",
    textAlign: "center",
    transition: 'background-color 0.2s',
  };

  const handleButtonHover = () => {
    setIsButtonHovered(!isButtonHovered);
  };

  return (
    <div style={parentDivStyle}>
      <DiscountCart />


      <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: 12 }}>
        <div style={{ display: "flex" }}>
          <span style={spanStyle}>Discounts</span>
          <div>
            <span style={spanStyle}>AUTO</span>
          </div>
        </div>
        <span style={spanStyle}>$36.00</span>
      </div>

      {trustBadgesPosition === 'top' && <TrustBadgesCart />}

      <div style={{}}>
        <div
          style={{ ...backgroundStyle }}
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonHover}
        >
          <p style={buttonTextStyle}>
            Checkout $34.00
          </p>
        </div>
      </div>

      {trustBadgesPosition === 'bottom' && <TrustBadgesCart />}
    </div>
  );
};

export default CheckoutCart;
