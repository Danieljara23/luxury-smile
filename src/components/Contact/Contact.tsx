import React, { useState } from 'react'
import './Contact.css'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Contact from '../Home/HomeComponents/Contact'
import ContactInfo from '../ContactInfo/ContactInfo'
import axios from 'axios';

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

    const handleChange = (name: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [name]: event.target.value });
    };

    const handleSubmit = (e:any) => {
      console.log(values)
      e.preventDefault();
        axios({
          method: "POST", 
          url:"http://localhost:3002/send", 
          data: values
      }).then((response)=>{
        console.log(response)
          if (response.data.msg === 'success'){
              alert("Message Sent."); 
              resetForm(e)
          }else if(response.data.msg === 'fail'){
              alert("Message failed to send.")
          }
      })
    }

    const resetForm = (e:any) => {
      e.target.reset()
    }
    
    return(
        <div className="w-100 contact-form-container">
            <h4 className="contact-title">Contacto</h4>
            <div className="w-100 contact-form center flex justify-center">
                <form className={`${classes.container} ma4 w-80 pt0`} onSubmit={handleSubmit} noValidate autoComplete="off" id="contact-form" method="POST">
                    <div className="w-100 flex flex-column form-border pa4">
                        <div className="w-100 flex ph4 justify-center form-containers">
                            <TextField
                                id="name"
                                label="Nombre completo"
                                className={`${clsx(classes.textField, classes.dense)} mobile-input`}
                                margin="dense"
                                onChange={handleChange('name')}
                            />
                            <TextField
                                id="cellPhone"
                                label="Celular"
                                className={`${clsx(classes.textField, classes.dense)} mobile-input`}
                                margin="dense"
                                onChange={handleChange('cellPhone')}
                            />
                        </div>
                        <div className="w-100 flex ph4 mt4 justify-center form-containers">
                            <TextField
                                id="telephone"
                                label="Teléfono"
                                className={`${clsx(classes.textField, classes.dense)} mobile-input`}
                                margin="dense"
                                onChange={handleChange('telephone')}
                            />
                            <TextField
                                id="email"
                                label="Correo electrónico"
                                className={`${clsx(classes.textField, classes.dense)} mobile-input`}
                                margin="dense"
                                name="email"
                                onChange={handleChange('email')}
                            />
                        </div>
                        <div className="w-100 flex ph4 pt4 justify-center form-containers">
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