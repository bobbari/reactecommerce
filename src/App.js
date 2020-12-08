import React,{useState,useEffect,Component} from "react";
import './App.css';
import HomepageComponent from "./pages/Home/homepage.component"
import ShopPage from './pages/shop/shop.component'
import { Switch, Route, Link, useHistory, useLocation, useParams } from "react-router-dom";
import { Header } from "./components/header/Header.component";
import SigninSignup from "./pages/signIn-signup/signin-signup.component"
import {auth} from './FireBase/FireBase.utils'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       currentUser:""
    }
  }
  unSubsribeFromAuth = null;
  componentDidMount(){
    auth.onAuthStateChanged((user)=>{
      this.setState({
        currentUser:user
      })
      console.log("user ", user);
    })
  }
  componentWillMount(){
    // this.unSubsribeFromAuth();
    //  auth.signOut()
  }
  
  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomepageComponent} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin-signup" component={SigninSignup} />
        </Switch>
      </div>
    );
  }
}

export default App;
