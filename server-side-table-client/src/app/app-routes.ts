import { Routes } from '@angular/router';

import { DataTableComponent } from './data-table/data-table.component';
import { EmployeeComponent } from './data-table/employee/employee.component';
import { EmployeeResolver } from './data-table/employee/employee.resolver';

export const routes: Routes = [
  {
    path: 'data-table',
    component: DataTableComponent,
    children: [{
      path: 'view/:empId',
      component: EmployeeComponent,
      resolve: {
        employeeData: EmployeeResolver,
      }
    }]
  },
  {
    path: '**',
    redirectTo: `/data-table`
  }
];
