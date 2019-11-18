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
