import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { RowDataModel } from '../data-table.models';
import { DataTableService } from '../data-table.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeResolver implements Resolve<RowDataModel> {
  constructor(private _dataTableService: DataTableService) {}

  resolve(snapshot: ActivatedRouteSnapshot): Observable<RowDataModel> {
    const empId = snapshot.params.empId;
    return this._dataTableService.getEmployeeData(empId);
  }
}
