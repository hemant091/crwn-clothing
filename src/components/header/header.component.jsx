import React from "react";
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils.js'
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { connect } from "react-redux";
import { selectCartHidden } from "../../redux/cart/cart.selectors.js";
import { selectCurrentUser } from "../../redux/user/user.selectors.js";
import { createStructuredSelector } from "reselect";
import CartIcon from "../cart-icon/cart-icon.component.jsx";
import CartDropdown from "../cart-dropdown/cart-dropdown.component.jsx";
import './header.styles.scss';


const Header = ({currentUser, hidden}) => (
    <div className="header">
        <Link className="logo-container" to='/'>
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/contact">
                CONTACT
            </Link>
            {
                currentUser?
                    currentUser.userAuth!==null?
                    (<div className="option" onClick={()=>auth.signOut()}>
                        SIGN OUT
                    </div>):
                    (<Link className="option" to="/signIn">
                        SIGN IN
                    </Link>):
                (<Link className="option" to="/signIn">
                    SIGN IN
                </Link>)

            }
            <div className="option">
                <CartIcon/>
            </div>
        </div>
        {
            hidden ? null:(<CartDropdown />)
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);