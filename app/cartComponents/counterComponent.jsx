import React, { useState } from 'react';

const CounterComponent = () => {
  const [count, setCount] = useState(2);

  const decrementCount = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div style={{
      display: 'flex',
      width: '124px',
      height: '34px',
      border: '1px solid rgb(207 207 207)',
      borderRadius: '4px',
      overflow: 'hidden',
      fontSize: '16px',
      fontWeight: 'bold',
    }}>
      <button onClick={decrementCount} style={{
        width: '33.33%',
        height: '100%',
        border: 'none',
        background: 'none',
        cursor: 'pointer',
      }}>
        -
      </button>
      <div style={{
        width: '33.33%',
        height: '100%',
        borderLeft:'1px solid rgb(207 207 207)',
        borderRight: '1px solid rgb(207 207 207)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {count}
      </div>
      <button onClick={incrementCount} style={{
        width: '33.33%',
        height: '100%',
        border: 'none',
        background: 'none',
        cursor: 'pointer',
      }}>
        +
      </button>
    </div>
  );
};

export default CounterComponent;
