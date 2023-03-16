import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(TableName, FreeOccupied, TotalOrders, PendingOrders, SendingOrders,TotalAmount,BillClose) {
  return { TableName, FreeOccupied, TotalOrders, PendingOrders, SendingOrders,TotalAmount,BillClose };
}

const rows = [
  createData('ABC', 'Occupied', '4 Orders', '2 Orders Pendings', '1st Order Deliver','$8569', " Bill & Close "),
  createData('ABC', 'Occupied', '4 Orders', '2 Orders Pendings', '1st Order Deliver','$8569', " Bill & Close "),
  createData('ABC', 'Occupied', '4 Orders', '2 Orders Pendings', '1st Order Deliver','$8569', " Bill & Close "),
  createData('ABC', 'Occupied', '4 Orders', '2 Orders Pendings', '1st Order Deliver','$8569', " Bill & Close "),
  createData('ABC', 'Occupied', '4 Orders', '2 Orders Pendings', '1st Order Deliver','$8569', " Bill & Close "),
  createData('ABC', 'Occupied', '4 Orders', '2 Orders Pendings', '1st Order Deliver','$8569', " Bill & Close "),
  createData('ABC', 'Occupied', '4 Orders', '2 Orders Pendings', '1st Order Deliver','$8569', " Bill & Close "),
  createData('ABC', 'Occupied', '4 Orders', '2 Orders Pendings', '1st Order Deliver','$8569', " Bill & Close "),
  
 
];

const TableAccupancy=()=> {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell >Table Name</StyledTableCell>
            <StyledTableCell align="right">Free/Occupied</StyledTableCell>
            <StyledTableCell align="right">Total Orders</StyledTableCell>
            <StyledTableCell align="right">Pending Orders</StyledTableCell>
            <StyledTableCell align="right">Sending Orders</StyledTableCell>
            <StyledTableCell align="right">Total Amount</StyledTableCell>
            <StyledTableCell align="right">Bill & Close</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.TableName}
              </StyledTableCell>
              <StyledTableCell align="right">{row.FreeOccupied}</StyledTableCell>
              <StyledTableCell align="right">{row.TotalOrders}</StyledTableCell>
              <StyledTableCell align="right">{row.PendingOrders}</StyledTableCell>
              <StyledTableCell align="right">{row.SendingOrders}</StyledTableCell>
              <StyledTableCell align="right">{row.TotalAmount}</StyledTableCell>
              <StyledTableCell align="right">{row.BillClose}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default TableAccupancy;
