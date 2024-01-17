import React from 'react';
import { useSelector } from 'react-redux';
import paymentProcessors from '../util/paymentProcessors';

const TrustBadgesCart = () => {
  const {
    isTrustBadgesEnabled,
    presetImage,
    selectedPaymentProcessors,
  } = useSelector(state => state.trustBadgesContent);

  if (!isTrustBadgesEnabled || presetImage !== 'paymentProcessors') {
    return null;
  }



  const iconStyle = {
    height: '26px',
    marginRight: '4px',
    marginBottom: '4px'
  };

  return (
    <div style={{ maxWidth: '430px', display: 'flex', flexWrap: 'wrap' }}>
      {selectedPaymentProcessors.map(processorValue => {
        const processor = paymentProcessors.find(option => option.value === processorValue);
        if (!processor) return null;

        return (
          <img
            key={processor.value}
            src={processor.icon}
            alt={processor.label}
            style={{ height: '26px', marginRight: '4px', marginBottom: '4px' }}
          />
        );
      })}
    </div>
  );
};

export default TrustBadgesCart;
