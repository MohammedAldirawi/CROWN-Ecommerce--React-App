import { ReactComponent as Logo } from '../Assets/Crown.svg';

import { auth } from '../../Firebase/FirebaseUtils';

import { connect } from 'react-redux';

import CartIcon from '../CartIcon/CartIcon';

import CartDropdown from '../CartDropdown/CartDropdown';

import {selectCurrentUser} from '../../Redux/User/UserSelectors';

import {selectCartHidden} from '../../Redux/Cart/CartSelcetors';

import { createStructuredSelector } from 'reselect';

import { HeaderContainer, LogoContainer, OptionDiv, OptionLink, OptionsContainer } from './HeaderStyles';


const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to='/shop'>
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionDiv onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionDiv>
      ) : (
        <OptionLink to='/signin'>
          SIGN IN
        </OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    { hidden ? null : <CartDropdown />}
    </HeaderContainer>
);
  
const mapStateToProps = createStructuredSelector({ // to add more selectors
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);