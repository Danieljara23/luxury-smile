import React from 'react'
import './Contact.css'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Contact from '../Home/HomeComponents/Contact'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '300px',
      '& label.Mui-focused': {
        color: '#69ABBE',
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

const ContactSection = () => {
    const classes = useStyles();
    
    
    return(
        <div className="w-100">
            <h4 className="contact-title">Contacto</h4>
            <div className="w-100 contact-form center flex justify-center">
                <form className={`${classes.container} ma4 w-80 pt0`} noValidate autoComplete="off">
                    <div className="w-100 flex flex-column form-border pa4">
                        <div className="w-100 flex ph4 justify-center">
                            <TextField
                                id="standard-dense"
                                label="Nombre completo"
                                className={clsx(classes.textField, classes.dense)}
                                margin="dense"
                            />
                            <TextField
                                id="standard-dense"
                                label="Celular"
                                className={clsx(classes.textField, classes.dense)}
                                margin="dense"
                            />
                        </div>
                        <div className="w-100 flex ph4 mt4 justify-center">
                            <TextField
                                id="standard-dense"
                                label="Teléfono"
                                className={clsx(classes.textField, classes.dense)}
                                margin="dense"
                            />
                            <TextField
                                id="standard-dense"
                                label="Correo electrónico"
                                className={clsx(classes.textField, classes.dense)}
                                margin="dense"
                            />
                        </div>
                        <div className="w-100 flex ph4 pt4 justify-center">
                            <TextField
                                id="outlined-dense-multiline"
                                label="Escribe tu mensaje aquí*"
                                className={clsx(classes.textField, classes.dense, classes.multiLine)}
                                multiline
                                rows="4"
                                defaultValue=""
                                margin="normal"
                                variant="outlined"
                            />
                        </div>
                        <div className="w-100 flex ph4 pt4 justify-center">
                        <Button variant="contained" className={`${classes.button}`}>
                            ENVIAR
                        </Button>
                        </div>
                    </div>

                </form>
            </div>
            <div className="w-100 contact-component-container">
                <Contact/>
            </div>
        </div>
    )
}

export default ContactSection