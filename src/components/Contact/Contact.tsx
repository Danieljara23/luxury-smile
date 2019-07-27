import React, { useState } from 'react'
import './Contact.css'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Contact from '../Home/HomeComponents/Contact'
import ContactInfo from '../ContactInfo/ContactInfo'
import axios from 'axios';
import FormValidator from '../FormValidator/FormValidator'
import {Errors} from '../FormValidator/FormValidator'
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
        borderColor: '#69ABBE',
      },
      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#69ABBE',
      },
      '& .Mui-error.MuiInput-underline:after': {
        borderColor: '#f44336',
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
          backgroundColor: '#69ABBE'
        }
    },
  }),
);



interface State {
  name: string
  cellPhone: string
  telephone: string
  email: string
  message: string
}

const ContactSection = () => {
    const classes = useStyles();
    
    const [values, setValues] = useState<State>({
      name: '',
      cellPhone: '',
      telephone: '',
      email: '',
      message: '',
    });
    const [errors, setErrors] = useState<Errors>({
      name: '',
      cellPhone: '',
      email: '',
      message: '',
      telephone: ''
    })

    const handleChange = (name: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [name]: event.target.value });
      setErrors(FormValidator(values)) 
      console.log(errors)
    };

    const handleSubmit = (e:any) => {
      e.preventDefault();
        axios({
          method: "POST", 
          url:"http://localhost:3002/send", 
          data: values
      }).then((response)=>{
        console.log(response)
          if (response.data.msg === 'success'){
            alert("Gracias por ponerte en contacto con Luxury Smile, te responderemos en la mayor brevedad")
            setValues(
              {
                name: '',
                cellPhone: '',
                telephone: '',
                email: '',
                message: '',
              }
            )
          }else if(response.data.msg === 'fail'){
              alert("Message failed to send.")
          }
      })
    }

    
    
    return(
        <div className="w-100 contact-form-container">
            <h4 className="contact-title">Contacto</h4>
            <div className="w-100 contact-form center flex justify-center mb4">
                <form className={`${classes.container} w-100 pt0 justify-center`} onSubmit={handleSubmit} noValidate autoComplete="off" id="contact-form" method="POST">
                    <div className="w-60 flex flex-column form-border pa4">
                        <div className="flex ph4 justify-center form-containers">
                            <TextField
                                id="name"
                                label="Nombre completo"
                                className={`${clsx(classes.textField, classes.dense)} mobile-input`}
                                margin="dense"
                                error={errors.name != '' ? true:false }
                                helperText={errors.name || null}
                                onChange={handleChange('name')}
                                value={values.name}
                                required
                            />
                            <TextField
                                id="cellPhone"
                                label="Celular"
                                className={`${clsx(classes.textField, classes.dense)} mobile-input`}
                                margin="dense"
                                error={errors.cellPhone != '' ? true:false }
                                helperText={errors.cellPhone || null}
                                onChange={handleChange('cellPhone')}
                                value={values.cellPhone}
                                required
                            />
                        </div>
                        <div className="flex ph4 justify-center form-containers">
                            <TextField
                                id="telephone"
                                label="Teléfono"
                                className={`${clsx(classes.textField, classes.dense)} mobile-input`}
                                margin="dense"
                                onChange={handleChange('telephone')}
                                error={errors.telephone != '' ? true:false }
                                helperText={errors.telephone || null}
                                value={values.telephone}
                                required
                            />
                            <TextField
                                id="email"
                                label="Correo electrónico"
                                className={`${clsx(classes.textField, classes.dense)} mobile-input`}
                                margin="dense"
                                name="email"
                                error={errors.email != '' ? true:false }
                                onChange={handleChange('email')}
                                helperText={errors.email || null}
                                value={values.email}
                                required
                            />
                        </div>
                        <div className="flex ph4 justify-center form-containers">
                            <TextField
                                id="message"
                                label="Escribe tu mensaje aquí*"
                                className={`${clsx(classes.textField, classes.dense, classes.multiLine)} mobile-input`}
                                multiline
                                rows="4"
                                defaultValue=""
                                margin="normal"
                                variant="outlined"
                                onChange={handleChange('message')}
                                error={errors.message != '' ? true:false }
                                helperText={errors.message || null}
                                value={values.message}
                                required
                            />
                        </div>
                        <div className="w-100 flex ph4 pt4 justify-center">
                        <Button variant="contained" className={`${classes.button}`} type="submit">
                            ENVIAR
                        </Button>
                        </div>
                    </div>

                </form>
            </div>
            <div className="w-100 contact-component-container">
                <Contact/>
                <ContactInfo/>
            </div>
        </div>
    )
}

export default ContactSection