import React, { useState } from 'react'
import './Appointment.css'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TreatmentsList from '../Home/HomeComponents/TreatmentsList'
import InputLabel from '@material-ui/core/InputLabel';

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
    formControl: {
        margin: theme.spacing(1),
        width: '300px'
    },
  }),
);



const Appointment = () => {
    const classes = useStyles();
    const [treatmentSelected, setTreatmentSelected ] = useState({
        age: ''
    })
    const isMobile = window.innerWidth <= 400
    function handleChange(event: React.ChangeEvent<{ name?: string; value: unknown }>) {
        setTreatmentSelected(oldValues => ({
            ...oldValues,
            [event.target.name as string]: event.target.value,
        }));
    }
    return(
        <div className="w-100">
            <h4 className="appointment-title">Pide tu cita</h4>
            <div className="w-100 promotion-image">
                {/* <img src={isMobile ? FirstSlideMobile: FirstSlide} alt=""/> */}
            </div>
            <div className="w-100 appointment-form mt1 center flex justify-center">
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
                                label="Celular *"
                                className={clsx(classes.textField, classes.dense)}
                                margin="dense"
                            />
                        </div>
                        <div className="w-100 flex ph4 mt4 justify-center">
                            <TextField
                                id="standard-dense"
                                label="Teléfono fijo"
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
                        <div className="w-100 flex ph4 pt4 justify-start">
                            <div className="w-70 pt3 pr3 pl0">
                            <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="select-simple">Tratamiento</InputLabel>
                                <Select
                                value={treatmentSelected}
                                onChange={handleChange}
                                inputProps={{
                                    title: 'Ortodoncia',
                                    id: 'select-simple',
                                }}
                                >
                                    {
                                        TreatmentsList.map((item) => (
                                                <MenuItem value={item.title}>{item.title}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                            </div>
                            <div></div>
                        </div>
                        <div className="w-100 flex ph4 pt4 justify-center">
                        <Button variant="contained" className={`${classes.button}`}>
                            PIDE TU CITA AQUÍ
                        </Button>
                        </div>
                    </div>

                </form>
            </div>
            
        </div>
    )
}

export default Appointment