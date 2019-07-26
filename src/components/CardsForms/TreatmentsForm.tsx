import React, { useState } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import FormValidator from '../FormValidator/FormValidator'
import {Errors} from '../FormValidator/FormValidator'

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


interface State {
  name: string
  cellPhone: string
  telephone: string
  email: string
  message: string
}


const TreatmentsForm  = () => {
    const classes = useStyles();
    const [values, setValues] = useState<State>({
      name: '',
      cellPhone: '',
      telephone: '',
      email: '',
      message: 'Hola, deseo que se contacten conmigo para obtener mayor información',
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
              alert("Message Sent."); 
              let contactForm = document.getElementById('contact-form')
              if(contactForm){
                contactForm.reset()
              }
          }else if(response.data.msg === 'fail'){
              alert("Message failed to send.")
          }
      })
    }
    return(
        <form className={`${classes.container} ma4 mt0 w-80 pt0`}  noValidate autoComplete="off" id="contact-form" method="POST" onSubmit={handleSubmit}>
                    <div className="w-100 flex flex-column pa2">
                            <TextField
                                id="name"
                                label="Nombre completo"
                                className={clsx(classes.textField, classes.dense)}
                                margin="dense"
                                error={errors.name != '' ? true:false }
                                helperText={errors.name || null}
                                onChange={handleChange('name')}
                            />
                            <TextField
                                id="cellPhone"
                                label="Celular"
                                className={clsx(classes.textField, classes.dense)}
                                margin="dense"
                                error={errors.cellPhone != '' ? true:false }
                                helperText={errors.cellPhone || null}
                                onChange={handleChange('cellPhone')}
                            />
                            <TextField
                                id="telephone"
                                label="Teléfono"
                                className={clsx(classes.textField, classes.dense)}
                                margin="dense"
                                onChange={handleChange('telephone')}
                                error={errors.telephone != '' ? true:false }
                                helperText={errors.telephone || null}
                            />
                            <TextField
                                id="email"
                                label="Correo electrónico"
                                className={clsx(classes.textField, classes.dense)}
                                margin="dense"
                                name="email"
                                error={errors.email != '' ? true:false }
                                onChange={handleChange('email')}
                                helperText={errors.email || null}
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