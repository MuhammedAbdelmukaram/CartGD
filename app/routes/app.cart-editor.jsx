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
import Placeholder from "../components/placeholder";

import {useLoaderData, useNavigate} from "@remix-run/react";

import {
  IllustrationMajor, EmailNewsletterMajor, ConfettiMajor, DiscountAutomaticMajor, SecureMajor, NoteMajor
  , MobileChevronMajor, ViewMinor, HideMinor, CartUpMajor
} from '@shopify/polaris-icons';
import {useSelector} from "react-redux";
import DesignContent from "../Sections/DesignContent";
import AnnouncementContent from "../Sections/AnnouncementContent";
import RewardsContent from "../Sections/RewardsContent";
import DiscountContent from "../Sections/DiscountContent";
import AdditionalNotesContent from "../Sections/AdditionalNotesContent";
import TrustBadgesContent from "../Sections/TrustBadgesContent";
import Cart from "../Sections/Cart";
import UpsellContent from "../Sections/UpsellContent";
import {json} from "@remix-run/node";
import {authenticate} from "../shopify.server";


const Code = ({children}) => (
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


export async function loader({request}) {
  // Assuming admin.graphql is a method that internally uses fetch and returns a Response object
  try {
    const {admin} = await authenticate.admin(request);
    const query = `
        {
          products(first: 250) {
            edges {
              node {
                id
                title
                handle
                vendor
                productType
                variants(first: 1) {
                  edges {
                    node {
                      price
                      inventoryQuantity
                    }
                  }
                }
                tags
              }
            }
          }
        }`;

    const response = await admin.graphql(query);

    // Parse the JSON body of the response
    const jsonResponse = await response.json();


    if (!jsonResponse || !jsonResponse.data || !jsonResponse.data.products) {
      console.error("GraphQL response is missing 'data' or 'data.products'");
      return json({products: []});
    }

    const products = jsonResponse.data.products.edges.map(edge => edge.node);
    return json({products});
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return json({products: []});
  }
}


const AppCartEditor = () => {
  const selectedPlaceholder = useSelector((state) => state.placeholder.selected);

  const {isDesignContentEnabled} = useSelector((state) => state.designContent);
  const {isAnnouncementContentEnabled} = useSelector((state) => state.announcementContent);
  const {isDiscountContentEnabled} = useSelector((state) => state.discountContent);
  const {isAdditionalContentEnabled} = useSelector((state) => state.additionalNotesContent);
  const {isTrustBadgesEnabled} = useSelector((state) => state.trustBadgesContent);
  const {isUpsellEnabled} = useSelector((state) => state.upsellContent);

  const {products} = useLoaderData();


  const renderContentForSelectedPlaceholder = () => {
    switch (selectedPlaceholder) {
      case 'Design':
        return <DesignContent/>;
      case 'Announcement':
        return <AnnouncementContent/>;
      case 'Rewards':
        return <RewardsContent/>;
      case 'Upsell':
        return <UpsellContent products={products}/>;
      case 'Discount':
        return <DiscountContent/>;
      case 'Additional notes':
        return <AdditionalNotesContent/>;
      case 'Trust badges':
        return <TrustBadgesContent/>;
      default:
        return <Text as="p">Please select a placeholder</Text>;
    }
  };


  const navigate = useNavigate();

  // Function to handle navigation
  const handleNavigateToApp = () => {
    navigate('/app');
  };

  return (
    <Page>


      <div style={{width: "100%", display: "flex", justifyContent: "flex-end", marginRight: 16}}>

      </div>


      <Layout>

        <div style={{position: "absolute", left: 0, display: "flex", width: 'calc(100% - 540px)', marginTop: 26}}>
          <Layout.Section variant="oneThird">
            <div style={{display: "flex", alignItems: "center", marginLeft: 14}}>
              <div style={{cursor: "pointer"}} onClick={handleNavigateToApp}>
                <Icon
                  source={MobileChevronMajor}
                  tone="base"
                />
              </div>
              <span style={{fontSize: 20, fontWeight: "500", marginLeft: 10}}>
                Cart Editor
              </span>
            </div>

            <div style={{marginTop: 32, maxWidth: "320px"}}>
              <Card>
                <BlockStack gap="500">
                  <Text as="p" variant="bodyMd">
                    <BlockStack gap="200">
                      <Placeholder height="32px" text={"Design"} icon={<Icon source={IllustrationMajor} tone="base"/>}
                                   isContentEnabled={isDesignContentEnabled} style={{margin: 0}}/>
                      <Placeholder height="32px" text={"Announcement"} icon={<Icon source={EmailNewsletterMajor}/>}
                                   isContentEnabled={isAnnouncementContentEnabled} style={{margin: 0}}/>
                      {/*<Placeholder height="32px" text={"Rewards"} icon={<Icon source={ConfettiMajor}/>} tone="base" style={{margin: 0}}/>} />*/}
                      <Placeholder height="32px" text={"Upsell"} icon={<Icon source={CartUpMajor}/>} tone="base"
                                   isContentEnabled={isUpsellEnabled} style={{margin: 0}}/>
                      <Placeholder height="32px" text={"Discount"} icon={<Icon source={DiscountAutomaticMajor}/>}
                                   isContentEnabled={isDiscountContentEnabled} style={{margin: 0}}/>
                      <Placeholder height="32px" text={"Additional notes"} icon={<Icon source={NoteMajor}/>}
                                   isContentEnabled={isAdditionalContentEnabled} style={{margin: 0}}/>
                      <Placeholder height="32px" text={"Trust badges"} icon={<Icon source={SecureMajor}/>}
                                   isContentEnabled={isTrustBadgesEnabled} style={{margin: 0}}/>
                    </BlockStack>
                  </Text>
                </BlockStack>
              </Card>
            </div>
          </Layout.Section>


          <Layout.Section>
            <div style={{marginBottom: 24}}>

              <BlockStack gap="500">
                <div style={{display: "flex", justifyContent: "flex-end", flexDirection: "row"}}>
                  <Button>Save</Button>
                  <div style={{minWidth: "fit-content", maxWidth: "fit-content", marginLeft: 14}}>
                    <Button variant="primary">Activate</Button>
                  </div>
                </div>
              </BlockStack>
            </div>

            <BlockStack gap="500">
              {renderContentForSelectedPlaceholder()}
            </BlockStack>


          </Layout.Section>
        </div>

        <Cart/>

      </Layout>

    </Page>
  );
};

export default AppCartEditor;
