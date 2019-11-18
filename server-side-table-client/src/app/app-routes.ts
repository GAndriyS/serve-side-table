import { Routes } from '@angular/router';

import { DataTableComponent } from './data-table/data-table.component';

export const routes: Routes = [
  {
    path: '**',
    redirectTo: `/data-table`
  },
  {
    path: 'data-table',
    component: DataTableComponent
  }
];
