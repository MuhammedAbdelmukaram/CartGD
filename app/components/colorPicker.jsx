import React, { useState, useCallback } from 'react';
import { ColorPicker, TextField, Popover, Button, rgbToHsb, hsbToRgb, hsbToHex } from '@shopify/polaris';

const ColorPickerTextField = ({ text, color, onChange }) => {
  const [popoverActive, setPopoverActive] = useState(false);

  // Handle color changes from the ColorPicker
  const handleColorChange = useCallback((newColor) => {
    onChange(hsbToHex(newColor)); // Convert HSBA to HEX and pass to parent
  }, [onChange]);

  // Handle hex color changes from the TextField
  const handleTextFieldChange = useCallback((newValue) => {
    if (/^#([0-9A-F]{3}){1,2}$/i.test(newValue)) {
      onChange(newValue); // Pass valid hex value to parent
    }
  }, [onChange]);

  const togglePopoverActive = useCallback(() => {
    setPopoverActive((active) => !active);
  }, []);

  const activator = (
    <Button onClick={togglePopoverActive} disclosure>
      <div style={{ backgroundColor: color, width: '16px', height: '16px', borderRadius: '8px' }}></div>
    </Button>
  );

  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'var(--p-space-2)', marginBottom: 4 }}>
      <div style={{ width: '100px' }}>
        <Popover active={popoverActive} activator={activator} onClose={togglePopoverActive}>
          <ColorPicker
            onChange={handleColorChange}
            color={rgbToHsb(hexToRgb(color))}
            allowAlpha={false}
          />
        </Popover>
      </div>
      <TextField value={color} onChange={handleTextFieldChange} label={text} type="text" />
    </div>
  );
};

// Utility function to convert hex to RGB
function hexToRgb(hex) {
  let r = 0, g = 0, b = 0;

  if (hex.length === 4) {
    r = "0x" + hex[1] + hex[1];
    g = "0x" + hex[2] + hex[2];
    b = "0x" + hex[3] + hex[3];
  } else if (hex.length === 7) {
    r = "0x" + hex[1] + hex[2];
    g = "0x" + hex[3] + hex[4];
    b = "0x" + hex[5] + hex[6];
  }

  return { red: +r, green: +g, blue: +b };
}

// Utility function to convert RGB to HSB


export default ColorPickerTextField;
