export interface InfoTimesheetAdd {
  title: string;
}

export interface InfoTimesheetEdit {
  title: string;
  id: number;
}

export interface InfoItem<T> {
  idItem: number;
  infoItem: T;
}
