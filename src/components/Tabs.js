import React, { useState } from "react";
import "../styles/Tabs.css";

const Tabs = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => {
    setActiveIndex(index);
    console.log("button clicked", index);
  };

  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  return (
    <>
      <div className="tabs">
        <button
          type="button"
          className={`tab ${checkActive(1, "active")}`}
          onClick={() => handleClick(1)}
        >
          All Tasks{" "}
        </button>
        <button
          type="button"
          className={`tab ${checkActive(2, "active")}`}
          onClick={() => handleClick(2)}
        >
          My Tasks{" "}
        </button>
        <button
          type="button"
          className={`tab ${checkActive(3, "active")}`}
          onClick={() => handleClick(3)}
        >
          My Streak{" "}
        </button>
      </div>
      {activeIndex === 1 && (
        <div className="panels">
          <div className={`panel ${checkActive(1, "active")}`}>
            <p>
              {" "}
              Tab 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aenean erat ligula, feugiat at felis vitae, porttitor lacinia
              quam.
            </p>
          </div>
        </div>
      )}

      {activeIndex === 2 && (
        <div className="panels">
          <div className={`panel ${checkActive(1, "active")}`}>
            <p>
              {" "}
              Tab 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aenean erat ligula, feugiat at felis vitae, porttitor lacinia
              quam.
            </p>
          </div>
        </div>
      )}

      {activeIndex === 3 && (
        <div className="panels">
          <div className={`panel ${checkActive(1, "active")}`}>
            <p>
              {" "}
              Tab 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aenean erat ligula, feugiat at felis vitae, porttitor lacinia
              quam.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Tabs;
