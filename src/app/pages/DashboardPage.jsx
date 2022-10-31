import React, { Component } from 'react';
import * as HttpService from '../util/HttpService'
import { ToastContainer, toast } from 'react-toastify';
import { Box, Collapse, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './dashboardpage.css'

class DashboardPage extends Component {
    state = {
        accountList: [],
        open: false
    }

    componentDidMount() {
        this.fetchAccountList()
    }

    fetchAccountList = () => {
        HttpService.fetchUserAccountList().then((response) => {
            console.log(response.data);
            toast.success("Accounts: " + response.data?.length)
            this.setState({ accountList: response.data })
        }).catch((error) => {
            toast.error("Unable to fetch account")
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.accountList.length == 0 &&
                    <div className="card no-accounts-card">
                        <div className="card body">
                            <h1 className="card-title">
                                <i className="fas fa-ban text-danger"></i>No Registered Accounts
                            </h1>
                            <div className="card-text">
                                You Currently do not have any registered accounts. <br />
                                please click below to register / add a new account.

                            </div>

                            <br />

                            <button id="" className="btn btn-primary btn-md shadow" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> <i className="fa fa-credit-card"></i> Add New Account
                            </button>


                        </div>
                    </div>
                }
                {
                    this.state.accountList.length > 0 &&
                    <div className="dashboard-table-container">
                        <TableContainer component={Paper}>
                            <Table aria-label="collapsible table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell className="order-table-heading" >Your Accounts</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.accountList.map(account => (
                                        <React.Fragment>
                                            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                                                <TableCell>
                                                    <IconButton
                                                        aria-label="expand row"
                                                        size="small"
                                                        onClick={() => this.setState({ open: !this.state.open })}
                                                    >
                                                        {this.state.open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                                        {account.accountName}
                                                    </IconButton>
                                                </TableCell>
                                                {/* <TableCell component="th" scope="row">
                                                    {account.accountName}
                                                </TableCell> */}
                                            </TableRow>
                                            <TableRow>
                                                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                                    <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                                                        <Box sx={{ margin: 1 }}>
                                                            
                                                            <Table size="small" aria-label="purchases">
                                                                <TableBody>
                                                                    <TableRow>
                                                                        <TableCell>Account Name</TableCell>
                                                                        <TableCell>{account.accountName}</TableCell>
                                                                    </TableRow>
                                                                    <TableRow>
                                                                        <TableCell>Account Number</TableCell>
                                                                        <TableCell>{account.accountNumber}</TableCell>
                                                                    </TableRow>
                                                                    <TableRow>
                                                                        <TableCell>Account Type</TableCell>
                                                                        <TableCell>{account.accountType}</TableCell>
                                                                    </TableRow>
                                                                    <TableRow>
                                                                        <TableCell>Account Balance</TableCell>
                                                                        <TableCell>{account.balance}</TableCell>
                                                                    </TableRow>
                                                                    <TableRow>
                                                                        <TableCell>Account Created At</TableCell>
                                                                        <TableCell>{account.createdAt}</TableCell>
                                                                    </TableRow>
                                                                </TableBody>
                                                            </Table>
                                                        </Box>
                                                    </Collapse>
                                                </TableCell>
                                            </TableRow>
                                        </React.Fragment>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                }
            </div>
        );
    }
}

export default DashboardPage;