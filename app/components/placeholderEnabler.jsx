import React from 'react';
import {
  Page,
  Layout,
  Text,
  Card,
  Button,
  BlockStack,
  Box,
  List,
  Link,
  InlineStack, Icon,
} from "@shopify/polaris";
import {
  CircleTickMajor,CircleDisabledMajor
} from '@shopify/polaris-icons';

const PlaceholderEnabler = ({ text, isEnabled, onToggle }) => {
  return (
    <div style={{ marginBottom: 24 }}>
      <Card>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex" }}>
            <div style={{ marginTop: 2.6 }}>
              {isEnabled ? (
                <Icon source={CircleTickMajor} tone="success" />
              ) : (
                <Icon source={CircleDisabledMajor} tone="critical" />
              )}
            </div>
            <span style={{ fontSize: 13, fontWeight: "500", marginTop: 2, marginLeft: 8, alignItems: "center" }}>{text}</span>
          </div>
          {isEnabled ? (
            <Button onClick={() => onToggle(false)} variant="primary" tone="critical">
              Disable
            </Button>
          ) : (
            <Button onClick={() => onToggle(true)}>
              Enable
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
};

export default PlaceholderEnabler;


