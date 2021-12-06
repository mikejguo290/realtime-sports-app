import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'First',
    headerName: 'First name',
    width: 150,
  },
  {
    field: 'Last',
    headerName: 'Last name',
    width: 150,
  },
  {
    field: 'Nationality',
    headerName: 'Nationality',
    width: 150,
  },
  {
    field: 'Sex',
    headerName: 'Gender',
    width: 150,
  },
  {
    field: 'Handicap',
    headerName: 'Handicap',
    width: 150,
  },
  {
    field: 'holesPlayed',
    headerName: 'Holes Played',
    width: 150,
  },
  {
    field: 'TotalStrokes',
    headerName: 'Total Strokes',
    width: 150,
  },
  {
    field: 'Score',
    headerName: 'Score',
    width: 150,
  },
  {
    field: 'CalculatedRankInteger',
    headerName: 'Rank',
    type: 'number',
    width: 150,
  },
];

// would like to know the intention behind the table, the data hierarchy i.e. which parts of the data are important. 

function PlayerTable({rows}) {
  
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
export default PlayerTable;