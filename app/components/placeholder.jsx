import React, { useState } from 'react';
import { IllustrationMajor, ViewMinor, HideMinor } from "@shopify/polaris-icons";
import { useDispatch, useSelector } from "react-redux";
import { selectPlaceholder } from "../redux/placeholderSlice";
import { Icon } from "@shopify/polaris";

const Placeholder = ({  text, icon, isContentEnabled }) => {
  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.placeholder.selected);

  const statusIcon = isContentEnabled ? ViewMinor : HideMinor;

  const isSelected = selected === text;

  const defaultStyle = {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '5px',
    justifyContent: 'flex-start',
    background: isSelected ? '#eaeaea' : (hover ? '#ebebeb' : '#fff'),
    padding: '0px 16px',
    height: 'auto',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const handleClick = () => {
    dispatch(selectPlaceholder(text));
  };

  return (
    <div
      style={{ ...defaultStyle, display: "flex", alignItems: "center", justifyContent: "space-between" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleClick}
    >

      <div style={{ display: "flex", justifyContent: "flex-start", alignItems:"center" }}>
        <div style={{ margin: 0 }}>
          {icon}
        </div>
        <p style={{ marginLeft: 20, padding:10 }}>{text}</p>
      </div>

      {text !== "Design" && (
        <div style={{ margin: 0 }}>
          <Icon source={statusIcon} />
        </div>
      )}

    </div>
  );
};

export default Placeholder;
