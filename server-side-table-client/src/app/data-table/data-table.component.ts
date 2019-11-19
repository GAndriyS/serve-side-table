import { Component } from '@angular/core';
import { GridOptions, Module, ColDef } from '@ag-grid-community/core';
import { ServerSideRowModelModule } from '@ag-grid-enterprise//server-side-row-model';

import { Datasource } from './data-table.datasource';
import { GRID_OPTIONS } from './data-table.constants';
import { DataTableService } from './data-table.service';
import { ActionTypes } from './data-table.models';

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
    this.gridOptions.columnDefs = this.gridOptions.columnDefs.map((colDef: ColDef) => {
      if (colDef.cellRendererParams && colDef.cellRendererParams.actionType === ActionTypes.delete) {
        colDef.cellRendererParams.delete = this.delete.bind(this);
      }

      return colDef;
    });
  }

  gridReady() {
    this._datasource = this._dataTableService.createDatasource(
      this.gridOptions
    );
    this.gridOptions.api.setServerSideDatasource(this._datasource);
  }

  quickSearch(value: string) {
    this._dataTableService.quickSearch(value);
  }

  delete(employeeId: string) {
    this._dataTableService.delete(employeeId).subscribe();
  }
}
