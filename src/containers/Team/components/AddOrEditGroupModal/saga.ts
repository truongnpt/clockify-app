import { call, put, select, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import { selectInfoGroupAdd, selectInfoGroupEdit } from './selectors';

export function* doAddGroup() {
  const infoGroupAdd = yield select(selectInfoGroupAdd);
}

export function* doEditGroup() {
  const infoGroupEdit = yield select(selectInfoGroupEdit);
}

export function* addOrEditGroupModalSaga() {
  yield takeLatest(actions.addGroupToLibrary.type, doAddGroup);
  yield takeLatest(actions.doEditGroup.type, doEditGroup);
}
