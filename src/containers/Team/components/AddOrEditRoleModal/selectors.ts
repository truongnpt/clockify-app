import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) =>
  state.addOrEditRoleModal || initialState;

export const selectEditRoleModal = createSelector(
  [selectDomain],
  addOrEditRoleModalState => addOrEditRoleModalState,
);

export const selectInfoRoleAdd = createSelector(
  [selectDomain],
  addOrEditRoleModalState => addOrEditRoleModalState.infoRoleAdd,
);

export const selectInfoRoleEdit = createSelector(
  [selectDomain],
  addOrEditRoleModalState => addOrEditRoleModalState.infoRoleEdit,
);
