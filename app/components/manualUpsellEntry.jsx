import {Button, Icon, Text} from "@shopify/polaris";
import {CartUpMajor, PlusMinor, DeleteMajor} from "@shopify/polaris-icons";
import React from "react";




const ManualUpsellEntry = ({ selectedProducts, toggleAddProductsModal, toggleAddUpsellProductsModal, onRemove }) => {
  const buttonAppearance = selectedProducts.length > 0 ? "primary" : "default";

  return (
    <div style={{ borderTop: '1px solid #f1f1f1', borderBottom: '1px solid #f1f1f1', paddingTop: 10, paddingBottom: 10, paddingRight: 6, paddingLeft: 6, width: "100%", display: "flex", justifyContent: "space-between" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{
            width: '12px',
            height: '12px',
            backgroundColor: '#178923', // Green color
            borderRadius: '50%', // Makes the div a circle
            display: 'inline-block',
            marginRight: 12
          }}>
            {/* You can place additional content here if needed */}
          </div>
          <Text>Upsell Name (from Db)</Text>
        </div>
      </div>
      {/* Conditionally render the "Add Target Products" button */}
      {selectedProducts.length > 0 ? (
        <Text>Products are selected</Text>
      ) : (
        <Button onClick={toggleAddProductsModal} style={{ marginRight: "auto" }}>Add Target Products</Button>
      )}
      <div style={{ width: 1, backgroundColor: "#6c6a6a" }}></div>
      <Button icon={CartUpMajor} onClick={toggleAddUpsellProductsModal} variant="primary">Add Upsell Products</Button>
      {/* Clickable Delete Icon */}
      <div onClick={onRemove} style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
        <Icon source={DeleteMajor} color="base" />
      </div>
    </div>
  );
};


export default ManualUpsellEntry;
