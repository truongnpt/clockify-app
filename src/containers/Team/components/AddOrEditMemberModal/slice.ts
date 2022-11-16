import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the AddOrEditMemberModal container
export const initialState: ContainerState = {
  infoMemberEdit: null,
  editMemberResult: null,
  error: null,
  loading: false,
  infoMemberAdd: null,
  addMemberResult: null,
  showModal: false,
};

const addOrEditMemberModalSlice = createSlice({
  name: 'addOrEditMemberModal',
  initialState,
  reducers: {
    setEventClickButton(state, action: PayloadAction<any>) {
      state.showModal = action.payload;
    },
    addMemberToLibrary(state, action: PayloadAction<any>) {
      const { title } = action.payload;
      state.loading = true;
      state.infoMemberAdd = {
        title,
      };
    },
    doEditMember(state) {
      state.loading = true;
    },
    setInfoMemberEdit(state, action: PayloadAction<any>) {
      const { id, title } = action.payload;
      state.infoMemberEdit = {
        idItem: id,
        infoItem: {
          title,
          id,
        },
      };
    },
    successAddMember(state, action: PayloadAction<any>) {
      state.loading = false;
      state.addMemberResult = action.payload.data;
    },
    successEditMember(state, action: PayloadAction<any>) {
      state.loading = false;
      state.editMemberResult = action.payload.data;
    },
    failActionMember(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = action.payload;
    },
    resetFormMember(state) {
      state.loading = initialState.loading;
      state.error = initialState.error;
      state.infoMemberEdit = initialState.infoMemberEdit;
      state.addMemberResult = initialState.addMemberResult;
      state.editMemberResult = initialState.editMemberResult;
      state.infoMemberAdd = initialState.infoMemberAdd;
      state.showModal = false;
    },
    resetError(state) {
      state.error = initialState.error;
    },
  },
});

export const { actions, reducer, name: sliceKey } = addOrEditMemberModalSlice;
