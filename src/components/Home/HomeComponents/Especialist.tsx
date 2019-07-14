import React from 'react';
import { EspecialistsList } from './EspecialistList'
import { ReactComponent as IcoCalidad } from '../../images/ico-calidad.svg'
import { ReactComponent as Flecha } from '../../images/ico-flecha.svg'

const Especialist = () => {

    return(
        <div className="w-100 mt5 pb5">
            <div className="w-100">
                <h3 className="especialist-title">Especialistas</h3>
            </div>
            <div className="w-100 flex justify-center ">
                {
                    EspecialistsList.map((item)=> (
                        <div className="w-30">
                            <div className="especialist-image">
                                <img src={item.imgPath} alt={item.name}/>
                            </div>
                            <div className="especialist-info mt3 flex flex-column justify-center items-center">
                                <p className="especialist-name"><span className="especialist-prefix">{item.prefixType}.</span> {item.name}</p>
                                <p className="especialist-school">{item.schoolName}</p>
                                <div className="quality-icon"><IcoCalidad/></div>
                                <p className="especialist-treatment">{item.fieldName}</p>
                                <p className="especialist-read-more">Leer más <Flecha/></p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Especialist