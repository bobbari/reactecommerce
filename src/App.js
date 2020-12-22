// system dependence
import React,{Component} from "react";
import {connect} from 'react-redux';
// import {withRouter} from 'react-router'
import { Switch, Route,Redirect} from "react-router-dom";
import {auth,createUserProfileDocument,AddCollectionsAndDocuments} from './FireBase/FireBase.utils'
import {createStructuredSelector} from 'reselect'

// user defined import
import './App.css';
import HomepageComponent from "./pages/Home/homepage.component"
import ShopPage from './pages/shop/shop.component'
import Header from "./components/header/Header.component";
import SigninSignup from "./pages/signIn-signup/signin-signup.component"
import {setCurrentUser} from './redux/user.action'
import {selectCurrentUser} from './redux/user.selector'
import Checkout from './pages/checkout/Checkout.component'
import { selectCollectionForPreview} from './redux/shop/shop.selector'

class App extends Component {
  
  unSubsribeFromAuth = null;
  
  componentDidMount(){
    const { setCurrentUser,CollectionsArray} =  this.props;
    this.unSubsribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
         userRef.onSnapshot((snapshot) => {
           setCurrentUser({ id: snapshot.id, ...snapshot.data() });
           if (snapshot.id) {
            //  this.props.history.push("/")
           }
          })
          
      }else{
        setCurrentUser(userAuth );
      }
    })
   
    // AddCollectionsAndDocuments("collections", CollectionsArray.map(({ title, items }) => ({ title, items })))
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
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/signin-signup" render={() => (this.props.currentUser) ? <Redirect to="/" /> : <SigninSignup /> }/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
  // CollectionsArray:selectCollectionForPreview
})

const mapDispatchToProps = dipatch=>({setCurrentUser: (user) => dipatch(setCurrentUser(user))})

export default connect(mapStateToProps, mapDispatchToProps)(App);
