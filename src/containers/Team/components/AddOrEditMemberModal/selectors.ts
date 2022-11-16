import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) =>
  state.addOrEditMemberModal || initialState;

export const selectEditMemberModal = createSelector(
  [selectDomain],
  addOrEditMemberModalState => addOrEditMemberModalState,
);

export const selectInfoMemberAdd = createSelector(
  [selectDomain],
  addOrEditMemberModalState => addOrEditMemberModalState.infoMemberAdd,
);

export const selectInfoMemberEdit = createSelector(
  [selectDomain],
  addOrEditMemberModalState => addOrEditMemberModalState.infoMemberEdit,
);
