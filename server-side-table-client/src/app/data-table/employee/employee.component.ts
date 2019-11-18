import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { RowDataModel } from '../data-table.models';
import { DEPARTAMENTS } from '../data-table.constants';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employeeData: RowDataModel;
  editable: boolean;
  empForm: FormGroup;
  departaments = DEPARTAMENTS;

  constructor(_route: ActivatedRoute, _formBuilder: FormBuilder) {
    this.editable = _route.snapshot.url[0].path === 'edit';
    this.empForm = _formBuilder.group({
      empName: [null, [Validators.required]],
      empDepartment: [null, [Validators.required]],
      empActive: [null]
    });
    _route.data.subscribe(data => {
      this.employeeData = data.employeeData;
      this.empForm.patchValue(data.employeeData);
    });
  }

  ngOnInit() {}
}
