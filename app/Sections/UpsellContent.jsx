import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
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
import {
  BlockStack,
  Card,
  Select,
  Text,
  TextField,
  RadioButton,
  Checkbox,
  RangeSlider,
  Popover,
  ButtonGroup,
  ActionList,
  Button,
  Modal, IndexTable, useIndexResourceState,
} from "@shopify/polaris";
import {
  PlusMinor, CartUpMajor
} from '@shopify/polaris-icons';
import ManualUpsellEntry from "../components/manualUpsellEntry";

const UpsellContent = ({products}) => {
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

  const [popoverActive, setPopoverActive] = React.useState(false);
  const togglePopoverActive = React.useCallback(() => setPopoverActive((active) => !active), []);
  const [isAddProductsModalOpen, setIsAddProductsModalOpen] = useState(false);
  const [isAddUpsellProductsModalOpen, setIsAddUpsellProductsModalOpen] = useState(false);
  const [manualUpsellEntries, setManualUpsellEntries] = useState([]);
  const [upsellProductSelections, setUpsellProductSelections] = useState([]);
  const [tempSelectedProducts, setTempSelectedProducts] = useState([]);
  const [activeEntryIndex, setActiveEntryIndex] = useState(null); // To track which entry is being edited


  // Functions to toggle modals
  const toggleAddProductsModal = () => setIsAddProductsModalOpen(!isAddProductsModalOpen);
  const removeManualUpsellEntry = (indexToRemove) => {
    setManualUpsellEntries(currentEntries =>
      currentEntries.filter((_, index) => index !== indexToRemove)
    );
  };

  const addManualUpsellEntry = () => {
    // Add a new ManualUpsellEntry component to the array
    setManualUpsellEntries([...manualUpsellEntries, {}]); // {} represents a new entry, you can replace it with more specific data if needed
  };
  const handleProductSelectionChange = (index, selectedProducts) => {
    setUpsellProductSelections(currentSelections => {
      const updatedSelections = [...currentSelections];
      updatedSelections[index] = selectedProducts;
      return updatedSelections;
    });
  };

  useEffect(() => {
    console.log("Updated upsellProductSelections:", upsellProductSelections);
  }, [upsellProductSelections]);

  const handleSaveProductSelection = () => {
    if (activeEntryIndex !== null) {
      // Immediately log tempSelectedProducts to ensure it holds expected selections
      console.log("Saving selections for entry:", activeEntryIndex, tempSelectedProducts);
      setUpsellProductSelections(current => {
        const newSelections = [...current];
        newSelections[activeEntryIndex] = [...tempSelectedProducts];
        return newSelections;
      });
      // Note: Updated state logging is moved to useEffect for accuracy
      setIsAddProductsModalOpen(false);
      setTempSelectedProducts([]);
      setActiveEntryIndex(null);
    }
  };



  const handleCancelProductSelection = () => {
    setIsAddProductsModalOpen(false);
    setTempSelectedProducts([]); // Optionally clear temporary selections
    setActiveEntryIndex(null); // Reset active entry index
  };





  const openProductSelectionModal = (index) => {
    setActiveEntryIndex(index);
    const currentSelections = upsellProductSelections[index] || [];
    setTempSelectedProducts(currentSelections);
    setIsAddProductsModalOpen(true);
  };







  const toggleAddUpsellProductsModal = () => setIsAddUpsellProductsModalOpen(!isAddUpsellProductsModalOpen);
  const renderManualUpsellContent = () => (
    <div style={{marginBottom: 16}}>
      <Card title="Manual Upsell Options" sectioned>
        <Text>Configure your manual upsell options here.</Text>
        <div style={{marginTop: 16, marginBottom: 16}}>
          <div style={{ marginBottom: 24 }}>
            <Button onClick={addManualUpsellEntry} fullWidth>Add Upsell</Button>
          </div>
          {manualUpsellEntries.map((entry, index) => (
            <ManualUpsellEntry
              key={index}
              index={index}
              selectedProducts={upsellProductSelections[index] || []}
              toggleAddProductsModal={() => openProductSelectionModal(index)}
              toggleAddUpsellProductsModal={() => toggleAddUpsellProductsModal(index)}
              onRemove={() => removeManualUpsellEntry(index)}
            />
          ))}




        </div>
        {/*<div>
          <h2>Upsell Products</h2>
          <ul>
            {products.map(product => (
              <li key={product.id}>{product.title}</li>
            ))}
          </ul>
        </div>*/}
      </Card>
    </div>
  );

  const {
    selectedResources,
    allResourcesSelected,
    handleSelectionChange,
  } = useIndexResourceState(products);

  // Function to render product rows for IndexTable
  const rowMarkup = products.map((product, index) => {
    const { id, title, variants, vendor, productType } = product;
    // Assuming the first variant for simplicity; adjust as necessary
    const price = variants.edges[0]?.node.price || 'N/A';
    const inventory = variants.edges[0]?.node.inventoryQuantity || 'N/A';

    return (
      <IndexTable.Row
        id={id}
        key={id}
        selected={selectedResources.includes(id)}
        position={index}
      >
        {/* Adjust the IndexTable.Cell entries as needed */}
        <IndexTable.Cell>{title}</IndexTable.Cell>
        <IndexTable.Cell>{price}</IndexTable.Cell>
        <IndexTable.Cell>{/* Status/Tone might need a different approach */}</IndexTable.Cell>
        <IndexTable.Cell>{inventory}</IndexTable.Cell>
        <IndexTable.Cell>{productType}</IndexTable.Cell>
        <IndexTable.Cell>{vendor}</IndexTable.Cell>
      </IndexTable.Row>
    );
  });

  return (
    <div>
      <Modal
        open={isAddProductsModalOpen}
        onClose={handleCancelProductSelection}
        title="Select Products"
        primaryAction={{
          content: 'Save',
          onAction: handleSaveProductSelection,
        }}
        secondaryActions={[{
          content: 'Cancel',
          onAction: handleCancelProductSelection,
        }]}
      >
        <Modal.Section>
          <Card>
            <IndexTable
              resourceName={{ singular: 'product', plural: 'products' }}
              itemCount={products.length}
              selectedItemsCount={allResourcesSelected ? 'All' : selectedResources.length}
              onSelectionChange={handleSelectionChange}
              headings={[
                { title: 'Product' },
                { title: 'Price' },
                { title: 'Status' },
                { title: 'Inventory' },
                { title: 'Type' },
                { title: 'Vendor' },
              ]}
            >
              {rowMarkup}
            </IndexTable>
          </Card>
        </Modal.Section>
      </Modal>

      <Modal
        open={isAddUpsellProductsModalOpen}
        onClose={toggleAddUpsellProductsModal}
        title="Add Upsell Products"
        primaryAction={{
          content: 'Add',
          onAction: toggleAddUpsellProductsModal,
        }}
        secondaryActions={[
          {
            content: 'Cancel',
            onAction: toggleAddUpsellProductsModal,
          },
        ]}
      >
        <Modal.Section>
          <Card>
            <IndexTable
              resourceName={{ singular: 'product', plural: 'products' }}
              itemCount={products.length}
              selectedItemsCount={allResourcesSelected ? 'All' : selectedResources.length}
              onSelectionChange={handleSelectionChange}
              headings={[
                { title: 'Product' },
                { title: 'Price' },
                { title: 'Status' },
                { title: 'Inventory' },
                { title: 'Type' },
                { title: 'Vendor' },
              ]}
            >
              {rowMarkup}
            </IndexTable>
          </Card>
        </Modal.Section>
      </Modal>


      <div style={{marginBottom: 24}}>
        <PlaceholderEnabler
          text={"Upsell"}
          isEnabled={isUpsellEnabled}
          onToggle={handleUpsellToggle}
        />

        <div style={{marginBottom: 24}}>
          <Card>
            <BlockStack gap="500">
              <div style={{display: "flex", width: "100%"}}>
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
                <div style={{marginLeft: 34}}>
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

        {upsellMethod === 'manualUpsell' && renderManualUpsellContent()}


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

            <div style={{width: "60%"}}>
              <RangeSlider
                output
                label="Maximum number of upsells in cart"
                min={1}
                max={6}
                step={1}
                value={rangeValue}
                suffix={rangeValue}
                onChange={handleRangeSliderChange}
                disabled={!checkbox2Checked} // Disable the slider when checkbox is unchecked
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

            {/*<Select
              label="Type"
              options={options2}
              onChange={handleSelectChange}
              value={selectedType}
            />*/}

            {/*<Select
              label="Position"
              options={options}
              onChange={handlePositionChange}
              value={selectedPosition}
            />*/}


          </BlockStack>

        </Card>


      </div>
    </div>
  );
};

export default UpsellContent;
