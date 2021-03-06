import React from "react";
import PropTypes from "prop-types";

const Tab = props => {
  const selectedTab = "tab";
  return (
    <div
      className={`tab ${props.selectedTab ? "active-tab" : ""}`}
      onClick={() => props.selectTabHandler(props.tab)}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  tab: PropTypes.string,
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func
};

export default Tab;
