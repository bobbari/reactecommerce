import React,{Component} from "react";
import './App.css';
import HomepageComponent from "./pages/Home/homepage.component"
import ShopPage from './pages/shop/shop.component'
import { Switch, Route} from "react-router-dom";
import Header from "./components/header/Header.component";
import SigninSignup from "./pages/signIn-signup/signin-signup.component"
import {auth,createUserProfileDocument} from './FireBase/FireBase.utils'
import {connect} from 'react-redux';
import { setCurrentUser} from './redux/user.action'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       currentUser:""
    }
  }
  unSubsribeFromAuth = null;

  componentDidMount(){
    const { setCurrentUser} =  this.props;
    this.unSubsribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
         userRef.onSnapshot((snapshot) => {
          //  console.log("snapshot ", snapshot);
           setCurrentUser({ id: snapshot.id, ...snapshot.data() });
          //  this.setState({ currentUser: { id: snapshot.id, ...snapshot.data() } }, () => console.log("user ", userAuth, "state ", this.state));
          })
          
      }else{
        // this.setState({ currentUser:userAuth})
        setCurrentUser(userAuth );
      }
    })
  }
  componentWillMount(){
    // this.unSubsribeFromAuth();
    // auth.signOut();
  }
  
  render(){
    return (
      <div className="App">
        {/* <Header currentUser={this.state.currentUser}/> */}
        <Header />
        <Switch>
          <Route exact path="/" component={HomepageComponent} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin-signup" component={SigninSignup} />
        </Switch>
      </div>
    );
  }
}
const mapDispatchToProps = dipatch=>({
  setCurrentUser: (user) => dipatch(setCurrentUser(user))
})
export default connect(null, mapDispatchToProps)(App);
// export default App;