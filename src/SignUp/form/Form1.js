import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function FormPropsTextFields() {
    const classes = useStyles();
    const handleSubmit = (event) => {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    };

    return (
        <>
            <h2>Sign Up</h2>
            <form className={classes.root} noValidate autoComplete="off" action={"user/signup"} method={"post"} onSubmit={handleSubmit}>
                <div>
                    {/*<FormControl>*/}
                        {/*<InputLabel htmlFor="my-input">Email address</InputLabel>*/}
                        {/*<Input id="my-input" aria-describedby="my-helper-text" />*/}
                        {/*<FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>*/}
                    {/*</FormControl>*/}
                    <TextField
                        id="standard-search"
                        label="Search field"
                        type="search"
                    />
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    />
                    <TextField
                        id="standard-password-input"
                        label="Confirm Password"
                        type="password"
                        autoComplete="current-password"
                    />

                </div>
                <input type="submit" value="Submit" />
                {/*<Button variant="contained" color="primary" disableElevation>*/}
                    {/*Disable elevation*/}
                {/*</Button>*/}
            </form>
        </>
    );
}
