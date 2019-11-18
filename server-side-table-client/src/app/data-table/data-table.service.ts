import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { GridOptions } from '@ag-grid-community/core';

import { Datasource } from './data-table.datasource';
import { DATASOURCE_ENDPOINT } from './data-table.constants';

@Injectable({
  providedIn: 'root'
})
export class DataTableService {
  private _datasource: Datasource;

  constructor(private _httpService: HttpClient) {}

  createDatasource(gridOptions: GridOptions): Datasource {
    if (!this._datasource) {
      this._datasource = new Datasource(this._httpService, DATASOURCE_ENDPOINT, gridOptions);
    }
    return this._datasource;
  }

  delete(empId: string) {
    return this._httpService
      .delete('/api/rows', {
        params: { empId }
      })
      .pipe(tap(() => this._datasource.retrieveRows()));
  }
}
