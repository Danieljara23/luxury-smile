import React, { useState, useEffect } from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import { makeStyles, Theme, createStyles  } from '@material-ui/core/styles';
import clsx from 'clsx';

interface Props{
  messageType: string
  shouldbeOpen: boolean
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    close: {
      padding: theme.spacing(0.5),
      color: '#2393B2'
    },
    snackBar: {
      '& .MuiPaper-root':{
        backgroundColor: '#2393B2',
        color: 'white'
      }
    },
    snackBarError: {
      '& .MuiPaper-root':{
        backgroundColor: '#ea3535',
        color: 'white'
      }
    },

  }),
);



const AlertMessage = (props: Props) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const { messageType, shouldbeOpen } = props
  let message

  useEffect(()=>{
    setOpen(shouldbeOpen)
  })
  if(messageType === 'contact'){
    message = 'Gracias por ponerte en contacto con Luxury Smile, te responderemos en la mayor brevedad'
  }else if(messageType === 'appointment'){
    message = 'Hemos agendado tu cita, nos estaremos comunicando contigo telefónicamente para confirmarla.'
  }else if(messageType === 'error'){
    message = 'Ha ocurrido un error, intenta una vez más'
  }

  function handleClose(event: React.SyntheticEvent | React.MouseEvent, reason?: string) {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }

  return (
    <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }}
      open={open}
      className={`${messageType === 'error' ? classes.snackBarError: classes.snackBar}`}
      autoHideDuration={6000}
      onClose={handleClose}
      ContentProps={{ 'aria-describedby': 'message-id',}}
      message={<span id="message-id">{message}</span>}
      
    />
  )
}

export default AlertMessage