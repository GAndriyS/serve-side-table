import { HttpClient } from '@angular/common/http';
import { IDatasource, IGetRowsParams } from '@ag-grid-community/core';

import { ServerSideGetRowsResponse, ServerSideGetRowsRequest } from './data-table.models';

export class Datasource implements IDatasource {
  private _httpClient: HttpClient;
  private _fetchEndpoint: string;
  private _quickSearchQuery: string;
  private _lastParams: IGetRowsParams;

  constructor(
    httpService: HttpClient,
    fetchEndpoint: string
  ) {
    this._httpClient = httpService;
    this._fetchEndpoint = fetchEndpoint;
  }

  getRows(params: IGetRowsParams) {
    this._lastParams = params;
    this.postRequest();
  }

  quickSearch(quickSearchQuery: string) {
    this._quickSearchQuery = quickSearchQuery;
    this.postRequest();
  }

  postRequest() {
    const reqParams: ServerSideGetRowsRequest = {
      startRow: this._lastParams.startRow,
      endRow: this._lastParams.endRow,
      quickSearch: this._quickSearchQuery
    };

    this._httpClient
      .post<ServerSideGetRowsResponse>(`${this._fetchEndpoint}`, reqParams)
      .subscribe(response => {
        this._lastParams.successCallback(response.rows, response.lastRow);
      }, error => {
        console.error(error);
        this._lastParams.failCallback();
      });
  }
}
