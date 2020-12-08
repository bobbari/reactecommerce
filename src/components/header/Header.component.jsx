import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from "../../assets/images/crown.svg"
import  './Header.style.scss'
import {auth} from '../../FireBase/FireBase.utils';

export const Header = ({currentUser}) =>{
    return(
        <div className="header">
                <Link className="logo-container" to="/">
                    <Logo  className="logo"/>
                 </Link>
            <div className="options">
                <Link className="option" to="/shop">Shop</Link>
                <Link className="option" to="/shop">contact </Link>
                {
                    currentUser ?
                        <div onClick={() => auth.signOut()}>Log out</div>
                        : <Link to="/signin-signup">Sign In</Link>
                }
            </div>
        </div>
    )
}

