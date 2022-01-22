import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';


export default function DeleteCashier() {
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
                       

                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                       Delete Cashier
                    </Button>
                    <Grid container justifyContent="flex-end">

                    </Grid>

                </form>
            



        </>
    )
}
