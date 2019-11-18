export interface ServerSideGetRowsRequest {
  startRow: number;
  endRow: number;
  quickSearch: string;
}

export interface ServerSideGetRowsResponse {
  lastRow: number;
  rows: RowDataModel[];
}

export interface RowDataModel {
  empID: number;
  empName: string;
  empActive: boolean;
  empDepartment: string;
}

export enum ActionTypes {
  view = 'view',
  edit = 'edit',
  delete = 'delete'
}
