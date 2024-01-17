import React from 'react';
import { useSelector } from 'react-redux';
import AnnouncementCart from "../cartComponents/AnnouncementCart";
import CartItem from "../cartComponents/CartItem";
import AdditionalNotesCart from "../cartComponents/AdditionalNotesCart";
import CheckoutCart from "../cartComponents/CheckoutCart";
import CartHeader from "../cartComponents/cartHeader";
import ProductItem from "../cartComponents/productItem";
import BlockUpsellCart from "../cartComponents/BlockUpsellCart";

const Cart = () => {
  const cartTextColor = useSelector(state => state.designContent.cartTextColor);
  const backgroundColor = useSelector(state => state.designContent.backgroundColor);
  const isUpsellEnabled = useSelector(state => state.upsellContent.isUpsellEnabled);
  const announcementPosition = useSelector(state => state.announcementContent.position);
  const additionalNotesPosition = useSelector(state => state.additionalNotesContent.selectedPosition);

  // Components with their corresponding positions
  const components = [
    { component: <AnnouncementCart />, position: announcementPosition },
    { component: <CartItem />, position: 'top' }, // Assuming CartItem is always at the top
    { component: <AdditionalNotesCart />, position: additionalNotesPosition }
  ];

  // Sort components based on position
  const topComponents = components.filter(c => c.position === 'top');
  const bottomComponents = components.filter(c => c.position === 'bottom');



  const parentDivStyle = {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 440,
    maxWidth: 440,
    position: "fixed",
    top: 0,
    bottom: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: backgroundColor,
    boxShadow: '4px 0 8px -3px rgba(0,0,0,.1)',
    overflow: 'hidden' // Changed to 'hidden' to prevent scrolling on the entire cart
  };

  const h2Style = {
    fontSize: "24px",
    fontWeight: "600",
    color: cartTextColor,
  };

  return (
    <div style={parentDivStyle}>
      <CartHeader h2Style={h2Style} />
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'auto' }}>
        {/* Render components that should be on top */}
        {topComponents.map((item, index) => (
          <div key={`top-component-${index}`}>{item.component}</div>
        ))}

        {/* Upsell block */}
        {isUpsellEnabled && <BlockUpsellCart />}

        {/* Render components that should be on bottom */}
        {bottomComponents.map((item, index) => (
          <div key={`bottom-component-${index}`}>{item.component}</div>
        ))}
      </div>


      <CheckoutCart />
    </div>
  );
};

export default Cart;
