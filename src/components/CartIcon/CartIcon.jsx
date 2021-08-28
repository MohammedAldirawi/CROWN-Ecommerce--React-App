import { connect } from 'react-redux';

import { toggleCartHidden } from '../../Redux/Cart/CartAction';

import {selectCartItemsCount} from '../../Redux/Cart/CartSelcetors';

import { createStructuredSelector } from 'reselect';

import { CartContainer, ItemCountContainer, ShoppingIcon } from './CartIconStyles';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <CartContainer onClick={toggleCartHidden}>
        <ShoppingIcon />
        <ItemCountContainer> {itemCount} </ItemCountContainer>
    </CartContainer>
);

const mapDispatchToProps =  dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);