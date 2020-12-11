import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from "../../assets/images/crown.svg"
import  './Header.style.scss'
import {auth} from '../../FireBase/FireBase.utils';
import {connect} from 'react-redux'
const Header = (props) =>{
    console.log("header props ", props);
    return(
        <div className="header">
                <Link className="logo-container" to="/">
                    <Logo  className="logo"/>
                 </Link>
            <div className="options">
                <Link className="option" to="/shop">Shop</Link>
                <Link className="option" to="/shop">contact </Link>
                {
                    props.currentUser ?
                        <div onClick={() => auth.signOut()}>Log out</div>
                        : <Link to="/signin-signup">Sign In</Link>
                }
            </div>
        </div>
    )
}
const mapStateToProps = (state) =>({currentUser:state.user.currentUser});
export default connect(mapStateToProps, null)(Header); 

