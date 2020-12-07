import React,{useState,useEffect} from "react";
import './App.css';
import HomepageComponent from "./pages/Home/homepage.component"
import ShopPage from './pages/shop/shop.component'
import { Switch, Route, Link, useHistory, useLocation, useParams } from "react-router-dom";
import { Header } from "./components/header/Header.component";

function App() {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomepageComponent} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
