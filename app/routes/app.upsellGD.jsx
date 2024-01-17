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
  InlineStack,
} from "@shopify/polaris";

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
    <ui-title-bar title="Upsell GD" />
    <Layout>
      <Layout.Section>
        <Card>
          <BlockStack gap="500">
            <Text as="p" variant="bodyMd">
              To create your own page and have it show up in the app
              navigation, add a page inside <Code>app/routes</Code>, and a
              link to it in the <Code>&lt;ui-nav-menu&gt;</Code> component
              found in <Code>app/routes/app.jsx</Code>.
            </Text>
          </BlockStack>
        </Card>
      </Layout.Section>
    </Layout>
  </Page>
);

export default AppAnalytics;
