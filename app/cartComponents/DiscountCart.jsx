import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const DiscountCart = () => {
  const isDiscountContentEnabled = useSelector(state => state.discountContent.isDiscountContentEnabled);
  const buttonColor = useSelector(state => state.designContent.buttonColor);
  const buttonTextColor = useSelector(state => state.designContent.buttonTextColor);
  const buttonHoverColor = useSelector(state => state.designContent.buttonTextHoverColor);

  // Accessing discountCode and buttonName from Redux
  const discountCode = useSelector(state => state.discountContent.discountCode);
  const buttonName = useSelector(state => state.discountContent.buttonName);

  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {

    backgroundColor: isHovered ? buttonHoverColor : buttonColor,
    color: buttonTextColor,
    transition: 'background-color 0.2s, color 0.2s',
  };

  if (isDiscountContentEnabled) {
    return (
      <div style={{ marginBottom: 10 }}>
        <form action="" style={{ display: 'flex', width: '100%', gap: 10 }}>
          <div style={{ width: '100%' }}>
            <input
              type="text"
              placeholder={discountCode || "Special instructions for your order"} // Use discountCode as placeholder
              style={{
                position: 'relative',
                flex: '1 1',
                fontSize: '14px',
                height: '42px',
                padding: '0 12px',
                borderRadius: '0',
                border: 'none',
                backgroundColor: '#fff',
                color: '#000',
                margin: '0',
                width: '100%',
              }}
            />
          </div>
          <button
            style={{
              padding: '0 25px',
              margin: '0',
              fontSize: '14px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '600',
              color: '#fff',
              ...buttonStyle,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {buttonName || 'Apply'} {/* Use buttonName as button text */}
          </button>
        </form>
      </div>
    );
  } else {
    return null;
  }
};

export default DiscountCart;
