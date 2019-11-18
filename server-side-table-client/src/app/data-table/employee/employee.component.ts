import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RowDataModel } from '../data-table.models';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employeeData: RowDataModel;
  editable: boolean;

  constructor(_route: ActivatedRoute) {
    _route.data.subscribe(data => this.employeeData = data.employeeData);
    this.editable = _route.snapshot.url[0].path === 'edit';
  }

  ngOnInit() {}
}
