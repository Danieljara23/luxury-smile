import React from 'react'
import { ExperienceList } from '../Home/HomeComponents/ExperienceList'
import Chip from '@material-ui/core/Chip';
import './ConsultoryExperience.css'
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
    createStyles({
        root: {
            backgroundColor: '#9D9D9D',
            color: 'white',
            fontSize: '12px',
            fontWeight: 500,
            borderRadius: 19
        }
    }),
);

interface Props{
    title?: string
}

const ConsultoryExperience = (props:Props) => {
    const classes = useStyles();

    return(
        <div className="w-100 flex flex-column">
            {props.title ? (
                <h6 className="consultory-experience-title">{props.title}</h6>

            ):(<></>)}
            <div className="w-100 flex">
                {ExperienceList.map((item) => (
                    <div className="w-100">
                        <div className="img-experience dib mt4">
                            <img src={item.imgPath} alt={item.name}/>
                        </div>
                        <h6 className="pt3 white experience-title mv2">{item.name}</h6>
                        <p className="b white experience-type">Paciente <Chip className={classes.root} label={item.treatmentType} /></p>
                        <div className="w-100 flex justify-center pb3">
                            <p className="white experience-description w-60">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ConsultoryExperience