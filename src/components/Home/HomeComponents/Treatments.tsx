import React from 'react';
import  CardsCarousel  from '../HomeComponents/CardsCarousel'
import Link from '@material-ui/core/Link';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
    createStyles({
        seeAll: {
            color: '#2393B2',
            fontSize: 13,
            fontWeight: 'bold'
        }
    }))

const Treatments = () => {
    const classes = useStyles();

    return(
        <div className="w-100 ph5 flex flex-column treatments-background pb4">
            <div className="w-100">
                <h3 className="treatments-title mb4 mt5">Tratamientos</h3>
            <CardsCarousel/>
            </div>
            <div className="w-100 pv3">
                <Link className={`${classes.seeAll} ttu see-all ph3 pv1`}>VER TODOS </Link>
            </div>
        </div>
        
    )
}

export default Treatments