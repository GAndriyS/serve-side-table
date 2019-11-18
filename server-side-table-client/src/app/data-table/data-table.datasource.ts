import { HttpClient } from '@angular/common/http';
import { IServerSideDatasource, IServerSideGetRowsParams, GridOptions } from '@ag-grid-community/core';

import { ServerSideGetRowsResponse, ServerSideGetRowsRequest } from './data-table.models';

export class Datasource implements IServerSideDatasource {
  private _httpClient: HttpClient;
  private _fetchEndpoint: string;
  private _quickSearchQuery: string;
  private _lastParams: IServerSideGetRowsParams;
  private _gridOptions: GridOptions;

  constructor(
    httpService: HttpClient,
    fetchEndpoint: string,
    gridOptions: GridOptions
  ) {
    this._httpClient = httpService;
    this._fetchEndpoint = fetchEndpoint;
    this._gridOptions = gridOptions;
  }

  getRows(params: IServerSideGetRowsParams) {
    this._lastParams = params;
    this.retrieveRows();
  }

  quickSearch(quickSearchQuery: string) {
    this._quickSearchQuery = quickSearchQuery;
    this.retrieveRows();
  }

  retrieveRows() {
    const reqParams: ServerSideGetRowsRequest = {
      startRow: this._lastParams.request.startRow,
      endRow: this._lastParams.request.endRow,
      quickSearch: this._quickSearchQuery
    };
    this._httpClient
      .post<ServerSideGetRowsResponse>(`${this._fetchEndpoint}`, reqParams)
      .subscribe(response => {
        this._lastParams.successCallback(response.rows, response.lastRow);
        this._gridOptions.columnApi.resetColumnState();
      }, error => {
        console.error(error);
        this._lastParams.failCallback();
      });
  }
}
