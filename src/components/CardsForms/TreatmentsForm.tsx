import React, { useState, useEffect } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import FormValidator from '../FormValidator/FormValidator'
import {Errors} from '../FormValidator/FormValidator'
import AlertMessage from '../SnackBar/SnackBar'
import { Redirect } from 'react-router'

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
        paddingBottom: '4px',
        '&:hover': {
          backgroundColor: '#5A8A98'
        }
    },
  }),
);



interface State {
  name?: string
  cellPhone?: string
  telephone?: string
  email?: string
  treatment?: string
}
interface Props {
  selected: string
}

const TreatmentsForm  = (props:Props) => {
    const classes = useStyles();
    const {selected} = props
    const [values, setValues] = useState<State>({});
    const [errors, setErrors] = useState<State>({})
    const [mailSent, setMailSent] = useState(false)
    const [message, setMessage] = useState('appointment')


    const handleChange = (e: any) => {
      const { name, value  } = e.target
      setValues({ ...values, [name]: value });
    };

    useEffect(() => {
      return setErrors(FormValidator(values))
    }, [values])

    useEffect(()=>{
      setValues({
        treatment: selected
      })
    },[])

   

    const handleSubmit = (e:any) => {
      e.preventDefault();
          axios({
            method: "POST",
            url:"http://luxurysmile.co/php/index.php",
            headers: { 'content-type': 'application/json' },
            data: values
        }).then((response)=>{
            if (response.data === 'success'){
                // setMessage('appointment')
                setMailSent(true)
                setTimeout(()=>{
                    setMailSent(false)
                  },4000)
              setValues({
                  name: '',
                  cellPhone: '',
                  email: '',
                  treatment: selected,
                  telephone: ''
                })
            }else if(response.data === 'fail'){
                setMailSent(true)
                setMessage('error')
                
            }
        })
        .catch(error => {
            console.error(error.message)
        })
    }
    return(
        <form className={`${classes.container} ma4 mt0 w-80 pt0`}  noValidate autoComplete="off" id="contact-form" method="POST" onSubmit={handleSubmit}>
                    <div className="w-100 flex flex-column pa2">
                            <TextField
                                id="name"
                                name="name"
                                label="Nombre completo"
                                className={clsx(classes.textField, classes.dense)}
                                margin="dense"
                                error={errors.hasOwnProperty('name') ? true:false }
                                helperText={errors ?( errors.name || null):null}
                                onChange={(e) => handleChange(e)}
                                value={values.name || ''}
                            />
                            <TextField
                                id="cellPhone"
                                name="cellPhone"
                                label="Celular"
                                className={clsx(classes.textField, classes.dense)}
                                margin="dense"
                                error={ errors.hasOwnProperty('cellPhone')? true:false }
                                helperText={errors ?(  errors.cellPhone || null):null}
                                onChange={(e) => handleChange(e)}
                                value={values.cellPhone || ''}
                            />
                            <TextField
                                id="telephone"
                                name="telephone"
                                label="Teléfono"
                                className={clsx(classes.textField, classes.dense)}
                                margin="dense"
                                onChange={(e) => handleChange(e)}
                                error={errors.hasOwnProperty('telephone')  ? true:false }
                                helperText={errors ? (errors.telephone || null):null}
                                value={values.telephone || ''}
                            />
                            <TextField
                                id="email"
                                name="email"
                                label="Correo electrónico"
                                className={clsx(classes.textField, classes.dense)}
                                margin="dense"
                                error={errors.hasOwnProperty('email') ? true:false }
                                onChange={(e) => handleChange(e)}
                                helperText={errors ? (errors.email || null):null}
                                value={values.email || ''}
                            />
                     
                        
                        <div className="w-100 flex ph4 pt4 justify-center">
                        <Button variant="contained" className={`${classes.button}`} type="submit">
                            ENVIAR
                        </Button>
                        </div>
                    </div>
                    <div>
                        <div><AlertMessage messageType={message} shouldbeOpen={mailSent} /></div>
                    </div>
                    {mailSent && (
                      <Redirect to={'thankyou'}/>
                    )}
                </form>
    )
}

export default TreatmentsForm