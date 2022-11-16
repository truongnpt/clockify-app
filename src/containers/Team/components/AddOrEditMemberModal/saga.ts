import { call, put, select, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import { selectInfoMemberAdd, selectInfoMemberEdit } from './selectors';

export function* doAddMember() {
  const infoMemberAdd = yield select(selectInfoMemberAdd);
}

export function* doEditMember() {
  const infoMemberEdit = yield select(selectInfoMemberEdit);
}

export function* addOrEditMemberModalSaga() {
  yield takeLatest(actions.addMemberToLibrary.type, doAddMember);
  yield takeLatest(actions.doEditMember.type, doEditMember);
}
