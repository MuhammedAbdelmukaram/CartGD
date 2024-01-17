import React from 'react';
import {
  Page,
  Layout,
  Text,
  Card,
  Button,
  BlockStack,
  Icon,
  Box,
  List,
  Link,
  InlineStack,
} from "@shopify/polaris";

import {
  CircleTickMajor
} from '@shopify/polaris-icons';

const Code = ({ children }) => (
  <Box
    as="span"
    padding="025"
    paddingInlineStart="100"
    paddingInlineEnd="100"
    background="bg-surface-active"
    borderWidth="025"
    borderColor="border"
    borderRadius="100"
  >
    <code>{children}</code>
  </Box>
);

const AppAnalytics = () => (
  <Page>
    <div style={{marginBottom:12}}>
      <Text variant={"headingXl"}>
        Your Plan
      </Text>
    </div>
    <div style={{marginBottom:26}}>
      <Text variant={"bodyLg"}>
        Simple and sustainable pricing
      </Text>
    </div>
    <Layout>
      <Layout.Section>
        <div style={{cursor:"pointer", marginBottom:12}}>
          <Card>
            <BlockStack gap="500">

              <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <div style={{display:"flex", alignItems:"center", width:"100%", padding:"16px 10px"}}>
                  <p style={{fontSize:20}}>
                    $10/m
                  </p>
                  <p style={{fontSize:12, marginLeft:36}}>
                    Up to 100 monthly orders
                  </p>
                </div>

                <Icon
                  source={CircleTickMajor}
                  tone="success"
                />
              </div>



            </BlockStack>
          </Card>
        </div>

        <div style={{cursor:"pointer", marginBottom:12}}>
          <Card>
            <BlockStack gap="500">
              <div style={{display:"flex", alignItems:"center", width:"100%", padding:"16px 10px"}}>
                <p style={{fontSize:20}}>
                  $10/m
                </p>
                <p style={{fontSize:12, marginLeft:36}}>
                  Up to 100 monthly orders
                </p>
              </div>
            </BlockStack>
          </Card>
        </div>

        <div style={{cursor:"pointer", marginBottom:12}}>
          <Card>
            <BlockStack gap="500">
              <div style={{display:"flex", alignItems:"center", width:"100%", padding:"16px 10px"}}>
                <p style={{fontSize:20}}>
                  $10/m
                </p>
                <p style={{fontSize:12, marginLeft:36}}>
                  Up to 100 monthly orders
                </p>
              </div>
            </BlockStack>
          </Card>
        </div>
      </Layout.Section>

      <Layout.Section variant={"oneThird"}>
        <Card>


          <List type="bullet">
            <List.Item>Cart design</List.Item>
            <List.Item>Upsell feature</List.Item>
            <List.Item>Announcements</List.Item>
            <List.Item>Discounts feature</List.Item>
            <List.Item>Badges feature</List.Item>
            <List.Item>Notes feature</List.Item>
            <List.Item>Priority Technical Support</List.Item>
          </List>

        </Card>
      </Layout.Section>

    </Layout>
  </Page>
);

export default AppAnalytics;
