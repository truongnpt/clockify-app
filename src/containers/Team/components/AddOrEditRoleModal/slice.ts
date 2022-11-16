import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the AddOrEditRoleModal container
export const initialState: ContainerState = {
  infoRoleEdit: null,
  editRoleResult: null,
  error: null,
  loading: false,
  infoRoleAdd: null,
  addRoleResult: null,
  showModal: false,
};

const addOrEditRoleModalSlice = createSlice({
  name: 'addOrEditRoleModal',
  initialState,
  reducers: {
    setEventClickButton(state, action: PayloadAction<any>) {
      state.showModal = action.payload;
    },
    addRoleToLibrary(state, action: PayloadAction<any>) {
      const { title } = action.payload;
      state.loading = true;
      state.infoRoleAdd = {
        title,
      };
    },
    doEditRole(state) {
      state.loading = true;
    },
    setInfoRoleEdit(state, action: PayloadAction<any>) {
      const { id, title } = action.payload;
      state.infoRoleEdit = {
        idItem: id,
        infoItem: {
          title,
          id,
        },
      };
    },
    successAddRole(state, action: PayloadAction<any>) {
      state.loading = false;
      state.addRoleResult = action.payload.data;
    },
    successEditRole(state, action: PayloadAction<any>) {
      state.loading = false;
      state.editRoleResult = action.payload.data;
    },
    failActionRole(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = action.payload;
    },
    resetFormRole(state) {
      state.loading = initialState.loading;
      state.error = initialState.error;
      state.infoRoleEdit = initialState.infoRoleEdit;
      state.addRoleResult = initialState.addRoleResult;
      state.editRoleResult = initialState.editRoleResult;
      state.infoRoleAdd = initialState.infoRoleAdd;
      state.showModal = false;
    },
    resetError(state) {
      state.error = initialState.error;
    },
  },
});

export const { actions, reducer, name: sliceKey } = addOrEditRoleModalSlice;
