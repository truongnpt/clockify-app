/* --- STATE --- */

import { InfoItem, InfoMemberAdd, InfoMemberEdit } from "types/team";

export interface AddOrEditMemberModalState {
  infoMemberAdd: InfoMemberAdd | null;
  infoMemberEdit: InfoItem<InfoMemberEdit> | null;
  editMemberResult: any;
  addMemberResult: any;
  error: any;
  loading: boolean;
  showModal: boolean;
}

export type ContainerState = AddOrEditMemberModalState;
