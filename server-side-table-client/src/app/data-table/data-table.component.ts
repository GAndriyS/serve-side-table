import { Component } from '@angular/core';
import { GridOptions, Module } from '@ag-grid-community/core';
import { ServerSideRowModelModule } from '@ag-grid-enterprise//server-side-row-model';

import { Datasource } from './data-table.datasource';
import { GRID_OPTIONS } from './data-table.constants';
import { DataTableService } from './data-table.service';

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
    private _dataTableService: DataTableService
  ) {
    this.gridOptions = GRID_OPTIONS;
  }

  gridReady() {
    this._datasource = this._dataTableService.createDatasource(
      this.gridOptions
    );
    this.gridOptions.api.setServerSideDatasource(this._datasource);
  }
}
