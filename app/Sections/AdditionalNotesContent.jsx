import React, { useCallback, useState } from 'react';
import {Card, BlockStack, Text, Checkbox, Divider, TextField, Select, Button} from '@shopify/polaris';
import ColorPicker from "../components/colorPicker";
import PlaceholderEnabler from "../components/placeholderEnabler";
import {
  toggleAdditionalContent,
  setNotesTitle,
  setNotesPlaceholder,
  setSelectedPosition
} from '../redux/additionalNotesContentSlice';
import {useDispatch, useSelector} from "react-redux";




const AdditionalNotesContent = () => {
  const dispatch = useDispatch();
  const {
    isAdditionalContentEnabled,
    notesTitle,
    notesPlaceholder,
    selectedPosition
  } = useSelector((state) => state.additionalNotesContent);

  // Toggle the additional content enabled state
  const handleAdditionalContentToggle = useCallback((enabled) => {
    dispatch(toggleAdditionalContent(enabled));
  }, [dispatch]);

  // Update the notes title
  const handleNotesTitleChange = useCallback((newValue) => {
    dispatch(setNotesTitle(newValue));
  }, [dispatch]);

  // Update the notes placeholder
  const handleNotesPlaceholderChange = useCallback((newValue) => {
    dispatch(setNotesPlaceholder(newValue));
  }, [dispatch]);

  // Update the selected position
  const handleSelectChange = useCallback((newValue) => {
    dispatch(setSelectedPosition(newValue));
  }, [dispatch]);

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <PlaceholderEnabler
          text={"Additional Notes"}
          isEnabled={isAdditionalContentEnabled}
          onToggle={handleAdditionalContentToggle}
        />

        <Card>
          <BlockStack gap="500">
            <Text as="p" variant="headingSm">Theme settings</Text>
            <TextField
              label="Button Title"
              value={notesTitle}
              onChange={handleNotesTitleChange}
              autoComplete="off"
            />
            <TextField
              label="Notes Placeholder"
              value={notesPlaceholder}
              onChange={handleNotesPlaceholderChange}
              autoComplete="off"
            />
            <Select
              label="Position"
              options={[{ label: 'Top', value: 'top' }, { label: 'Bottom', value: 'bottom' }]}
              onChange={handleSelectChange}
              value={selectedPosition}
            />
          </BlockStack>
        </Card>
      </div>
    </div>
  );
};

export default AdditionalNotesContent;
