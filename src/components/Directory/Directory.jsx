import MenuItem from '../MenuItem/MenuItem';

import { connect } from 'react-redux';

import {selectDirectorySections} from '../../Redux/Directory/DirectorySelectors';

import { createStructuredSelector } from 'reselect';

import { DirectoryMenuContainer } from './DirectoryStyles';

const Directory = ({sections}) => (
  <DirectoryMenuContainer>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);