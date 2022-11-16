import { call, put, select, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import { selectInfoClientAdd, selectInfoClientEdit } from './selectors';

export function* doAddClient() {
  const infoClientAdd = yield select(selectInfoClientAdd);
}

export function* doEditClient() {
  const infoClientEdit = yield select(selectInfoClientEdit);
}

export function* addOrEditClientModalSaga() {
  yield takeLatest(actions.addClientToLibrary.type, doAddClient);
  yield takeLatest(actions.doEditClient.type, doEditClient);
}
