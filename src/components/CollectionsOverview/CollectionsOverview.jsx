import CollectionPreview from '../CollectionPreview/CollectionPreview';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import {selectCollectionsForPreview} from '../../Redux/Shop/ShopSelectors';

import { CollectionsOverviewContainer } from './CollectionsOverviewStyles';

const CollectionsOverview = ({ collections }) => (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionsOverviewContainer>
);
  
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});
  
export default connect(mapStateToProps)(CollectionsOverview);