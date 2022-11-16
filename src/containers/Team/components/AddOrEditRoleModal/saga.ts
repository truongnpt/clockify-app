import { call, put, select, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import { selectInfoRoleAdd, selectInfoRoleEdit } from './selectors';

export function* doAddRole() {
  const infoRoleAdd = yield select(selectInfoRoleAdd);
}

export function* doEditRole() {
  const infoRoleEdit = yield select(selectInfoRoleEdit);
}

export function* addOrEditRoleModalSaga() {
  yield takeLatest(actions.addRoleToLibrary.type, doAddRole);
  yield takeLatest(actions.doEditRole.type, doEditRole);
}
