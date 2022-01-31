import * as React from 'react';
import '../../assets/css/myTailwind.css';
import { Component } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



// import CashierTable from './CashierTable';
// to view data 
import { connect } from 'react-redux';
import { GetCashier } from '../../actions/ProjectActions'


class ViewCashier extends Component {


    componentDidMount() {
        this.props.GetCashier();
    }

    render() {
        const cashiersData = this.props.cashiers;
        console.log(cashiersData);




        return (<>


            {/* {cashiersData.map((element) => {
                console.log(element)
            })} */}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="large" aria-label="a dense table">
                    <TableHead >
                        <TableRow>
                            <TableCell style={{ fontWeight: '900', fontSize: '15px' }}>Id</TableCell>
                            <TableCell style={{ fontWeight: '900', fontSize: '15px' }}>First Name</TableCell>
                            <TableCell style={{ fontWeight: '900', fontSize: '15px' }}>Last Name</TableCell>
                            <TableCell style={{ fontWeight: '900', fontSize: '15px' }}>Phone</TableCell>
                            <TableCell style={{ fontWeight: '900', fontSize: '15px' }}>Email</TableCell>
                            <TableCell style={{ fontWeight: '900', fontSize: '15px' }}>Password</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        <TableRow>
                            <TableCell component="th" scope="row">
                                {cashiersData.map((element) => {
                                    return <div key={element.id}>{element.id}</div>
                                })}
                            </TableCell>

                            <TableCell component="th" scope="row"> {cashiersData.map((element) => {
                                return <div key={element.id}>{element.firstname}
                                </div>
                            })}</TableCell>
                            <TableCell component="th" scope="row"> {cashiersData.map((element) => {
                                return <div key={element.id}>{element.lastname}</div>
                            })}</TableCell>

                            <TableCell component="th" scope="row"> {cashiersData.map((element) => {
                                return <div key={element.id}>{element.phone}</div>
                            })}</TableCell>
                            <TableCell component="th" scope="row"> {cashiersData.map((element) => {
                                return <div key={element.id}>{element.email}</div>
                            })}</TableCell>
                            <TableCell component="th" scope="row"> {cashiersData.map((element) => {
                                return <div key={element.id}>{element.password}</div>
                            })}</TableCell>
                           
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>



        </>);
    }
}
const mapStateToProps = (state) => ({
    cashiers: state.viewCashiers.cashiers
})

export default connect(mapStateToProps, { GetCashier })(ViewCashier);