import { Box, Button, MenuItem, Modal, Select, TextField, Typography } from '@mui/material';
import React, { Component } from 'react';
import * as HttpService from '../util/HttpService.js'

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

class AddAccountModal extends Component {
    
    state = {
        accountName: '',
        accountType: ''
    }

    handleAddAccount = () => {
        HttpService.createAccount({
            accountName: this.state.accountName,
            accountType: this.state.accountType
        }).then((response) => {
            this.props.fetchAccountList()
            this.props.onClose()
        }).catch((error) => {

        })
    }

    disabledAddButton = () => {
        return this.state.accountName == '' || this.state.accountType == ''
    }

    render() {
        return (
            <Modal
                open={this.props.openAddAccountModal}
                onClose={this.props.onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add Account
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <TextField id="outlined-basic" label="Account Name" variant="outlined" value={this.state.accountName} onChange={(e) => this.setState({ accountName: e.target.value })} />
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={this.state.accountType}
                        label="Account Type"
                        onChange={(e) => this.setState({ accountType: e.target.value })}
                    >
                        <MenuItem value="Saving">Saving</MenuItem>
                        <MenuItem value="Current">Current</MenuItem>
                        <MenuItem value="Demat">Demat</MenuItem>
                    </Select>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <Button disabled={this.disabledAddButton()} onClick={this.handleAddAccount} className="add-account-button" variant="contained">Create Account</Button>
                    </Typography>
                </Box>
            </Modal>
        );
    }
}

export default AddAccountModal;