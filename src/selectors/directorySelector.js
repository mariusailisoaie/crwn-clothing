import { createSelector } from 'reselect';

const directorySelector = state => state.directory;

export const sectionsSelector = createSelector([directorySelector], directory => directory.sections);
