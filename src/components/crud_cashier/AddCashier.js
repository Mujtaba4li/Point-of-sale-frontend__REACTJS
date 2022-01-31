import * as React from 'react';
import { Component } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
// import axios from 'axios';
import { CreateCashier } from '../../actions/ProjectActions';
import { connect } from 'react-redux'

export class AddCashier extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname: '',
            lastname: '',
            phone: '',
            email: '',
            password: ''
        }
    }
    changeHandler = (event, fieldName) => {
        this.setState({
            [fieldName]: event.target.value
        })
    }
    submitHandler = (event) => {
        const NewCashier = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            phone: this.state.phone,
            email: this.state.email,
            password: this.state.password
        }
        this.props.CreateCashier(NewCashier,this.props.history)
        event.preventDefault();
    }
    render() {
        return (
            <>
                <form method='post' onSubmit={(event) => this.submitHandler(event)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                onChange={(event) => this.changeHandler(event, "firstname")}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                // name="lastName"
                                autoComplete="family-name"
                                onChange={(event) => this.changeHandler(event, "lastname")}

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="number"
                                label="Phone Number"
                                // name="number"
                                autoComplete="Enter Number"
                                onChange={(event) => this.changeHandler(event, "phone")}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                // name="email"
                                autoComplete="email"
                                onChange={(event) => this.changeHandler(event, "email")}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                // name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="password"
                                onChange={(event) => this.changeHandler(event, "password")}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Add Cashier
                    </Button>
                    <Grid container justifyContent="flex-end">
                    </Grid>
                </form>
            </>);
    }
}

const MapStateToProps=(state)=>({
    error:state.error

})
export default connect(MapStateToProps, { CreateCashier })(AddCashier);


