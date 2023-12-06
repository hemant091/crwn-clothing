import './App.css';
import React, {useEffect} from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import CheckOut from './pages/checkout/checkout.component';

import {Routes, Route, Navigate} from 'react-router-dom';
import { connect } from 'react-redux';
import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import CollectionPage from './pages/collection/collection.component';
import WithSpinner from './components/with-spinner/with-spinner.component.jsx';
import { selectIsCollectionsLoaded } from './redux/shop/shop.selectors.js';

const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const ShopPageWithSpinner = WithSpinner(ShopPage);

const App = ({checkUserSession, isCollectionsLoaded, props, currentUser}) => {

  useEffect(()=>{
    checkUserSession();
  },[checkUserSession])

  return(
    <div>
      <Header/>
      <Routes>
        <Route exact path = '/' element={<HomePage/>} />
        <Route exact path = '/shop' element={<ShopPageWithSpinner isLoading={!isCollectionsLoaded} {...props}/>} >
        {/* <Route exact path = '/shop' element={<ShopPage/>} > */}
          
        </Route>
        <Route path='shop/:id' element={<CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />} />
        {/* <Route path='shop/:id' element={<CollectionPage />} /> */}
        <Route exact path = '/signIn' 
        element={currentUser?<Navigate to="/"/>:<SignInAndSignUp />}/>
        <Route exact path = '/checkout' element={<CheckOut/>}/>
      </Routes>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isCollectionsLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch =>({
  checkUserSession: () => dispatch(checkUserSession())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
