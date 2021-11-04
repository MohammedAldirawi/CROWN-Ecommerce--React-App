import {useEffect, lazy, Suspense} from 'react';

import { GlobalStyle } from './GlobalStyles';

import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/Header/Header';

import Spinner from './components/Spinner/Spinner';

import { auth, createUserProfileDocument } from './Firebase/FirebaseUtils';

import {connect} from 'react-redux';

import {setCurrentUser} from './Redux/User/UserAction';

import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from './Redux/User/UserSelectors';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';


const HomePage = lazy(() => import('./pages/Homepage/Homepage'));
const ShopPage = lazy(() => import('./pages/Shop/Shop'));
const SignInAndSignUpPage = lazy(() => import('./pages/SignInAndSignUp/SignInAndSignUp'));
const Checkout = lazy(() => import('./pages/Checkout/Checkout'));


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
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
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
          </Suspense>
        </ErrorBoundary>
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