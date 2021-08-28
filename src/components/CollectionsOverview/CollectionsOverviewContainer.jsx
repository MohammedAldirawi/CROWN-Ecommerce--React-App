import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectIsCollectionFetching } from '../../Redux/Shop/ShopSelectors';

import CollectionsOverview from './CollectionsOverview';

import WithSpinner from '../WithSpinner/WithSpinner';

import { compose } from "redux";

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});
  
const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);
  
export default CollectionsOverviewContainer;