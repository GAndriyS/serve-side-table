import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RowDataModel } from '../data-table.models';

@Injectable({
  providedIn: 'root'
})
export class EmployeeResolver implements Resolve<RowDataModel> {
  constructor(private _httpService: HttpClient) {}

  resolve(snapshot: ActivatedRouteSnapshot): Observable<RowDataModel> {
    const empId = snapshot.params.empId;
    return this._httpService.get<RowDataModel>('/api/rows', {
      params: { empId }
    });
  }
}
