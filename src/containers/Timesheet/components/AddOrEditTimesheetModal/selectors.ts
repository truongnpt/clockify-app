import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) =>
  state.addOrEditTimesheetModal || initialState;

export const selectEditTimesheetModal = createSelector(
  [selectDomain],
  addOrEditTimesheetModalState => addOrEditTimesheetModalState,
);

export const selectInfoTimesheetAdd = createSelector(
  [selectDomain],
  addOrEditTimesheetModalState => addOrEditTimesheetModalState.infoTimesheetAdd,
);

export const selectInfoTimesheetEdit = createSelector(
  [selectDomain],
  addOrEditTimesheetModalState => addOrEditTimesheetModalState.infoTimesheetEdit,
);
