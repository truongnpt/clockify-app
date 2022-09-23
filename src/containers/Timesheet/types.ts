/* --- STATE --- */
export interface LoginState {
  logoutSuccess: boolean;
  logoutError?: any;
}

export type ContainerState = LoginState;
