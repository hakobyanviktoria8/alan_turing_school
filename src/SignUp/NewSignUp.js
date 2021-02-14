import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
// import { useSnackbar } from 'notistack';
import { useForm, Controller } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

// import UserService from '@services/user';

// import { UserContext } from '@contexts/user';
// import { AuthContext } from '@contexts/auth';

const useStyles = makeStyles();

export function NewSignUp (props) {
    // const [error, setError] = useState("");
    const { handleSubmit, control, setError , errors: fieldsErrors, reset } = useForm();

    const onSubmitLogin = ( data) =>{
        console.log(data)
    };
    const validatePassword = (pass) => {
        if (!(/(?=.{8,})/i).test(pass)){
            setError("password", {
                type: "test",
                message: "Must contain at least 8 characters"}
        );
            return false
        }

        // pattern: {
        //     value: /(?=.{8,})/i,
        //         message: 'Must contain at least 8 characters'
        // },
        // pattern: {
        //     value: /(?=.*[a-z])/i,
        //         message: 'Must contain at least 1 letter in lowercase'
        // }
    };

    return (
        <Grid container component="main" >
            <Grid item xs={12} elevation={2}>
                <form onSubmit={handleSubmit(onSubmitLogin)}>
                    <FormControl fullWidth  variant="outlined">
                        <Controller
                            name="email"
                            as={
                                <TextField
                                    id="email"
                                    labelWidth={40}
                                    helperText={fieldsErrors.email ? fieldsErrors.email.message : null}
                                    variant="outlined"
                                    label="Email"
                                    error={fieldsErrors.email}
                                />
                            }
                            control={control}
                            defaultValue=""
                            rules={{
                                required: 'Required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: 'invalid email address'
                                }
                            }}
                        />
                    </FormControl>
                    <FormControl fullWidth variant="outlined">
                        <Controller
                            name="password"
                            as={
                                <TextField
                                    id="password"
                                    type="password"
                                    labelWidth={70}
                                    helperText={fieldsErrors.password ? fieldsErrors.password.message : null}
                                    variant="outlined"
                                    label="Password"
                                    error={fieldsErrors.password}
                                />
                            }
                            control={control}
                            defaultValue=""

                            rules={{
                                required: 'Required',
                                validate: validatePassword
                            }}
                        />
                    </FormControl>

                    {/*{generalLoginError && <div>{generalLoginError}</div>}*/}
                    <Button variant="contained" color="primary" type="submit">
                        Login
                    </Button>
                </form>
            </Grid>
        </Grid>
    );
}
