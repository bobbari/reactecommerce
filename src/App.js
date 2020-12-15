import React,{Component} from "react";
import {connect} from 'react-redux';
import {withRouter} from 'react-router'
import { Switch, Route,Redirect} from "react-router-dom";
import {auth,createUserProfileDocument} from './FireBase/FireBase.utils'
import {createStructuredSelector} from 'reselect'

import './App.css';
import HomepageComponent from "./pages/Home/homepage.component"
import ShopPage from './pages/shop/shop.component'
import Header from "./components/header/Header.component";
import SigninSignup from "./pages/signIn-signup/signin-signup.component"
import { setCurrentUser} from './redux/user.action'
import {selectCurrentUser} from './redux/user.selector'
import Checkout from './pages/checkout/Checkout.component'

class App extends Component {
  
  unSubsribeFromAuth = null;

  componentDidMount(){
    const { setCurrentUser} =  this.props;
    this.unSubsribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
         userRef.onSnapshot((snapshot) => {
           setCurrentUser({ id: snapshot.id, ...snapshot.data() });
           if (snapshot.id) {
             this.props.history.push("/")
           }
          })
          
      }else{
        
        setCurrentUser(userAuth );
      }
    })
  }
  componentWillMount(){
    
    // auth.signOut();
  }
  
  render(){
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomepageComponent} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/signin-signup" 
          render={() => (this.props.currentUser) ? <Redirect to="/shop" /> : <SigninSignup /> }/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({currentUser:selectCurrentUser})

const mapDispatchToProps = dipatch=>({setCurrentUser: (user) => dipatch(setCurrentUser(user))})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
