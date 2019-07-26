import React from 'react'
import { NavLink } from "react-router-dom";
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { ReactComponent as Instagram } from '../../components/images/ico-instagram.svg'
import { ReactComponent as Facebook } from '../../components/images/ico-facebook.svg'
import { ReactComponent as Whatsapp } from '../../components/images/ico-whatsapp.svg'
import { ReactComponent as DocCarlos } from '../../components/images/ico-doc-carlos.svg'
import { ReactComponent as DocCarlosMobile } from '../../components/images/logo-carlos-mobile.svg'
import './TopHeader.css'

const isMobile = window.innerWidth < 768;

const useStyles = makeStyles(
    createStyles({
        discountLink: {
            color: '#69ABBE',
            fontSize: '15px',
            fontWeight: 'bold',
            textDecoration: 'none'
        },
        doctor: {

        }
    })
)
const MobileTopHeader = () => {
    const classes = useStyles()

    return(
        <div className="w-100 flex mobile-header top-header">
            <div className="w-70-ns w-100-s top-header-main-text flex items-center justify-end">
                <NavLink className={`${classes.discountLink}`} no-underline to="/Appointment">¡10% de DCTO en tu Blanqueamiento Dental!</NavLink>
            </div>
            <div className="w-20-ns w-70-s top-header-social-network flex flex-row items-center justify-center">
                <div className="">
                    <a href="https://www.instagram.com/luxurysmilecolombia/" target="_blank" className="social-icon">
                        <Instagram/>
                    </a>
                </div>
                <div className="">
                    <a href="https://www.facebook.com/LUXURY-SMILE-526886811114080/" target="_blank" className="social-icon">
                        <Facebook/>
                    </a>
                </div>
                <div className="">
                    <a href="https://wa.me/573013719026" target="_blank" className="social-icon">
                        <Whatsapp/>
                    </a>
                </div>
                <div className="social-network-number w-50">
                    <a href="https://wa.me/573013719026" target="_blank">301 371 90 26</a>
                    {/* <p className="pv1 mv0">301 371 90 26</p> */}
                </div>
            </div>
            <div className="w-20-ns w-30-s top-header-doctor flex items-center">
                <NavLink className={`${classes.doctor}`} no-underline to="/Consultory">
                {
                        isMobile ? <DocCarlosMobile/>:<DocCarlos/>
                    }
                    
                </NavLink>
                
            </div>
            </div>
    )
}

export default MobileTopHeader