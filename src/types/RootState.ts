import { LoginState } from 'containers/Login/types';
import { TimesheetState } from 'containers/Timesheet/types';
import { AddOrEditTimesheetModalState } from 'containers/Timesheet/components/AddOrEditTimesheetModal/types';
import { TeamState } from 'containers/Team/types';
import { AddOrEditMemberModalState } from 'containers/Team/components/AddOrEditMemberModal/types';
import { AddOrEditRoleModalState } from 'containers/Team/components/AddOrEditRoleModal/types';
import { AddOrEditGroupModalState } from 'containers/Team/components/AddOrEditGroupModal/types';
import { ProjectsState } from 'containers/Projects/types';
import { AddOrEditProjectModalState } from 'containers/Projects/components/AddOrEditProjectModal/types';
import { AddOrEditClientModalState } from 'containers/Projects/components/AddOrEditClientModal/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/

export interface RootState {
  login: LoginState;
  timesheet: TimesheetState;
  addOrEditTimesheetModal: AddOrEditTimesheetModalState;
  team: TeamState;
  addOrEditMemberModal: AddOrEditMemberModalState;
  addOrEditRoleModal: AddOrEditRoleModalState;
  addOrEditGroupModal: AddOrEditGroupModalState;
  projects: ProjectsState;
  addOrEditProjectModal: AddOrEditProjectModalState;
  addOrEditClientModal: AddOrEditClientModalState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
