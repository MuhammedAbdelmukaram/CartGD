import React from 'react';

const CartHeader = ({ h2Style }) => {
  return (
    <div style={{ display: "flex", padding: 30, alignItems: "center", justifyContent: "space-between" }}>
      <h2 style={h2Style}>Cart</h2>
      <div style={{ height: 30, width: 30, backgroundColor: "transparent", borderRadius: 2, display: "flex", cursor: "pointer", justifyContent: "center", alignItems: "center", transition: "background-color .2s" }}>
        <span>X</span>
      </div>
    </div>
  );
};

export default CartHeader;
