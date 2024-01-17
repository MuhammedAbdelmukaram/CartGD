import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleUpsell,
  setUpsellTitle,
  setNotesPlaceholder,
  setSelectedType,
  setUpsellMethod,
  setCheckbox1Checked,
  setSelectedPosition,
  setCheckbox2Checked,
  setTextFieldValue, setRangeValue
} from '../redux/upsellContentSlice';
import PlaceholderEnabler from "../components/placeholderEnabler";
import { BlockStack, Card, Select, Text, TextField, RadioButton, Checkbox, RangeSlider } from "@shopify/polaris";

const UpsellContent = () => {
  const dispatch = useDispatch();
  const {
    isUpsellEnabled,
    upsellTitle,
    notesPlaceholder,
    selectedType,
    upsellMethod,
    rangeValue,
    selectedPosition,
    checkbox1Checked,
    checkbox2Checked,
    textFieldValue
  } = useSelector((state) => state.upsellContent);

  // Toggle for Upsell Content
  const handleUpsellToggle = (enabled) => {
    dispatch(toggleUpsell(enabled));
  };

  // Change Handlers for Text Fields
  const handleUpsellTitleChange = (value) => {
    dispatch(setUpsellTitle(value));
  };

  const handleNotesPlaceholderChange = (value) => {
    dispatch(setNotesPlaceholder(value));
  };

  // Handler for Select Dropdown
  const handleSelectChange = (value) => {
    dispatch(setSelectedType(value));
  };

  const handlePositionChange = (value) => {
    dispatch(setSelectedPosition(value));
  };

  const handleRangeSliderChange = (value) => {
    dispatch(setRangeValue(value));
  };

  // Handlers for Radio Buttons
  const handleRadioChange = (selectedMethod) => {
    dispatch(setUpsellMethod(selectedMethod));
  };

  // Handlers for Checkboxes
  const handleCheckbox1Change = (checked) => {
    dispatch(setCheckbox1Checked(checked));
  };

  const handleCheckbox2Change = (checked) => {
    dispatch(setCheckbox2Checked(checked));
  };

  // Handler for TextField
  const handleTextFieldChange = (value) => {
    dispatch(setTextFieldValue(value));
  };


  const options = [
    {label: 'Top', value: 'top'},
    {label: 'Bottom', value: 'bottom'},
  ];

  const options2 = [
    {label: 'Block', value: 'block'},
    {label: 'Carousel', value: 'carousel'},
  ];

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <PlaceholderEnabler
          text={"Upsell"}
          isEnabled={isUpsellEnabled}
          onToggle={handleUpsellToggle}
        />

        <div style={{marginBottom:24}}>
          <Card>
            <BlockStack gap="500">
              <div style={{display:"flex", width:"100%"}}>
                <div>
                  <RadioButton
                    label="AI"
                    helpText="Customers will only be able to check out as guests."
                    checked={upsellMethod === 'AI'}
                    id="AI"
                    name="upsellMethod"
                    onChange={() => handleRadioChange('AI')}
                  />
                </div>
                <div style={{marginLeft:34}}>
                  <RadioButton
                    label="Manual Upsell"
                    helpText="Customers will only be able to check out as guests."
                    checked={upsellMethod === 'manualUpsell'}
                    id="manualUpsell"
                    name="upsellMethod"
                    onChange={() => handleRadioChange('manualUpsell')}
                  />
                </div>
              </div>
            </BlockStack>
          </Card>
        </div>


        <Card>
          <BlockStack gap="500">
            <Checkbox
              label="Show upsell offer if item already in cart?"
              checked={checkbox1Checked}
              onChange={handleCheckbox1Change}
            />
            <Checkbox
              label="Limit the number of upsells in the cart?"
              checked={checkbox2Checked}
              onChange={handleCheckbox2Change}
            />

            <div style={{width:"60%"}}>
              <RangeSlider
                output
                label="Maximum number of upsells in cart"
                min={1}
                max={6}
                step={1}
                value={rangeValue}
                suffix={rangeValue}
                onChange={handleRangeSliderChange}
              />
            </div>


            <TextField
              label="Upsell title"
              value={textFieldValue}
              onChange={handleTextFieldChange}
              maxLength={20}
              autoComplete="off"
              showCharacterCount
            />

            <Select
              label="Type"
              options={options2}
              onChange={handleSelectChange}
              value={selectedType}
            />

            <Select
              label="Position"
              options={options}
              onChange={handlePositionChange}
              value={selectedPosition}
            />

          </BlockStack>

        </Card>


      </div>
    </div>
  );
};

export default UpsellContent;
