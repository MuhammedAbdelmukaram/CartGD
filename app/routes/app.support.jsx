import React from 'react';
import {
  Page,
  Layout,
  Text,
  Card,
  Button,
  BlockStack,
  MediaCard,
  Icon,
  Box,
  List,
  Link,
  InlineStack, VideoThumbnail,
} from "@shopify/polaris";
import {
  EmailMajor,
  SecureMajor,
  LegalMajor
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
    <div style={{marginBottom:26}}>
      <Text variant={"headingXl"}>
        Help & Support
      </Text>
    </div>
    <Layout>
      <Layout.Section>
        <Card>
          <BlockStack gap="500">

            <MediaCard
              title="Getting Started"
              primaryAction={{
                content: 'Watch now',
                onAction: () => {},
              }}
              description="Get familiar with Cart Upsell GM options and features through a detailed yet brief overview."
              popoverActions={[{content: 'Dismiss', onAction: () => {}}]}
              size="small"

            >
              <VideoThumbnail
                videoLength={80}
                thumbnailUrl="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
                onClick={() => console.log('clicked')}
              />
            </MediaCard>



            <Card>

              <div style={{display:"flex",justifyContent:"space-between", alignItems:"center"}}>
                <div style={{display:"flex", alignItems:"center"}}>
                  <div style={{marginTop:2}}>
                    <Icon
                      source={LegalMajor}
                      tone="base"
                    />
                  </div>
                  <span style={{marginLeft:16}}>Terms of Service </span>
                </div>

                <Button variant="secondary">Terms of Service</Button>
              </div>

            </Card>

            <Card>

              <div style={{display:"flex",justifyContent:"space-between", alignItems:"center"}}>
                <div style={{display:"flex", alignItems:"center"}}>
                  <div style={{marginTop:2}}>
                    <Icon
                      source={SecureMajor}
                      tone="base"
                    />
                  </div>
                  <span style={{marginLeft:16}}>Privacy Policy </span>
                </div>

                <Button variant="secondary">Privacy Policy</Button>
              </div>

            </Card>

            <Card>
              <div style={{display:"flex",justifyContent:"space-between", alignItems:"center"}}>
                <div style={{display:"flex", alignItems:"center"}}>
                  <div style={{marginTop:2}}>
                    <Icon
                      source={EmailMajor}
                      tone="base"
                    />
                  </div>
                  <span style={{marginLeft:16}}>Having trouble getting started? </span>
                </div>

                <Button variant="secondary">Contact us</Button>
              </div>

            </Card>






          </BlockStack>
        </Card>
      </Layout.Section>
    </Layout>
  </Page>
);

export default AppAnalytics;
