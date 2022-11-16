import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the AddOrEditProjectModal container
export const initialState: ContainerState = {
  infoProjectEdit: null,
  editProjectResult: null,
  error: null,
  loading: false,
  infoProjectAdd: null,
  addProjectResult: null,
  showModal: false,
};

const addOrEditProjectModalSlice = createSlice({
  name: 'addOrEditProjectModal',
  initialState,
  reducers: {
    setEventClickButton(state, action: PayloadAction<any>) {
      state.showModal = action.payload;
    },
    addProjectToLibrary(state, action: PayloadAction<any>) {
      const { title } = action.payload;
      state.loading = true;
      state.infoProjectAdd = {
        title,
      };
    },
    doEditProject(state) {
      state.loading = true;
    },
    setInfoProjectEdit(state, action: PayloadAction<any>) {
      const { id, title } = action.payload;
      state.infoProjectEdit = {
        idItem: id,
        infoItem: {
          title,
          id,
        },
      };
    },
    successAddProject(state, action: PayloadAction<any>) {
      state.loading = false;
      state.addProjectResult = action.payload.data;
    },
    successEditProject(state, action: PayloadAction<any>) {
      state.loading = false;
      state.editProjectResult = action.payload.data;
    },
    failActionProject(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = action.payload;
    },
    resetFormProject(state) {
      state.loading = initialState.loading;
      state.error = initialState.error;
      state.infoProjectEdit = initialState.infoProjectEdit;
      state.addProjectResult = initialState.addProjectResult;
      state.editProjectResult = initialState.editProjectResult;
      state.infoProjectAdd = initialState.infoProjectAdd;
      state.showModal = false;
    },
    resetError(state) {
      state.error = initialState.error;
    },
  },
});

export const { actions, reducer, name: sliceKey } = addOrEditProjectModalSlice;
