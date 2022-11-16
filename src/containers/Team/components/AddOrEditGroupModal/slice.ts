import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the AddOrEditGroupModal container
export const initialState: ContainerState = {
  infoGroupEdit: null,
  editGroupResult: null,
  error: null,
  loading: false,
  infoGroupAdd: null,
  addGroupResult: null,
  showModal: false,
};

const addOrEditGroupModalSlice = createSlice({
  name: 'addOrEditGroupModal',
  initialState,
  reducers: {
    setEventClickButton(state, action: PayloadAction<any>) {
      state.showModal = action.payload;
    },
    addGroupToLibrary(state, action: PayloadAction<any>) {
      const { title } = action.payload;
      state.loading = true;
      state.infoGroupAdd = {
        title,
      };
    },
    doEditGroup(state) {
      state.loading = true;
    },
    setInfoGroupEdit(state, action: PayloadAction<any>) {
      const { id, title } = action.payload;
      state.infoGroupEdit = {
        idItem: id,
        infoItem: {
          title,
          id,
        },
      };
    },
    successAddGroup(state, action: PayloadAction<any>) {
      state.loading = false;
      state.addGroupResult = action.payload.data;
    },
    successEditGroup(state, action: PayloadAction<any>) {
      state.loading = false;
      state.editGroupResult = action.payload.data;
    },
    failActionGroup(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = action.payload;
    },
    resetFormGroup(state) {
      state.loading = initialState.loading;
      state.error = initialState.error;
      state.infoGroupEdit = initialState.infoGroupEdit;
      state.addGroupResult = initialState.addGroupResult;
      state.editGroupResult = initialState.editGroupResult;
      state.infoGroupAdd = initialState.infoGroupAdd;
      state.showModal = false;
    },
    resetError(state) {
      state.error = initialState.error;
    },
  },
});

export const { actions, reducer, name: sliceKey } = addOrEditGroupModalSlice;
