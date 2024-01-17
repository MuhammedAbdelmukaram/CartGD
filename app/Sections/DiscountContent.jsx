import React, { useCallback, useState } from 'react';
import {Card, BlockStack, Text, Checkbox, Divider, TextField} from '@shopify/polaris';
import ColorPicker from "../components/colorPicker";
import PlaceholderEnabler from "../components/placeholderEnabler";
import {useDispatch, useSelector} from "react-redux";
import { toggleDiscountContent, setDiscountCode, setButtonName } from '../redux/discountContentSlice';

const DiscountContent = () => {
  const dispatch = useDispatch();
  const { isDiscountContentEnabled, discountCode, buttonName } = useSelector((state) => state.discountContent);

  const handleDiscountContentToggle = useCallback((enabled) => {
    dispatch(toggleDiscountContent(enabled));
  }, [dispatch]);

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <PlaceholderEnabler
          text={"Discount"}
          isEnabled={isDiscountContentEnabled}
          onToggle={handleDiscountContentToggle}
        />
        <Card>
          <BlockStack gap="500">
            <Text as="p" variant="headingSm">Theme settings</Text>
            <TextField
              label="Discount Placeholder"
              value={discountCode}
              onChange={(newValue) => dispatch(setDiscountCode(newValue))}
              autoComplete="off"
            />
            <TextField
              label="Discount Button Text"
              value={buttonName}
              onChange={(newValue) => dispatch(setButtonName(newValue))}
              autoComplete="off"
            />
          </BlockStack>
        </Card>
      </div>
    </div>
  );
};

export default DiscountContent;
