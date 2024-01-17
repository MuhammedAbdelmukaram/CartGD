import React, { useState } from 'react';

const VerticalProgressBar = () => {
  const [progress, setProgress] = useState(23);

  const checkpoints = [23, 50, 75, 100];

  const progressBarStyle = {
    width: '10px',
    height: '447px',
    backgroundColor: '#ccc', // Background color of the unfilled bar
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    marginLeft:21,
    marginTop:2
  };

  const fillingStyle = {
    height: `${progress * 6}px`, // 6px for each percentage point (600px / 100)
    backgroundColor: '#333333', // Color of the filled portion
    borderRadius: '8px',
    width: '100%',
    position: 'absolute',
    top: 0, // Start filling from the top
  };

  const checkpointStyle = {
    width: '100%',
    padding: '4px 0',
    textAlign: 'center',
    cursor: 'pointer',
    position: 'absolute',
  };

  const handleProgressChange = (checkpointValue) => {
    setProgress(checkpointValue);
  };

  return (
    <div style={progressBarStyle}>
      <div style={fillingStyle}></div> {/* Filling element */}
      {checkpoints.map((checkpointValue, index) => (
        <div
          key={index}
          style={{ ...checkpointStyle, top: `${600 - checkpointValue * 6}px` }} // Adjust position for each checkpoint
          onClick={() => handleProgressChange(checkpointValue)}
        >
          {/* Add checkpoint content here if needed */}
        </div>
      ))}
    </div>
  );
};

export default VerticalProgressBar;
