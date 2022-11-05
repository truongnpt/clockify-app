import { LoginState } from 'containers/Login/types';
import { TimesheetState } from 'containers/Timesheet/types';
import { AddOrEditTimesheetModalState } from 'containers/Timesheet/components/AddOrEditTimesheetModal/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/

export interface RootState {
  login: LoginState;
  timesheet: TimesheetState;
  addOrEditTimesheetModal: AddOrEditTimesheetModalState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
