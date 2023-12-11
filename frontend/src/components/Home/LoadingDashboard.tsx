import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const LoadingDashboard = () => {
  return (
    <TableRow
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell scope="row">
        Loading data...
      </TableCell>
    </TableRow>
  )
}

export default LoadingDashboard;
