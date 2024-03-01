import React, { useCallback, useState } from 'react';
import { Card, BlockStack, Text, Checkbox, Divider,ChoiceList } from '@shopify/polaris';
import ColorPicker from "../components/colorPicker";
import PlaceholderEnabler from "../components/placeholderEnabler";
import {

  setStrikethroughPricesChecked,
  setInheritFontsChecked,
  setBackgroundColor,
  setCartAccentColor,
  setButtonColor,
  setButtonTextColor,
  setButtonTextHoverColor,
  setCartTextColor, setCartType
} from '../redux/designContentSlice';
import {useDispatch, useSelector} from "react-redux";






const DesignContent = () => {

  const dispatch = useDispatch();

  const {

    strikethroughPricesChecked,
    inheritFontsChecked,
    backgroundColor,
    cartAccentColor,
    buttonColor,
    buttonTextColor,
    buttonTextHoverColor,
    cartTextColor,
    cartType
  } = useSelector((state) => state.designContent);

  const handleChange = useCallback((value) => {
    const cartType = value[0]; // Since ChoiceList for single choice gives an array, take the first value
    dispatch(setCartType(cartType));
  }, [dispatch]);




  return (
    <div style={{marginBottom:64}}>
      <div style={{marginBottom:24}}>


        <Card>
          <BlockStack gap="500">
            <Text as="p" variant="headingSm">
              Theme settings
            </Text>

            <ChoiceList
              titleHidden={true}
              title="Cart Type"
              choices={[
                { label: 'Drawer Cart', value: 'drawer' },
                { label: 'Page Cart', value: 'page' },
              ]}
              selected={[cartType]} // Make sure cartType is correctly coming from Redux state
              onChange={handleChange}
            />

            <Checkbox
              label="Show strikethrough prices"
              checked={strikethroughPricesChecked}
              onChange={(newChecked) => dispatch(setStrikethroughPricesChecked(newChecked))}
            />
            <Checkbox
              label="Inherit Fonts from Theme"
              checked={inheritFontsChecked}
              onChange={(newChecked) => dispatch(setInheritFontsChecked(newChecked))}
            />

          </BlockStack>
        </Card>
      </div>

      <Card>
        <BlockStack gap="400">
          <div>
            <span style={{fontWeight:500}}>Background color</span>
          </div>


          <ColorPicker text={"Background Color"} color={backgroundColor} onChange={(color) => dispatch(setBackgroundColor(color))} />
          <Divider />
          <ColorPicker text={"Cart Accent Color"} color={cartAccentColor} onChange={(color) => dispatch(setCartAccentColor(color))} />
          <Divider />
          <ColorPicker text={"Button Color"} color={buttonColor} onChange={(color) => dispatch(setButtonColor(color))} />
          <Divider />
          <ColorPicker text={"Button Text Color"} color={buttonTextColor} onChange={(color) => dispatch(setButtonTextColor(color))} />
          <Divider />
          <ColorPicker text={"Button Text Hover Color"} color={buttonTextHoverColor} onChange={(color) => dispatch(setButtonTextHoverColor(color))} />
          <Divider />
          <ColorPicker text={"Cart Text Color"} color={cartTextColor} onChange={(color) => dispatch(setCartTextColor(color))} />

        </BlockStack>
      </Card>
    </div>
  );
};

export default DesignContent;
