import React from 'react';
import { Card, BlockStack, Text, Layout } from '@shopify/polaris';
import PlaceholderEnabler from "../components/placeholderEnabler";

const RewardsContent = () => {
  return (
    <div>
      <PlaceholderEnabler text={"Rewards"}/>
      <Card>
        <BlockStack gap="500">
          <Text as="p" variant="bodyMd">
            {/* Content specific to "Design" */}
            Rewards is the content for the Design section. You can customize this card with specific information, images, links, or other elements related to design.
          </Text>
        </BlockStack>
      </Card>

      <Card>
        <BlockStack gap="500">
          <Text as="p" variant="bodyMd">
            {/* Additional content for "Design" */}
            Here's more detailed information or additional content for the Design section. This could include further descriptions, tutorials, or design tips.
          </Text>
        </BlockStack>
      </Card>
    </div>
  );
};

export default RewardsContent;
