/* --- STATE --- */

import { InfoItem, InfoTimesheetAdd, InfoTimesheetEdit } from "types/timesheet";

export interface AddOrEditTimesheetModalState {
  infoTimesheetAdd: InfoTimesheetAdd | null;
  infoTimesheetEdit: InfoItem<InfoTimesheetEdit> | null;
  editTimesheetResult: any;
  addTimesheetResult: any;
  error: any;
  loading: boolean;
  showModal: boolean;
}

export type ContainerState = AddOrEditTimesheetModalState;
