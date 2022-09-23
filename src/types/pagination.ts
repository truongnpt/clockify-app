export interface PaginationResult {
  meta: Meta | null;
  links: Links | null;
}

export interface InfoPaginate {
  size: number;
  number: number;
}

export interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  path: string;
  per_page: string;
  to: number;
  total: number;
}

export interface Links {
  first: string;
  last: string;
  prev: string;
  next: string;
}
