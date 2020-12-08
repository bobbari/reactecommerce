import React,{Component} from "react";
import './App.css';
import HomepageComponent from "./pages/Home/homepage.component"
import ShopPage from './pages/shop/shop.component'
import { Switch, Route} from "react-router-dom";
import { Header } from "./components/header/Header.component";
import SigninSignup from "./pages/signIn-signup/signin-signup.component"
import {auth,createUserProfileDocument} from './FireBase/FireBase.utils'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       currentUser:""
    }
  }
  unSubsribeFromAuth = null;

  componentDidMount(){
    this.unSubsribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
         userRef.onSnapshot((snapshot) => {
           this.setState({ currentUser: { id: snapshot.id, ...snapshot.data() } }, () => console.log("user ", userAuth, "state ", this.state));
          })
          
      }else{
        this.setState({
          currentUser:userAuth
        })
      }
    })
  }
  componentWillMount(){
    // this.unSubsribeFromAuth();
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
