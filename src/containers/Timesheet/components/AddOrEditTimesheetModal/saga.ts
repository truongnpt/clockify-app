import { call, put, select, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import { selectInfoTimesheetAdd, selectInfoTimesheetEdit } from './selectors';

export function* doAddTimesheet() {
  const infoTimesheetAdd = yield select(selectInfoTimesheetAdd);
}

export function* doEditTimesheet() {
  const infoTimesheetEdit = yield select(selectInfoTimesheetEdit);
}

export function* addOrEditTimesheetModalSaga() {
  yield takeLatest(actions.addTimesheetToLibrary.type, doAddTimesheet);
  yield takeLatest(actions.doEditTimesheet.type, doEditTimesheet);
}
