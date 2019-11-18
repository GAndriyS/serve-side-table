import { Component } from '@angular/core';
import { GridOptions, Module } from '@ag-grid-community/core';
import { HttpClient } from '@angular/common/http';
import { ServerSideRowModelModule } from '@ag-grid-enterprise//server-side-row-model';

import { Datasource } from './data-table.datasource';
import {
  DATASOURCE_ENDPOINT,
  GRID_OPTIONS
} from './data-table.constants';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent {
  gridOptions: GridOptions;
  modules: Module[] = [ServerSideRowModelModule];

  private _datasource: Datasource;

  constructor(
    _httpService: HttpClient
  ) {
    this.gridOptions = GRID_OPTIONS;
    this._datasource = new Datasource(
      _httpService,
      DATASOURCE_ENDPOINT
    );
  }

  gridReady() {
    this.gridOptions.api.setServerSideDatasource(this._datasource);
  }
}
