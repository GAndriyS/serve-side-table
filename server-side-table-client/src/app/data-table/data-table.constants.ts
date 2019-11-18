import { GridOptions } from '@ag-grid-community/core';

import { COL_DEFS } from './data-table.col-defs';

export const SINGLE_ROW_HEIGHT = 48;
export const HEADER_ROW_HEIGHT = 48;
export const CACHE_BLOCK_SIZE = 100;
export const MAX_BLOCKS_IN_CACHE = 10;
export const DATASOURCE_ENDPOINT = '/api/rows';
export const GRID_OPTIONS: GridOptions = {
  unSortIcon: false,

  suppressMultiSort: true,
  suppressDragLeaveHidesColumns: true,
  suppressColumnVirtualisation: true,
  suppressContextMenu: true,
  suppressColumnMoveAnimation: true,
  suppressPropertyNamesCheck: true,
  suppressRowClickSelection: true,
  suppressClickEdit: true,

  rowSelection: 'multiple',

  headerHeight: HEADER_ROW_HEIGHT,
  rowHeight: SINGLE_ROW_HEIGHT,
  overlayNoRowsTemplate: ' ',
  overlayLoadingTemplate: ' ',

  columnDefs: COL_DEFS,
  rowModelType: 'serverSide',
  cacheBlockSize: CACHE_BLOCK_SIZE,
  maxBlocksInCache: MAX_BLOCKS_IN_CACHE
};

export const DEPARTAMENTS = ['Global Market', 'Entertaiment', 'Production'];
