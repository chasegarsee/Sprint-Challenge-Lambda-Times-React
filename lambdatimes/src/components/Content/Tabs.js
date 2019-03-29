import React from "react";
import Tab from "./Tab";
const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map(tab => {
          return (
            <Tab
              tab={tab}
              selectedTab={props.selected}
              selectTabHandler={props.selectTabHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
