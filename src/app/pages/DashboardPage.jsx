import React, { Component } from 'react';
import * as HttpService from '../util/HttpService'
import { ToastContainer, toast } from 'react-toastify';

class DashboardPage extends Component {
    state = {
        accountList: []
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
            </div>
        );
    }
}

export default DashboardPage;