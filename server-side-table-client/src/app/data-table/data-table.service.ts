import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { GridOptions } from '@ag-grid-community/core';

import { Datasource } from './data-table.datasource';
import { DATASOURCE_ENDPOINT } from './data-table.constants';
import { RowDataModel } from './data-table.models';

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

  update(empData: RowDataModel) {
    return this._httpService.post<RowDataModel>('/api/row', empData)
      .pipe(tap(() => this._datasource.retrieveRows()));;
  }

  getEmployeeData(empID: string) {
    return this._httpService.get<RowDataModel>('/api/row', {
      params: { empID }
    });
  }

  delete(empID: string) {
    return this._httpService
      .delete('/api/row', {
        params: { empID }
      })
      .pipe(tap(() => this._datasource.retrieveRows()));
  }
}
