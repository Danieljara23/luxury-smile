import React, { useState, useEffect } from 'react'
import Dialog from '@material-ui/core/Dialog';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';

interface Props{
    formType: string
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root:{

        }
    })
)
const FormAlert = (props:Props) => {
    const [showAlert, setShowAlert] =useState(false)
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const  formType  = props.formType 

    function handleOpen() {
        setShowAlert(true);
    }
    
    function handleClose() {
        setShowAlert(false);
    }

    useEffect(()=> {
        handleOpen()
    })

    return(
        <Dialog
        fullScreen={fullScreen}
        open={showAlert}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            
                {
                    formType === "contact" ?
                   (<p>Gracias por ponerte en contacto con Luxury Smile, te responderemos en la mayor brevedad</p>):<></> 
                }
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nam inventore, nemo excepturi culpa cumque ipsa doloremque quas incidunt soluta, dolorum magnam ut repudiandae veniam. Placeat quidem sapiente suscipit labore.</p>
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    )
}

export default FormAlert