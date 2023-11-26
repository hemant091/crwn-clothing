import './App.css';
import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import CheckOut from './pages/checkout/checkout.component';

import {Routes, Route, Navigate} from 'react-router-dom';
import {auth, createUserProfileDocument} from './firebase/firebase.utils.js';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import CollectionPage from './pages/collection/collection.component';


class App extends React.Component {

  unsubscribeFromAuth = null;

  state = {
    loading: true
  };
  

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot =>{
          setCurrentUser({
            id: snapShot.id,
             ...snapShot.data()
          });
          
        });
      }
      setCurrentUser(userAuth);
      this.setState({loading: false});
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  

  render() {
    return(
      <div>
        <Header/>
        <Routes>
          <Route exact path = '/' element={<HomePage/>} />
          <Route exact path = '/shop' element={<ShopPage/>} >
            
          </Route>
          <Route path='shop/:id' element={<CollectionPage />} />
          <Route exact path = '/signIn' 
          element={this.props.currentUser?<Navigate to="/"/>:<SignInAndSignUp />}/>
          <Route exact path = '/checkout' element={<CheckOut/>}/>
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user=>dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
