import React from "react";

const Tab = props => {
  const selected = "tab";
  return (
    <div
      className={`tab ${props.selected ? "active-tab" : ""}`}
      onClick={() => props.selectTabHandler(props.tab)}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
