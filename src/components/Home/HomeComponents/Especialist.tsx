import React from 'react';
import { EspecialistsList } from './EspecialistList'
import { ReactComponent as IcoCalidad } from '../../images/ico-calidad.svg'

const Especialist = () => {

    return(
        <div className="w-100 flex justify-center mt5">
            {
                EspecialistsList.map((item)=> (
                    <div className="w-30">
                        <div className="especialist-image">
                            <img src={item.imgPath} alt={item.name}/>
                        </div>
                        <div className="especialist-info mt3 flex flex-column justify-center">
                            <p className="especialist-name"><span className="especialist-prefix">{item.prefixType}.</span> {item.name}</p>
                            <p className="especialist-school">{item.schoolName}</p>
                            <IcoCalidad/>
                            <p className="especialist-treatment">{item.fieldName}</p>
                            <p className="especialist-read-more">Leer más</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default Especialist