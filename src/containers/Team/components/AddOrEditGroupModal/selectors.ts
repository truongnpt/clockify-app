import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) =>
  state.addOrEditGroupModal || initialState;

export const selectEditGroupModal = createSelector(
  [selectDomain],
  addOrEditGroupModalState => addOrEditGroupModalState,
);

export const selectInfoGroupAdd = createSelector(
  [selectDomain],
  addOrEditGroupModalState => addOrEditGroupModalState.infoGroupAdd,
);

export const selectInfoGroupEdit = createSelector(
  [selectDomain],
  addOrEditGroupModalState => addOrEditGroupModalState.infoGroupEdit,
);
