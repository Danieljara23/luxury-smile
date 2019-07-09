import React from 'react';
import { ReactComponent as IcoCalidad } from '../../../images/ico-calidad.svg'
import { ReactComponent as IcoEspecialistas } from '../../../images/ico-especialistas.svg'
import { ReactComponent as IcoMetodoPago } from '../../../images/ico-metodo-de-pago.svg'


const Advantages = () => {
    return(
        <>
        <div className="w-100 flex pv3 justify-center">
            <div className="w-30 flex items-center justify-center">
                <IcoEspecialistas/>
                <p className="ml2 f7 advantage-color">Atentido por especialistas</p>
            </div>
            <div className="w-30 flex items-center justify-center">
                <IcoCalidad/>
                <p className="ml2 f7 advantage-color">Calidad y servicio premium</p>
            </div>
            <div className="w-30 flex items-center justify-center">
                <IcoMetodoPago/>
                <p className="ml2 f7 advantage-color">Pago en efectivo o con tarjeta</p>
            </div>
        </div>
        </>
    )
}

export default Advantages