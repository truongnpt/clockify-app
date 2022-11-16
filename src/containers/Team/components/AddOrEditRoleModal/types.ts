/* --- STATE --- */

import { InfoItem, InfoRoleAdd, InfoRoleEdit } from "types/team";

export interface AddOrEditRoleModalState {
  infoRoleAdd: InfoRoleAdd | null;
  infoRoleEdit: InfoItem<InfoRoleEdit> | null;
  editRoleResult: any;
  addRoleResult: any;
  error: any;
  loading: boolean;
  showModal: boolean;
}

export type ContainerState = AddOrEditRoleModalState;
