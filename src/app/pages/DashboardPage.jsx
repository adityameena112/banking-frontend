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
        }).catch((error) => {
            toast.error("Unable to fetch account")
        })
    }

    render() { 
        return (
            <div>
                <h1>Dashboard</h1>
            </div>
        );
    }
}
 
export default DashboardPage;