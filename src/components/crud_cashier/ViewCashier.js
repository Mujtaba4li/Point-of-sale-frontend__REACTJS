import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../../assets/css/myTailwind.css'





export default function ViewCashier() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="large" aria-label="a dense table">
                <TableHead >
                    <TableRow>
                        <TableCell style={{ fontWeight: '900', fontSize: '15px' }}>Id</TableCell>
                        <TableCell style={{ fontWeight: '900', fontSize: '15px' }}>First Name</TableCell>
                        <TableCell  style={{ fontWeight: '900', fontSize: '15px' }}>Last Name</TableCell>
                        <TableCell style={{ fontWeight: '900', fontSize: '15px' }}>Phone</TableCell>
                        <TableCell style={{ fontWeight: '900', fontSize: '15px' }}>Email</TableCell>
                        <TableCell style={{ fontWeight: '900', fontSize: '15px' }}>Password</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    <TableRow>
                        <TableCell component="th" scope="row">
                            01
                        </TableCell>
                       
                        <TableCell component="th" scope="row">Mujtaba</TableCell>
                        <TableCell component="th" scope="row">Shafique</TableCell>
                        <TableCell component="th" scope="row">+0231231234</TableCell>
                        <TableCell component="th" scope="row">mujiroy01@gmail.com</TableCell>
                        <TableCell component="th" scope="row">12345</TableCell>
                        </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}
