/* --- STATE --- */

import { InfoItem, InfoGroupAdd, InfoGroupEdit } from "types/team";

export interface AddOrEditGroupModalState {
  infoGroupAdd: InfoGroupAdd | null;
  infoGroupEdit: InfoItem<InfoGroupEdit> | null;
  editGroupResult: any;
  addGroupResult: any;
  error: any;
  loading: boolean;
  showModal: boolean;
}

export type ContainerState = AddOrEditGroupModalState;
