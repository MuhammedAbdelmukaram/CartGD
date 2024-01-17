import React, { useState } from 'react';
import { TextField } from '@shopify/polaris';

function TimeFieldExample({ timeValue, onTimeChange }) {
  const [error, setError] = useState(null);

  const handleChange = (newValue) => {
    // Allow the user to type numbers and colon only
    const cleanedValue = newValue.replace(/[^0-9:]/g, '');
    onTimeChange(cleanedValue);
  };

  const validateTime = (inputValue) => {
    // Regex to check if the input is in MM:SS format and within 00:00 to 59:59 range
    const timeRegex = /^([0-5]?[0-9]):([0-5]?[0-9])$/;

    if (timeRegex.test(inputValue)) {
      setError(null); // No error if the time is valid
      return true;
    } else {
      setError('Enter a valid time (MM:SS), up to 59:59.');
      return false;
    }
  };

  const handleBlur = () => {
    // Perform validation when the user leaves the text field
    if (!validateTime(timeValue)) {
      onTimeChange('00:00'); // Reset to default if invalid
    }
  };

  return (
    <TextField
      label="Time (MM:SS)"
      value={timeValue}
      onChange={handleChange}
      onBlur={handleBlur}
      autoComplete="off"
      error={error}
      placeholder="MM:SS"
    />
  );
}

export default TimeFieldExample;
