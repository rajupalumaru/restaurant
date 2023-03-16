import * as React from 'react';
import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Order.css';


const Order = () => {
    return (
        <div className='Orders-main'>
            <h1 className='order_history'>Order History</h1><br></br><br></br><br></br>     
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="simple table">
                        <TableHead className='back_ground'>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell align="right">Table ID/Name</TableCell>
                                <TableCell align="right">Total items</TableCell>
                                <TableCell align="right">Amount</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableRow>
                                <TableCell>22/07/2022</TableCell>
                                <TableCell align="right">ABCXYZD</TableCell>
                                <TableCell align="right">3 items</TableCell>
                                <TableCell align="right">₹8508</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>22/07/2022</TableCell>
                                <TableCell align="right">ABCXYZD</TableCell>
                                <TableCell align="right">3 items</TableCell>
                                <TableCell align="right">₹8508</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>22/07/2022</TableCell>
                                <TableCell align="right">ABCXYZD</TableCell>
                                <TableCell align="right">3 items</TableCell>
                                <TableCell align="right">₹8508</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>22/07/2022</TableCell>
                                <TableCell align="right">ABCXYZD</TableCell>
                                <TableCell align="right">3 items</TableCell>
                                <TableCell align="right">₹8508</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>22/07/2022</TableCell>
                                <TableCell align="right">ABCXYZD</TableCell>
                                <TableCell align="right">3 items</TableCell>
                                <TableCell align="right">₹8508</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>22/07/2022</TableCell>
                                <TableCell align="right">ABCXYZD</TableCell>
                                <TableCell align="right">3 items</TableCell>
                                <TableCell align="right">₹8508</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>22/07/2022</TableCell>
                                <TableCell align="right">ABCXYZD</TableCell>
                                <TableCell align="right">3 items</TableCell>
                                <TableCell align="right">₹8508</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>22/07/2022</TableCell>
                                <TableCell align="right">ABCXYZD</TableCell>
                                <TableCell align="right">3 items</TableCell>
                                <TableCell align="right">₹8508</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>22/07/2022</TableCell>
                                <TableCell align="right">ABCXYZD</TableCell>
                                <TableCell align="right">3 items</TableCell>
                                <TableCell align="right">₹8508</TableCell>
                            </TableRow>
                        </Table>
                </TableContainer>
       
            </div>
    )
}
export default Order;