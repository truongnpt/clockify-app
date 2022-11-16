import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) =>
  state.addOrEditClientModal || initialState;

export const selectEditClientModal = createSelector(
  [selectDomain],
  addOrEditClientModalState => addOrEditClientModalState,
);

export const selectInfoClientAdd = createSelector(
  [selectDomain],
  addOrEditClientModalState => addOrEditClientModalState.infoClientAdd,
);

export const selectInfoClientEdit = createSelector(
  [selectDomain],
  addOrEditClientModalState => addOrEditClientModalState.infoClientEdit,
);
