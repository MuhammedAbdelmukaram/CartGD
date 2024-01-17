import React, { useCallback, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import paymentProcessors from '../util/paymentProcessors';
import {
  Card,
  BlockStack,
  Text,
  Select,
  Combobox,
  Listbox,
  Icon,
  AutoSelection,
  InlineStack,
  Tag
} from '@shopify/polaris';
import {SearchMajor} from '@shopify/polaris-icons';
import PlaceholderEnabler from "../components/placeholderEnabler";
import {
  toggleTrustBadges,
  setPresetImage,
  setPosition,
  setSelectedPaymentProcessors // Make sure to import this action
} from 'app/redux/TrustBadgesContentSlice.js';

const TrustBadgesContent = () => {
  const dispatch = useDispatch();
  const {
    isTrustBadgesEnabled,
    presetImage,
    position
  } = useSelector((state) => state.trustBadgesContent);

  const selectedProcessors = useSelector(state => state.trustBadgesContent.selectedPaymentProcessors);

  const [inputValue, setInputValue] = useState(''); // Added state for input value

  // Inside TrustBadgesContent
  const deselectedOptions = paymentProcessors;


  const removeTag = useCallback(
    (tagValue) => () => {
      const newSelectedProcessors = selectedProcessors.filter(value => value !== tagValue);
      dispatch(setSelectedPaymentProcessors(newSelectedProcessors));
    },
    [selectedProcessors, dispatch]
  );

  const tagsMarkup = selectedProcessors.map((processorValue) => {
    const processor = deselectedOptions.find(option => option.value === processorValue);
    const label = processor ? processor.label : processorValue;

    return (
      <div style={{marginRight:8, marginBottom:4}}>
        <Tag key={`option-${processorValue}`} onRemove={removeTag(processorValue)}>
          <div>
          {label}
          </div>
        </Tag>
      </div>
    );
  });



  const updateText = useCallback((value) => {
    setInputValue(value);
    // You might want to add logic to filter options based on the input value
  }, []);

  const updateSelection = useCallback(
    (selected) => {
      let newSelectedProcessors;
      if (selectedProcessors.includes(selected)) {
        newSelectedProcessors = selectedProcessors.filter((option) => option !== selected);
      } else {
        newSelectedProcessors = [...selectedProcessors, selected];
      }

      dispatch(setSelectedPaymentProcessors(newSelectedProcessors));
      updateText('');
    },
    [selectedProcessors, dispatch],
  );

  const optionsMarkup = deselectedOptions.map((option) => {
    return (
      <Listbox.Option
        key={option.value}
        value={option.value}
        selected={selectedProcessors.includes(option.value)}
        accessibilityLabel={option.label}
      >
        {option.label}
      </Listbox.Option>
    );
  });


  const handleTrustBadgesToggle = useCallback((enabled) => {
    dispatch(toggleTrustBadges(enabled));
  }, [dispatch]);

  const handlePresetChange = useCallback((value) => {
    dispatch(setPresetImage(value));
  }, [dispatch]);

  const handlePositionChange = useCallback((value) => {
    dispatch(setPosition(value));
  }, [dispatch]);

  const optionsPreset = [
    {label: 'Select', value: 'Select'},
    {label: 'Payment Processors', value: 'paymentProcessors'},
  ];

  const options = [
    {label: 'Top', value: 'top'},
    {label: 'Bottom', value: 'bottom'},
  ];

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <PlaceholderEnabler
          text={"Trust Badges"}
          isEnabled={isTrustBadgesEnabled}
          onToggle={handleTrustBadgesToggle}
        />
        <Card>
          <BlockStack gap="500">
            <Text as="p" variant="headingSm">Theme settings</Text>
            <Combobox
              allowMultiple
              activator={
                <Combobox.TextField
                  prefix={<Icon source={SearchMajor} />}
                  onChange={updateText}
                  label="Search Payment Processors"
                  labelHidden
                  value={inputValue}
                  placeholder="Search Payment Processors"
                  autoComplete="off"
                />
              }
            >
              {optionsMarkup ? (
                <Listbox
                  autoSelection={AutoSelection.None}
                  onSelect={updateSelection}
                >
                  {optionsMarkup}
                </Listbox>
              ) : null}
            </Combobox>
            <Text>
              <InlineStack>{tagsMarkup}</InlineStack>
            </Text>

            <Select
              label="Preset Images"
              options={optionsPreset}
              onChange={handlePresetChange}
              value={presetImage}
            />
            <Select
              label="Position"
              options={options}
              onChange={handlePositionChange}
              value={position}
            />
          </BlockStack>
        </Card>
      </div>
    </div>
  );
};

export default TrustBadgesContent;
