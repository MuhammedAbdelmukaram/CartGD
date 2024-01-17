import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Icon } from "@shopify/polaris";
import { DropdownMinor } from '@shopify/polaris-icons';

const AdditionalNotesCart = () => {
  const [showTextarea, setShowTextarea] = useState(false);

  // Accessing state from Redux
  const { isAdditionalContentEnabled, notesTitle, notesPlaceholder } = useSelector(state => state.additionalNotesContent);
  const cartTextColor = useSelector(state => state.designContent.cartTextColor);

  const toggleTextarea = () => {
    setShowTextarea(!showTextarea);
  };

  // Style for the p element
  const pStyle = {
    color: cartTextColor, // Apply the cart text color to the p element
  };

  if (isAdditionalContentEnabled) {
    return (
      <div>
        <div style={{ padding: 20 }}>
          <div
            style={{ display: "flex", width: "fit-content", cursor: "pointer" }}
            onClick={toggleTextarea}
          >
            <p style={pStyle}>{notesTitle}</p> {/* Use notesTitle here */}
            <div style={{ marginLeft: 8, transform: showTextarea ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
              <Icon
                source={DropdownMinor}
                tone="base"
              />
            </div>
          </div>
          {showTextarea && (
            <div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                style={{ height: '40px', width: '100%', marginTop: 4 }}
                placeholder={notesPlaceholder}
              ></textarea>
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return null; // Don't render the component if isAdditionalContentEnabled is false
  }
};

export default AdditionalNotesCart;
