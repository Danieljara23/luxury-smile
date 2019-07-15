import React from 'react';
import './Footer.css'

const Footer = () => {
    return(
        <>
            <div className="w-100 flex footer pa4">
                <div className="footer-item w-25 tl">
                    <h6 className="b">Horario de atención</h6>
                    <p>Lunes a viernes: 8am - 6pm</p>
                    <p>Sábados: 8am - 12pm</p>
                    <p>Domingo: cerrado</p>
                </div>
                <div className="footer-item w-50 tl">
                    <h6 className="b tl">Contáctanos</h6>
                    <div className="w-100 flex contact-footer">
                        <div className="pr3">
                            <p>Edificio Ofix 33 piso 7 consultorio 715</p>
                            <p>Carrera 80a #32 EE - 72. Medellín - Colombia</p>
                            <p>luxurysmilecolombia@gmail.com</p>
                        </div>
                        <div className="pl3">
                            <p>Teléfono: 557 84 16</p>
                            <p>WhatsApp: 301 371 90 26</p>
                        </div>
                    </div>
                </div>
                <div className="footer-item w-25 tl">
                    <h6 className="b">¡Síguenos!</h6>
                    <p>@luxurysmilecolombia</p>
                    <p>Socials</p>
                </div>

            </div>
            <div className="footer-copyright flex items-center justify-center">
                <h6 className="mb2 mt3">© Copyright 2019 Luxury Smile. Medellín - Colombia</h6>
            </div>
        </>
    )
}

export default Footer