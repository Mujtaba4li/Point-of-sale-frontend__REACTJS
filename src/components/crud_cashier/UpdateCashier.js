import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

export default function UpdateCashier() {
    return (
        <>



                <form>


                    <Grid container spacing={2}>
                    <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="id"
                                label="Cashier ID"
                                name="id"
                                autoComplete="Enter cashier ID"
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="family-name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="number"
                                label="Phone Number"
                                name="number"
                                autoComplete="Enter Number"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                        </Grid>

                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Update Cashier
                    </Button>
                    <Grid container justifyContent="flex-end">

                    </Grid>

                </form>
            



        </>
    )
}
