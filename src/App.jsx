import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, MapView, RestaurantsList, AttractionsList, SearchResult } from "./pages";
import { PlaceDetails } from "./pages/templates";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route path={"/map"}>
          <MapView />
        </Route>
        <Route exact path={"/restaurants"}>
          <RestaurantsList />
        </Route>
        <Route exact path={"/attractions"}>
          <AttractionsList />
        </Route>
        <Route path={"/search"}>
          <SearchResult />
        </Route>
        <Route path={"/:type/:id"}>
          <PlaceDetails />
        </Route>
        <Route path={"/login"}>
          <Login/>
        </Route>
        <Route path={"/cart"}>
          <Cart/>
        </Route>
        <Route path={"/checkout"}>
          <CheckOut/>
        </Route>
        
      </Switch>
      
    </>
  )
}

export default App
