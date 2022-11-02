import React, { Component } from 'react';
import * as HttpService from '../util/HttpService'
import { ToastContainer, toast } from 'react-toastify';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Collapse, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import './dashboardpage.css'
import AddAccountModal from '../components/AddAccountModal';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

class DashboardPage extends Component {
    state = {
        accountList: [],
        open: false,
        openAddAccountModal: false

    }

    componentDidMount() {
        this.fetchAccountList()
    }

    fetchAccountList = () => {
        HttpService.fetchUserAccountList().then((response) => {
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
                    <div>
                        <div className="dashboard-buttons-container">
                            <Button className="add-account-button" variant="contained" onClick={() => this.setState({ openAddAccountModal: true })}>Add Account</Button>
                            <Button className="transit-button" variant="contained">Transit</Button>
                        </div>
                        <div className="dashboard-table-container">

                            {this.state.accountList.map(account => (
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        {account.accountName}
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <TableContainer component={Paper}>
                                            <Table aria-label="collapsible table">
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell>Account Name</TableCell>
                                                        <TableCell align='right'>{account.accountName}</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell>Account Number</TableCell>
                                                        <TableCell align='right'>{account.accountNumber}</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell>Account Type</TableCell>
                                                        <TableCell align='right'>{account.accountType}</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell>Account Balance</TableCell>
                                                        <TableCell align='right'>{account.balance}</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell>Account Created At</TableCell>
                                                        <TableCell align='right'>{account.createdAt}</TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </AccordionDetails>
                                </Accordion>
                            ))}

                        </div>
                    </div>
                }
                <AddAccountModal
                    openAddAccountModal={this.state.openAddAccountModal}
                    onClose={() => this.setState({ openAddAccountModal: false })}
                    fetchAccountList={this.fetchAccountList}
                />
            </div>
        );
    }
}

export default DashboardPage;