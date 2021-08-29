import {useEffect} from 'react';

import { GlobalStyle } from './GlobalStyles';

import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from "./pages/Homepage/Homepage";

import ShopPage from './pages/Shop/Shop';

import Header from './components/Header/Header';

import SignInAndSignUpPage from './pages/SignInAndSignUp/SignInAndSignUp';

import { auth, createUserProfileDocument } from './Firebase/FirebaseUtils';

import {connect} from 'react-redux';

import {setCurrentUser} from './Redux/User/UserAction';

import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from './Redux/User/UserSelectors';

import Checkout from './pages/Checkout/Checkout';


const App = ({setCurrentUser, currentUser}) => {

  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }, [setCurrentUser])

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/Checkout' component={Checkout} />
        <Route
          exact
          path='/signin'
          render={() =>
            currentUser ? (
              <Redirect to='/' />
            ) : (
              <SignInAndSignUpPage />
            )
          }
        />        
      </Switch>
    </div>
  );
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);