import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const AnnouncementCart = () => {
  const {
    isAnnouncementContentEnabled,
    timeValue,
    announcementText,
    announcementFontSize,
    announcementFontWeight,
    backgroundColor,
    borderColor,
    timeLeftColor,
    timeLeftFontSize,
    timeLeftFontWeight,
  } = useSelector((state) => state.announcementContent);
  const cartTextColor = useSelector(state => state.designContent.cartTextColor);

  const [secondsLeft, setSecondsLeft] = useState(0);

  // Parse timeValue (MM:SS format) into total seconds
  const parseTimeValue = (timeStr) => {
    const [minutes, seconds] = timeStr.split(':').map(Number);
    return minutes * 60 + seconds;
  };

  useEffect(() => {
    setSecondsLeft(parseTimeValue(timeValue));
  }, [timeValue]);

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const timer = setInterval(() => {
      setSecondsLeft(secondsLeft - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft]);

  // Format seconds back to MM:SS format
  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  if (!isAnnouncementContentEnabled) {
    return null;
  }

  return (
    <div style={{ backgroundColor, borderColor, textAlign: "center", padding: "18px 33px" }}>
      <div>
        <span
          style={{
            color: cartTextColor,
            fontSize: announcementFontSize,
            fontWeight: announcementFontWeight ? 'bold' : 'normal', // Apply fontWeight conditionally
          }}
        >
          {announcementText}
        </span>
        {secondsLeft > 0 && (
          <div style={{ marginTop: '10px' }}>
            <span
              style={{
                color: timeLeftColor,
                fontSize: timeLeftFontSize, // Use the new variable for font size
                fontWeight: timeLeftFontWeight ? 'bold' : 'normal', // Use the new variable for font weight
              }}
            >
              Time Left: {formatTime(secondsLeft)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};


export default AnnouncementCart;
