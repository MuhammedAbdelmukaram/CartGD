import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Card, BlockStack, Text, Select, TextField, RangeSlider, Checkbox} from '@shopify/polaris';
import ColorPicker from "../components/colorPicker";
import TimeFieldExample from "../components/TimeField";
import PlaceholderEnabler from "../components/placeholderEnabler";
import {
  toggleAnnouncementContent,
  setPosition,
  setTimeValue,
  setAnnouncementText,
  setBackgroundColor,
  setAnnouncementFontSize,
  setBorderColor, setAnnouncementFontWeight, setTimeLeftFontWeight, setTimeLeftFontSize, setTimeLeftColor
} from '../redux/announcementContentSlice';
import {setStrikethroughPricesChecked} from "../redux/designContentSlice";

const AnnouncementContent = () => {
  const dispatch = useDispatch();
  const {
    isAnnouncementContentEnabled,
    position,
    timeValue,
    announcementText,
    announcementFontSize,
    announcementFontWeight,
    timeLeftFontSize,
    timeLeftFontWeight,
    backgroundColor,
    borderColor,
    timeLeftColor,
  } = useSelector((state) => state.announcementContent);

  const handleAnnouncementContentToggle = useCallback((enabled) => {
    dispatch(toggleAnnouncementContent(enabled));
  }, [dispatch]);

  const handleSelectChange = useCallback((value) => {
    dispatch(setPosition(value));
  }, [dispatch]);

  const handleAnnouncementFontWeightToggle = useCallback((enabled) => {
    dispatch(setAnnouncementFontWeight(enabled));
    console.log(enabled);
  }, [dispatch]);


  const handleAnnouncementFontSizeChange = useCallback((value) => {
    dispatch(setAnnouncementFontSize(value));
  }, [dispatch]);

  const handleTimeLeftFontSizeChange = useCallback((value) => {
    dispatch(setTimeLeftFontSize(value));
  }, [dispatch]);




  const handleTimeChange = useCallback((newValue) => {
    dispatch(setTimeValue(newValue));
  }, [dispatch]);

  const handleAnnouncementTextChange = useCallback((newValue) => {
    dispatch(setAnnouncementText(newValue));
  }, [dispatch]);

  const options = [
    {label: 'Top', value: 'top'},
    {label: 'Bottom', value: 'bottom'},
  ];

  return (
    <div style={{marginBottom:60}}>
      <div style={{marginBottom: 26}}>
        <PlaceholderEnabler
          text={"Announcement"}
          isEnabled={isAnnouncementContentEnabled}
          onToggle={handleAnnouncementContentToggle}
        />
        <Card>
          <BlockStack gap="500">
            <Text as="p" variant="headingSm">Announcement Settings</Text>
            <Select label="Position" options={options} onChange={handleSelectChange} value={position}/>
            <TimeFieldExample timeValue={timeValue} onTimeChange={handleTimeChange}/>
            <TextField
              label="Announcement Text"
              value={announcementText}
              onChange={handleAnnouncementTextChange}
              autoComplete="off"
              placeholder="Write your announcement text here.."
            />
          </BlockStack>
        </Card>
      </div>
      <Card>
        <BlockStack gap="500">
          <ColorPicker text="Time Left Color" color={timeLeftColor} onChange={(color) => dispatch(setTimeLeftColor(color))}/>
          <ColorPicker text="Background Color" color={backgroundColor}
                       onChange={(color) => dispatch(setBackgroundColor(color))}/>
          <ColorPicker text="Border Color" color={borderColor} onChange={(color) => dispatch(setBorderColor(color))}/>
        </BlockStack>
      </Card>

      <div style={{marginTop: 26}}>
        <Card>
          <BlockStack gap="500">
            <Checkbox
              label="Bold text"
              checked={announcementFontWeight}
              onChange={(newChecked) => {
                console.log(newChecked); // Log the value
                dispatch(setAnnouncementFontWeight(newChecked));
              }}
            />

            <Checkbox
              label="Bold text"
              checked={timeLeftFontWeight}
              onChange={(newChecked) => {
                console.log(newChecked); // Log the value
                dispatch(setTimeLeftFontWeight(newChecked));
              }}
            />

            <RangeSlider
              output
              label="Announcement Font size:"
              min={14}
              max={20}
              value={announcementFontSize}
              onChange={handleAnnouncementFontSizeChange}
            />

            <RangeSlider
              output
              label="Time left Font Size:"
              min={14}
              max={20}
              value={timeLeftFontSize}
              onChange={handleTimeLeftFontSizeChange}
            />
          </BlockStack>
        </Card>
      </div>
    </div>
  );
};

export default AnnouncementContent;
