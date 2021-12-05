import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'First',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'Last',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'Nationality',
    headerName: 'Nationality',
    width: 150,
    editable: true,
  },
  {
    field: 'CalculatedRankInteger',
    headerName: 'Rank',
    type: 'number',
    width: 150,
    editable: true,
  },
];


export default function DataGridCells({rows}) {
  
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}