export interface InfoProjectAdd {
  title: string;
}

export interface InfoProjectEdit {
  title: string;
  id: number;
}

export interface InfoClientAdd {
  title: string;
}

export interface InfoClientEdit {
  title: string;
  id: number;
}

export interface InfoItem<T> {
  idItem: number;
  infoItem: T;
}
