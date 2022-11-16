/* --- STATE --- */
export interface TeamState {
  logoutSuccess: boolean;
  logoutError?: any;
}

export type ContainerState = TeamState;
