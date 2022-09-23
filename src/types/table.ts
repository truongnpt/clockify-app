export interface TableInfo {
  tableName: string;
  loading?: boolean;
  columns: Column[];
}

/**
 * Type: TEXT, LIST, RANGEDATE
 * Default: TEXT
 */
export interface Column {
  id: string;
  name?: string | any;
  value: string;
  label: string;
  disabled?: boolean;
  checked?: boolean;
  isTitleHidden?: boolean;
  isSortDisabled?: boolean;
  isFilterDisabled?: boolean;
  isVisibilityDisabled?: boolean;
  customCell?: any;
  values?: any[];
  type?: string;
}

export interface ColumnTable {
  Header: any;
  disableSortBy?: boolean;
  isSortDisabled?: boolean;
  accessor: string;
  Cell?: any;
  SubCell?: any;
  render?: any;
}

export interface Sort {
  loading: boolean;
  sortData: string;
}
