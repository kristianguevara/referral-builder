import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const EmptyList = () => {
  return (
    <TableRow
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell scope="row">
        There are no referrals to display.
      </TableCell>
    </TableRow>
  )
}

export default EmptyList;
