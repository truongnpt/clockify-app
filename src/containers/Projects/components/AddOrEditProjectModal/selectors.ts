import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) =>
  state.addOrEditProjectModal || initialState;

export const selectEditProjectModal = createSelector(
  [selectDomain],
  addOrEditProjectModalState => addOrEditProjectModalState,
);

export const selectInfoProjectAdd = createSelector(
  [selectDomain],
  addOrEditProjectModalState => addOrEditProjectModalState.infoProjectAdd,
);

export const selectInfoProjectEdit = createSelector(
  [selectDomain],
  addOrEditProjectModalState => addOrEditProjectModalState.infoProjectEdit,
);
