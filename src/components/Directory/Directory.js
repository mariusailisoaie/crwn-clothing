import React from 'react';

import MenuItem from '../MenuItem/MenuItem';

import './Directory.scss';

import { connect } from 'react-redux';
import { sectionsSelector } from '../../selectors/directorySelector';
import { createStructuredSelector } from 'reselect';

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    { sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={ id } { ...otherSectionProps } />
    )) }
  </div>
)

const mapStateToProps = createStructuredSelector({
  sections: sectionsSelector
});

export default connect(mapStateToProps)(Directory);