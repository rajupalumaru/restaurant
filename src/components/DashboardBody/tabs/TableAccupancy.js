import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import './TableOccupancy.css';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

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

function createData(TableName, FreeOccupied, TotalOrders, PendingOrders, SendingOrders, TotalAmount, BillClose) {
  return { TableName, FreeOccupied, TotalOrders, PendingOrders, SendingOrders, TotalAmount, BillClose };
}

const rows = [
  createData('ABC', 'Occupied', '4 Orders', '2 Orders Pendings', '1st Order Deliver', '$8569', " Bill & Close "),
  createData('ABC', 'Occupied', '4 Orders', '2 Orders Pendings', '1st Order Deliver', '$8569', " Bill & Close "),
  createData('ABC', 'Occupied', '4 Orders', '2 Orders Pendings', '1st Order Deliver', '$8569', " Bill & Close "),
  createData('ABC', 'Occupied', '4 Orders', '2 Orders Pendings', '1st Order Deliver', '$8569', " Bill & Close "),
  createData('ABC', 'Occupied', '4 Orders', '2 Orders Pendings', '1st Order Deliver', '$8569', " Bill & Close "),
  createData('ABC', 'Occupied', '4 Orders', '2 Orders Pendings', '1st Order Deliver', '$8569', " Bill & Close "),
  createData('ABC', 'Occupied', '4 Orders', '2 Orders Pendings', '1st Order Deliver', '$8569', " Bill & Close "),
  createData('ABC', 'Occupied', '4 Orders', '2 Orders Pendings', '1st Order Deliver', '$8569', " Bill & Close "),


];

const TableAccupancy = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
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
                <StyledTableCell align="right"><Button onClick={handleOpen}>{row.BillClose}</Button></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Table Name: ABC
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Bill Paid Successfully
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
export default TableAccupancy;
