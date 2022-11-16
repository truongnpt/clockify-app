/* --- STATE --- */

import { InfoItem, InfoClientAdd, InfoClientEdit } from 'types/projects';

export interface AddOrEditClientModalState {
  infoClientAdd: InfoClientAdd | null;
  infoClientEdit: InfoItem<InfoClientEdit> | null;
  editClientResult: any;
  addClientResult: any;
  error: any;
  loading: boolean;
  showModal: boolean;
}

export type ContainerState = AddOrEditClientModalState;
