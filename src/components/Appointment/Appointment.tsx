import React, { useState, useEffect } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TreatmentsList from '../Home/HomeComponents/TreatmentsList'
import InputLabel from '@material-ui/core/InputLabel';
import ContactInfo from '../ContactInfo/ContactInfo'
import axios from 'axios';
import AppointmentFormValidator from '../FormValidator/AppointmentFormValidator'
import { Errors } from '../FormValidator/AppointmentFormValidator'
import './Appointment.css'

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
        paddingBottom: '4px',
        '&:hover': {
            backgroundColor: '#5A8A98'
        }
    },
    formControl: {
        margin: theme.spacing(1),
        width: '300px'
    },
    selectInput: {
        color: 'color: rgba(0, 0, 0, 0.87)',
        textAlign: 'left'
    }
  }),
);

interface State {
    name?: string
    cellPhone?: string
    telephone?: string
    email?: string
    treatment?: string
  }


const Appointment = () => {
    const classes = useStyles();
    const [treatmentSelected, setTreatmentSelected ] = useState({
        especialist: ''
    })
    const [values, setValues] = useState<State>({});
    const [errors, setErrors] = useState<State>({})
    const isMobile = window.innerWidth <= 400

    function handleChangeSelect(event: React.ChangeEvent<{ name?: string; value: unknown }>) {
        setValues(oldValues => ({
            ...oldValues,
            [event.target.name as string]: event.target.value,
        }));
    }
    const handleChange = (e: any) => {
        const { name, value  } = e.target
        setValues({ ...values, [name]: value });
    };
    useEffect(() => {
        console.log(errors)
        return setErrors(AppointmentFormValidator(values))
    }, [values])

    
    const handleSubmit = (e:any) => {
        e.preventDefault();
          axios({
            method: "POST", 
            url:"http://localhost:3002/send", 
            data: values
        }).then((response)=>{
          console.log(response)
            if (response.data.msg === 'success'){
                alert("Hemos agendado tu cita, nos estaremos comunicando contigo telefónicamente para confirmarla."); 
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
      }
  

    return(
        <div className="w-100 apointment-container">
            <h4 className="appointment-title">Pide tu cita</h4>
            <div className="w-100 promotion-image">
                {/* <img src={isMobile ? FirstSlideMobile: FirstSlide} alt=""/> */}
            </div>
            <div className="w-100 appointment-form mt1 center flex justify-center">
                <form className={`${classes.container} ma4 w-100 pt0 justify-center`} noValidate autoComplete="off" id="appointment-form" onSubmit={handleSubmit}>
                    <div className="flex flex-column form-border pa4 justify-center">
                        <div className="flex ph4 pt4 justify-start appointment-container">
                            <TextField
                                id="name"
                                name="name"
                                label="Nombre completo"
                                value={values.name || ''}
                                className={`${clsx(classes.textField, classes.dense)} mobile-input`}
                                margin="dense"
                                error={errors.hasOwnProperty('name') ? true:false }
                                helperText={errors ?( errors.name || null):null}
                                onChange={(e) => handleChange(e)}
                            />
                            <TextField
                                id="cellPhone"
                                name="cellPhone"
                                label="Celular *"
                                value={values.cellPhone}
                                className={`${clsx(classes.textField, classes.dense)} mobile-input`}
                                margin="dense"
                                error={ errors.hasOwnProperty('cellPhone')? true:false }
                                helperText={errors ?(  errors.cellPhone || null):null}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className="flex ph4 pt4 justify-start appointment-container">
                            <TextField
                                id="telephone"
                                name="telephone"
                                value={values.telephone || ''}
                                label="Teléfono fijo"
                                className={`${clsx(classes.textField, classes.dense)} mobile-input`}
                                margin="dense"
                                onChange={(e) => handleChange(e)}
                                error={errors.hasOwnProperty('telephone')  ? true:false }
                                helperText={errors ? (errors.telephone || null):null}
                            />
                            <TextField
                                id="email"
                                name="email"
                                label="Correo electrónico"
                                value={values.email || ''}
                                className={`${clsx(classes.textField, classes.dense)} mobile-input`}
                                margin="dense"
                                error={errors.hasOwnProperty('email') ? true:false }
                                onChange={(e) => handleChange(e)}
                                helperText={errors ? (errors.email || null):null}
                            />
                            
                        </div>
                        <div className="flex ph4 pt4 justify-start appointment-container">
                            <div className="pt3 pr3 pl0 multiline-container">
                            <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="treatment">Servicio</InputLabel>
                                <Select
                                id="treatment"
                                name="treatment"
                                className={classes.selectInput}
                                value={values.treatment || ''}
                                error={errors.hasOwnProperty('treatment') ? true:false }
                                onChange={(e) => handleChange(e)}
                                inputProps={{name: 'treatment', id: 'treatment'}}
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
                        <Button variant="contained" className={`${classes.button}`} type="submit">
                            PIDE TU CITA AQUÍ
                        </Button>
                        </div>
                    </div>

                </form>
            </div>
            <ContactInfo/>
            
        </div>
    )
}

export default Appointment