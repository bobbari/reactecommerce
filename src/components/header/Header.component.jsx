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
                <Link className="option" to="/signin-signup">
                    {
                        currentUser ? (
                            <div onClick={()=>auth.signOut()}>
                                Log out
                            </div>
                        ): (
                                <Link t0="/signin-signup">Sign In</Link>
                        )
                    }
                 </Link>
            </div>
        </div>
    )
}

