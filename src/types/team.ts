export interface InfoMemberAdd {
  title: string;
}

export interface InfoMemberEdit {
  title: string;
  id: number;
}

export interface InfoGroupAdd {
  title: string;
}

export interface InfoGroupEdit {
  title: string;
  id: number;
}

export interface InfoRoleAdd {
  title: string;
}

export interface InfoRoleEdit {
  title: string;
  id: number;
}

export interface InfoItem<T> {
  idItem: number;
  infoItem: T;
}
