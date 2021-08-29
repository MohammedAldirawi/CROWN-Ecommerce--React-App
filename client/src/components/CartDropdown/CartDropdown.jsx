import CartItem from '../CartItem/CartItem';

import { connect } from 'react-redux';

import {selectCartItems} from '../../Redux/Cart/CartSelcetors';

import { createStructuredSelector } from 'reselect';

import { withRouter } from 'react-router-dom';

import {toggleCartHidden} from '../../Redux/Cart/CartAction';

import { CartDropdownButton, CartDropdownContainer, CartItemsContainer, EmptyMessageContainer } from './CartDropdownStyles';


// connect passes dispatch into components as a prop if it does not supply as a second argument on connect(..,..); 


const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
      )}
    </CartItemsContainer>
    <CartDropdownButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CartDropdownButton>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));