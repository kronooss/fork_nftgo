import React from "react";
import { Link } from "react-router-dom";

const MarketTabs = () => {
  function removePreviousActiveClass(className: string) {
    let elements = document.querySelectorAll(`.${className}`);
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.remove("active");
    }
  }

  function addActiveClass(e: any) {
    e.target.classList.contains("tabs-button")
      ? removePreviousActiveClass("tabs-button")
      : removePreviousActiveClass("active");
    e.target.classList.add("active");
  }

  return (
    <div className="w-100 float-left buyer-con main-box">
      <div className="container p-0">
        <div id="myBtnContainer">
          <button onClick={addActiveClass} className="bg-3b3363 tabs-button">
            {/*active class color ----- bg-ff4c41*/}
            <Link to={"/analytics/market-overview"}>Overview</Link>
          </button>
          <button onClick={addActiveClass} className="bg-3b3363 tabs-button">
            <Link to={"/analytics/top-collections"}> Top Collections</Link>
          </button>
          <button onClick={addActiveClass} className="bg-3b3363 tabs-button">
            <Link to={"/analytics/newly-added"}>Newly Added</Link>
          </button>
          <button onClick={addActiveClass} className="bg-3b3363 tabs-button">
            <Link to={"/analytics/top-mint"}>Top Mints</Link>
          </button>
          <button onClick={addActiveClass} className="bg-3b3363 tabs-button">
            <Link to={"/analytics/top-sales"}>Top Sales</Link>
          </button>
          <button onClick={addActiveClass} className="bg-3b3363 tabs-button">
            <Link to={"/analytics/leaderboard"}>Leaderboard</Link>
          </button>
          <button onClick={addActiveClass} className="bg-3b3363 tabs-button">
            <Link to={"/analytics/marketplace"}>Marketplaces</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarketTabs;
