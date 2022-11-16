import { call, put, select, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import { selectInfoProjectAdd, selectInfoProjectEdit } from './selectors';

export function* doAddProject() {
  const infoProjectAdd = yield select(selectInfoProjectAdd);
}

export function* doEditProject() {
  const infoProjectEdit = yield select(selectInfoProjectEdit);
}

export function* addOrEditProjectModalSaga() {
  yield takeLatest(actions.addProjectToLibrary.type, doAddProject);
  yield takeLatest(actions.doEditProject.type, doEditProject);
}
