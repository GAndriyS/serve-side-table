import { Component } from '@angular/core';
import { ICellRendererAngularComp } from '@ag-grid-community/angular';
import { switchMap, delay, timeout } from 'rxjs/operators';

import { ActionTypes } from '../data-table.models';
import { DataTableService } from '../data-table.service';

@Component({
  selector: 'app-action-renderer',
  templateUrl: './action-renderer.component.html',
  styleUrls: ['./action-renderer.component.scss']
})
export class ActionRendererComponent implements ICellRendererAngularComp {
  ActionTypes = ActionTypes;
  actionType: ActionTypes;
  employeeId: number;

  private _params;

  constructor(private _dataTableService: DataTableService) {}

  agInit(params) {
    this.actionType = params.actionType;
    this._params = params;
    this.employeeId = params.data.empID;
  }

  refresh() {
    return true;
  }

  delete() {
    this._dataTableService
      .delete(this.employeeId.toString())
      .subscribe();
  }
}