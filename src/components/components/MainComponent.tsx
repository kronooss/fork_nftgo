import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../../pages/HomePage";
import Drops from "../../pages/DropsPage";
import Analytics from "../../pages/AnalyticsPage";
import TopCollection from "./marketComponents/TopCollectionComponent";
import TopMint from "./marketComponents/TopMintComponent";
import TopSales from "./marketComponents/TopSalesComponent";
import Leaderboard from "./marketComponents/LeaderboardComponent";
import Marketplace from "./marketComponents/MarketplaceComponent";
import NewlyAdded from "./marketComponents/NewlyAddedComponent";

const Main = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/drops"} component={Drops} />
      <Route exact path={"/analytics"} component={Analytics} />
      <Route exact path={"/analytics/market-overview"} component={Analytics} />
      <Route
        exact
        path={"/analytics/top-collections"}
        component={TopCollection}
      />
      <Route exact path={"/analytics/newly-added"} component={NewlyAdded} />
      <Route exact path={"/analytics/top-mint"} component={TopMint} />
      <Route exact path={"/analytics/top-sales"} component={TopSales} />
      <Route exact path={"/analytics/leaderboard"} component={Leaderboard} />
      <Route exact path={"/analytics/marketplace"} component={Marketplace} />
    </Switch>
  );
};

export default Main;
