import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the AddOrEditClientModal container
export const initialState: ContainerState = {
  infoClientEdit: null,
  editClientResult: null,
  error: null,
  loading: false,
  infoClientAdd: null,
  addClientResult: null,
  showModal: false,
};

const addOrEditClientModalSlice = createSlice({
  name: 'addOrEditClientModal',
  initialState,
  reducers: {
    setEventClickButton(state, action: PayloadAction<any>) {
      state.showModal = action.payload;
    },
    addClientToLibrary(state, action: PayloadAction<any>) {
      const { title } = action.payload;
      state.loading = true;
      state.infoClientAdd = {
        title,
      };
    },
    doEditClient(state) {
      state.loading = true;
    },
    setInfoClientEdit(state, action: PayloadAction<any>) {
      const { id, title } = action.payload;
      state.infoClientEdit = {
        idItem: id,
        infoItem: {
          title,
          id,
        },
      };
    },
    successAddClient(state, action: PayloadAction<any>) {
      state.loading = false;
      state.addClientResult = action.payload.data;
    },
    successEditClient(state, action: PayloadAction<any>) {
      state.loading = false;
      state.editClientResult = action.payload.data;
    },
    failActionClient(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = action.payload;
    },
    resetFormClient(state) {
      state.loading = initialState.loading;
      state.error = initialState.error;
      state.infoClientEdit = initialState.infoClientEdit;
      state.addClientResult = initialState.addClientResult;
      state.editClientResult = initialState.editClientResult;
      state.infoClientAdd = initialState.infoClientAdd;
      state.showModal = false;
    },
    resetError(state) {
      state.error = initialState.error;
    },
  },
});

export const { actions, reducer, name: sliceKey } = addOrEditClientModalSlice;
