import React from 'react'
import { ReactComponent as Facebook } from '../images/ico-facebook-consultorio.svg'
import { ReactComponent as Instagram } from '../images/ico-instagram-consultorio.svg'
import { ReactComponent as WhatsApp } from '../images/ico-whatsapp-consultorio.svg'
import { ReactComponent as Telefono } from '../images/ico-tel.svg'
import { ReactComponent as Email } from '../images/ico-email.svg'

import './ContactInfo.css'

const ContactInfo = () => {
    return(
        <div className="consultory-contact-info w-100 flex mv3">
            <div className="w-25 flex flex-row items-center justify-center">
                <a href="https://wa.me/573013719026" target="_blank"><WhatsApp/></a>
                <p>WhatsApp: 301 371 90 26</p>
            </div>
            <div className="w-25 flex flex-row items-center justify-center">
                <Telefono/>
                <p>557 84 16 - 350 873 60 90</p>
            </div>
            <div className="w-25 flex flex-row items-center justify-center">
                <Email/>
                <p>luxurysmilecolombia@gmail.com</p>
            </div>
            <div className="w-25 flex flex-row items-center justify-center">
                <a href="https://www.instagram.com/luxurysmilecolombia/" target="_blank"><Instagram/></a>
                <a href="https://www.facebook.com/LUXURY-SMILE-526886811114080/" target="_blank"><Facebook/></a>
                <p>@luxurysmilecolombia</p>
            </div>
        </div>
    )
}
export default ContactInfo