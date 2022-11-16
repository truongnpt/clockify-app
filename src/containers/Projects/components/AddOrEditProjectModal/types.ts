/* --- STATE --- */

import { InfoItem, InfoProjectAdd, InfoProjectEdit } from "types/projects";

export interface AddOrEditProjectModalState {
  infoProjectAdd: InfoProjectAdd | null;
  infoProjectEdit: InfoItem<InfoProjectEdit> | null;
  editProjectResult: any;
  addProjectResult: any;
  error: any;
  loading: boolean;
  showModal: boolean;
}

export type ContainerState = AddOrEditProjectModalState;
