import React from 'react'
import { ExperienceList } from '../Home/HomeComponents/ExperienceList'
// import Chip from '@material-ui/core/Chip';
import './ConsultoryExperience.css'
import { createStyles, makeStyles } from '@material-ui/core/styles';
import  MisionImage from '../images/mision.png'
import  VisionImage from '../images/vision.png'

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

const Mision = () => {
    const classes = useStyles();

    return(
        <div className="w-100 flex flex-column">
            
            <div className="w-100 flex  testimonies-consultory">

                     <div className="w-100">
                        <div className="img-experience dib mt4">
                            <img src={VisionImage} alt="Vision"/>
                        </div>
                        <h6 className="pt3 white experience-title mv2">Visión</h6>
                        {/* <p className="b white experience-type">Paciente <Chip className={classes.root} label={item.treatmentType} /></p> */}
                        <div className="w-100 flex justify-center pb3">
                            <p className="white experience-description w-90">Posicionarnos en el mercado de servicios de salud odontologica como una entidad reconocida y con prestigio, basados en los resultados de nuestros tratamientos, el trato a nuestros pacientes, y la constante preparacion y actualizacion de nuestros profesionales especialistas, innovando con tecnicas  actualizadas para los diferentes tratamientos odontologicos, y de esta manera lograr los mejores resultados, siempre con el objetivo claro de expandir con nuevas sedes en diferentes ciudades del pais.</p>
                        </div>
                    </div>
                
                    <div className="w-100">
                        <div className="img-experience dib mt4">
                            <img src={MisionImage} alt="Mision"/>
                        </div>
                        <h6 className="pt3 white experience-title mv2">Misión</h6>
                        {/* <p className="b white experience-type">Paciente <Chip className={classes.root} label={item.treatmentType} /></p> */}
                        <div className="w-100 flex justify-center pb3">
                            <p className="white experience-description w-90">Convertirnos en la primera opcion para realizar tu tratamiento odontologico de alta calidad y estetica, ser la mejor eleccion para nuestros pacientes, poniendo al servicio de los mismos a los mejores profesionales especialistas en cada area de la odontologia, al igual que materiales de la mas alta calidad, nos fundamentamos en parametros de excelencia en cada uno de las actividades que realizamos para lograr el mejor resultado en cada uno de nuestros tratamientos y actividades.</p>
                        </div>
                    </div>
                    
            </div>
        </div>
    )
}

export default Mision