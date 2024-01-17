import { useEffect } from "react";
import { json } from "@remix-run/node";
import { useActionData, useNavigate, useSubmit } from "@remix-run/react";

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
  CalloutCard,
  MediaCard,
  VideoThumbnail, Icon
} from "@shopify/polaris";
import { authenticate } from "../shopify.server";
import VerticalProgressBar from "../components/verticalProgressBar";
import React from 'react';
import {EmailMajor} from "@shopify/polaris-icons";
import {selectPlaceholder} from "../redux/placeholderSlice";
import {useDispatch} from "react-redux";


export const loader = async ({ request }) => {
  await authenticate.admin(request);

  return null;
};

export const action = async ({ request }) => {
  const { admin } = await authenticate.admin(request);
  const color = ["Red", "Orange", "Yellow", "Green"][
    Math.floor(Math.random() * 4)
  ];
  const response = await admin.graphql(
    `#graphql
      mutation populateProduct($input: ProductInput!) {
        productCreate(input: $input) {
          product {
            id
            title
            handle
            status
            variants(first: 10) {
              edges {
                node {
                  id
                  price
                  barcode
                  createdAt
                }
              }
            }
          }
        }
      }`,
    {
      variables: {
        input: {
          title: `${color} Snowboard`,
          variants: [{ price: Math.random() * 100 }],
        },
      },
    }
  );
  const responseJson = await response.json();

  return json({
    product: responseJson.data.productCreate.product,
  });
};

export default function Index() {

  const navigate = useNavigate();
  const actionData = useActionData();
  const dispatch = useDispatch();
  const submit = useSubmit();

  const handleAddUpsells = () => {
    // Update the selected placeholder in Redux state
    dispatch(selectPlaceholder('Upsell'));

    // Navigate to the cart editor page
    navigate('/app/cart-editor');
  };

  const handleContactUs = () => {
    // Update the selected placeholder in Redux state
    dispatch(selectPlaceholder('Support'));

    // Navigate to the support page
    navigate('/app/support');
  };



  return (

    <Page>
      <div style={{marginBottom:26}}>
        <Text variant={"headingXl"}>
          Welcome to Cart Upsell GD
        </Text>
      </div>
      <div style={{marginBottom:60}}>
        <BlockStack gap="500">
          <Layout>
            <Layout.Section >

              <MediaCard
                title="Step by step manual"
                primaryAction={{
                  content: 'Watch now',
                  onAction: () => {},
                }}
                description={`Get familiar with Cart Upsell GM options and features through a detailed yet brief overview.`}
                popoverActions={[{content: 'Dismiss', onAction: () => {}}]}
              >
                <VideoThumbnail
                  videoLength={80}
                  thumbnailUrl="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
                  onClick={() => console.log('clicked')}
                />
              </MediaCard>

            </Layout.Section>


            <Layout.Section>
              <Card>
                <div style={{display: "flex", flexDirection: "row"}}>
                  <BlockStack gap="500">
                    <BlockStack gap="200">
                      <Text as="h2" variant="headingLg">
                        3-step guide
                      </Text>
                      <Text variant="bodyLg" as="p">
                        (2 min setup)
                      </Text>
                    </BlockStack>

                    <div style={{display:"flex"}} >
                      <div style={{flex:0.07}}>

                        <VerticalProgressBar/>

                      </div>

                      <div style={{flex: 0.92}}>
                        <BlockStack gap="200">

                          <CalloutCard
                            title="Design your ideal cart"
                            illustration="https://cdn.shopify.com/s/files/1/0616/5780/9033/files/Go_to_Edit_Cart.png?v=1704482707"
                            primaryAction={{
                              content: 'Open Cart Editor',
                              onAction: () => navigate('/app/cart-editor'),
                            }}
                          >
                            <p>Personalize your cart to match your brand perfectly with UpCart's user-friendly editor and design options</p>
                          </CalloutCard>
                          <CalloutCard
                            title="Add Upsells"
                            illustration="https://cdn.shopify.com/s/files/1/0616/5780/9033/files/Activate_Upsell.png?v=1704482700"
                            primaryAction={{
                              content: 'Add Upsells',
                              onAction: handleAddUpsells,
                            }}
                          >
                            <p>Increase your average order value (AOV) effortlessly with Cart Upsell GD effective upsell offers. Easily add upsells to your cart drawer using cart editor.</p>
                          </CalloutCard>

                          <CalloutCard
                            title="Activate cart upsell GD"
                            illustration="https://cdn.shopify.com/s/files/1/0616/5780/9033/files/Enable_Theme.png?v=1704482703"
                            primaryAction={{
                              content: 'Open Theme Settings',
                              url: '#',
                            }}
                          >
                            <p>Activate Cart Upsell GD app embed block in your Theme editor. Find it in Theme settings App embeds. Don't forget to press save.</p>
                          </CalloutCard>
                        </BlockStack>



                      </div>




                    </div>


                  </BlockStack>


                  <div style={{flex: 0.15}}>


                  </div>


                </div>
              </Card>


              <div style={{marginTop:26}}>
                <Card>
                  <BlockStack>
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

                        <Button variant="secondary" onClick={handleContactUs}>Contact us</Button>
                      </div>

                    </Card>

                  </BlockStack>

                </Card>
              </div>
            </Layout.Section>



          </Layout>
        </BlockStack>
      </div>
    </Page>
  );
}
