import { ColDef } from '@ag-grid-community/core';

import { ActionRendererComponent } from './action-renderer/action-renderer.component';
import { ActionTypes } from './data-table.models';

export const COL_DEFS: ColDef[] = [
  {
    width: 150,
    minWidth: 100,
    pinned: 'left',
    headerName: '',
    field: '',
    menuTabs: [],
    cellRendererFramework: ActionRendererComponent,
    cellRendererParams: {
      actionType: ActionTypes.view
    }
  },
  {
    width: 150,
    minWidth: 100,
    headerName: 'empID',
    field: 'empID',
    menuTabs: []
  },
  {
    width: 150,
    minWidth: 100,
    headerName: 'empName',
    field: 'empName',
    menuTabs: []
  },
  {
    width: 150,
    minWidth: 100,
    headerName: 'empActive',
    field: 'empActive',
    menuTabs: []
  },
  {
    width: 150,
    minWidth: 100,
    headerName: 'empDepartment',
    field: 'empDepartment',
    menuTabs: []
  },
  {
    width: 150,
    minWidth: 100,
    pinned: 'right',
    headerName: '',
    field: '',
    menuTabs: [],
    cellRendererFramework: ActionRendererComponent,
    cellRendererParams: {
      actionType: ActionTypes.delete
    }
  },
];
