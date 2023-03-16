import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './TableList.css';

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

function createData(TableName, numberOfChairs, accessCode) {
    return { TableName, numberOfChairs, accessCode };
}

const rows = [
    createData('ABC', 'Occupied', '4 Orders'),
    createData('ABC', 'Occupied', '4 Orders'),
    createData('ABC', 'Occupied', '4 Orders'),
    createData('ABC', 'Occupied', '4 Orders'),
    createData('ABC', 'Occupied', '4 Orders'),
    createData('ABC', 'Occupied', '4 Orders'),
    createData('ABC', 'Occupied', '4 Orders'),
    createData('ABC', 'Occupied', '4 Orders'),
    createData('ABC', 'Occupied', '4 Orders'),


];

const TableList = () => {
    return (
        <div className='tableList'>
            <div className='tableList-info'>
                <h1>Menu List</h1>
                <button>Add New Item</button>
            </div>
            <div className='tableList-body'>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell >Name</StyledTableCell>
                                <StyledTableCell align="right">Number Of Chairs</StyledTableCell>
                                <StyledTableCell align="right">Access Code</StyledTableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.TableName}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{row.numberOfChairs}</StyledTableCell>
                                    <StyledTableCell align="right">{row.accessCode}</StyledTableCell>

                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </div>


        </div>

    );
}
export default TableList;

