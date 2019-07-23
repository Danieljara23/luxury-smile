import React, { useState } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import axios from 'axios';
import Button from '@material-ui/core/Button';

interface State {
    name: string
    cellPhone: string
    telephone: string
    email: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      flexWrap: 'wrap',
      margin: 'auto',
      marginTop: '0',
      marginBottom: 0,
      paddingBottom: '20px'
    },
    textField: {
      width: '100%',
      '& label.Mui-focused': {
        color: '#69ABBE',
      },
      '& label.MuiInputLabel-root': {
        color: '#AFAFAF',
      },
      '& .MuiInput-underline:before': {
        borderBottomColor: '#AFAFAF',
        borderBottom: '1px solid'
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#69ABBE',
      },
      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderBottomColor: '#69ABBE',
      },
    },
    multiLine: {
        width: '65%',
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
    button: {
        borderRadius: 19,
        backgroundColor: '#69ABBE',
        color: 'white',
        fontSize: '12px',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        paddingTop: '5px',
        paddingBottom: '4px'
    },
  }),
);

const TreatmentsForm  = () => {
    const classes = useStyles();
    const [values, setValues] = useState<State>({
        name: '',
        cellPhone: '',
        telephone: '',
        email: '',
    });
    const handleChange = (name: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [name]: event.target.value });
    };
    return(
        <form className={`${classes.container} ma4 mt0 w-80 pt0`}  noValidate autoComplete="off" id="contact-form" method="POST">
                    <div className="w-100 flex flex-column pa2">
                            <TextField
                                id="name"
                                label="Nombre completo"
                                className={clsx(classes.textField, classes.dense)}
                                margin="dense"
                                onChange={handleChange('name')}
                            />
                            <TextField
                                id="cellPhone"
                                label="Celular"
                                className={clsx(classes.textField, classes.dense)}
                                margin="dense"
                                onChange={handleChange('cellPhone')}
                            />
                            <TextField
                                id="telephone"
                                label="Teléfono"
                                className={clsx(classes.textField, classes.dense)}
                                margin="dense"
                                onChange={handleChange('telephone')}
                            />
                            <TextField
                                id="email"
                                label="Correo electrónico"
                                className={clsx(classes.textField, classes.dense)}
                                margin="dense"
                                name="email"
                                onChange={handleChange('email')}
                            />
                     
                        
                        <div className="w-100 flex ph4 pt4 justify-center">
                        <Button variant="contained" className={`${classes.button}`} type="submit">
                            ENVIAR
                        </Button>
                        </div>
                    </div>

                </form>
    )
}

export default TreatmentsForm