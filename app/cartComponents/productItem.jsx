import React from 'react';

const ProductItem = () => {
  const productContainerStyle = {
    marginTop:16,
    marginBottom:4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '407px', // Adjust the width as needed
    backgroundColor: '#f8f8f8', // Set the background color
    padding: '10px',
    boxSizing: 'border-box'
  };

  const imageStyle = {
    borderRadius: '4px',
    marginRight: '10px',
  };

  const infoStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  };

  const nameStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '0 0 4px 0', // Adjust the margin as needed
  };

  const priceStyle = {
    fontSize: '14px',
    margin: '0 0 8px 0', // Adjust the margin as needed
  };

  const buttonStyle = {
    backgroundColor: '#000', // Button background color
    color: '#fff', // Button text color
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    textTransform: 'uppercase',
    fontWeight: 'bold'
  };

  return (
    <div style={productContainerStyle}>
      <img
        src="https://cdn.shopify.com/s/files/1/0616/5780/9033/products/Main_b9e0da7f-db89-4d41-83f0-7f417b02831d.jpg?v=1703803034" // Replace with your image path
        alt="The Videographer Snowboard"
        style={imageStyle}
        width="100" // Adjust the width as needed
        height="auto"
      />
      <div style={infoStyle}>
        <p style={nameStyle}>The Videographer Snowboard</p>
        <p style={priceStyle}>$885.95</p>
        <button style={buttonStyle}>Add</button>
      </div>
    </div>
  );
};

export default ProductItem;
