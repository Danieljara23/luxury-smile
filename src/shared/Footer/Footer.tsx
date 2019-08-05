import React from 'react';
import { ReactComponent as Facebook } from '../../components/images/ico-facebook.svg'
import { ReactComponent as Instagram } from '../../components/images/ico-instagram.svg'
import './Footer.css'

const Footer = () => {
    return(
        <>
            <div className="w-100 flex footer pa4 pb5 pt3">
                <div className="footer-item w-25 tl">
                    <h6 className="b">Horario de atención</h6>
                    <div className="flex flex-column">
                        <p>Lunes a viernes: 8am - 6pm</p>
                        <p>Sábados: 9am - 1pm</p>
                        <p>Domingo: Casos especiales</p>
                    </div>
                </div>
                <div className="footer-item w-50 tl">
                    <h6 className="b tl">Contáctanos</h6>
                    <div className="w-100 flex contact-footer">
                        <div className="pr3 flex flex-column">
                            <p>Carrera 80a #32 EE - 72</p>
                            <p>Edificio OFIX 33 PISO 7 CONSULTORIO 715</p>
                            <p>Medellín - Colombia</p>
                            <p>luxurysmilecolombia@gmail.com</p>
                        </div>
                        <div className="pl3 flex flex-column">
                            <p>Teléfono:  557 84 16</p>
                            <p>Para llamadas y Whatsapp: 301 371 9026 / 350 873 6090
</p>
                        </div>
                    </div>
                </div>
                <div className="footer-item w-25 tl">
                    <h6 className="b">¡Síguenos!</h6>
                    <div className="flex flex-column">
                        <p>@luxurysmilecolombia</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/luxurysmilecolombia/" target="_blank">
                                <Instagram/>
                            </a>
                             <a href="https://www.facebook.com/LUXURY-SMILE-526886811114080/" target="_blank">
                                <Facebook/>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            <div className="footer-copyright flex items-center justify-center">
                <h6 >© Copyright 2019 Luxury Smile. Medellín - Colombia</h6>
            </div>
        </>
    )
}

export default Footer