import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the AddOrEditTimesheetModal container
export const initialState: ContainerState = {
  infoTimesheetEdit: null,
  editTimesheetResult: null,
  error: null,
  loading: false,
  infoTimesheetAdd: null,
  addTimesheetResult: null,
  showModal: false,
};

const addOrEditTimesheetModalSlice = createSlice({
  name: 'addOrEditTimesheetModal',
  initialState,
  reducers: {
    setEventClickButton(state, action: PayloadAction<any>) {
      state.showModal = action.payload;
    },
    addTimesheetToLibrary(state, action: PayloadAction<any>) {
      const { title } = action.payload;
      state.loading = true;
      state.infoTimesheetAdd = {
        title,
      };
    },
    doEditTimesheet(state) {
      state.loading = true;
    },
    setInfoTimesheetEdit(state, action: PayloadAction<any>) {
      const { id, title } = action.payload;
      state.infoTimesheetEdit = {
        idItem: id,
        infoItem: {
          title,
          id,
        },
      };
    },
    successAddTimesheet(state, action: PayloadAction<any>) {
      state.loading = false;
      state.addTimesheetResult = action.payload.data;
    },
    successEditTimesheet(state, action: PayloadAction<any>) {
      state.loading = false;
      state.editTimesheetResult = action.payload.data;
    },
    failActionTimesheet(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = action.payload;
    },
    resetFormTimesheet(state) {
      state.loading = initialState.loading;
      state.error = initialState.error;
      state.infoTimesheetEdit = initialState.infoTimesheetEdit;
      state.addTimesheetResult = initialState.addTimesheetResult;
      state.editTimesheetResult = initialState.editTimesheetResult;
      state.infoTimesheetAdd = initialState.infoTimesheetAdd;
      state.showModal = false;
    },
    resetError(state) {
      state.error = initialState.error;
    },
  },
});

export const { actions, reducer, name: sliceKey } = addOrEditTimesheetModalSlice;
