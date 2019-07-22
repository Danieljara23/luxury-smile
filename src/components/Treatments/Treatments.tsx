import React, { useState, useEffect } from 'react'
import TreatmentsList from '../Home/HomeComponents/TreatmentsList'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Link from '@material-ui/core/Link';
import { ReactComponent as Flecha } from '../images/ico-flecha.svg'
import Modal from '@material-ui/core/Modal';
import TreatmentsForm from '../CardsForms/TreatmentsForm'
import './Treatments.css'
import { TreatmentModel } from '../../shared/models/TreatmentModel'
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: 'white',
            color: '#AFAFAF',
            fontSize: '12px',
            fontWeight: 500
        },
        dateLink: {
            color: 'white',
            padding: 10,
            paddingLeft: 12,
            paddingRight: 12,
            fontWeight: 600,
            cursor: 'pointer'
        },
        readMore:{
            color:'#69ABBE',
            fontWeight: 100
        },
        paper: {
            position: 'absolute',
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            outline: 'none',
        },    
    }),
);

function getModalStyle() {

    return {
      top: `50%`,
      left: `calc(50% - 170px)`,
    };
}

const TreatmentsSection = () => {
    const classes = useStyles();
    const [showModal, setShowModal] = useState(false);
    const [modalStyle] = React.useState(getModalStyle);
    const [filteredList, setFilteredList] = useState<TreatmentModel[]>(TreatmentsList)
    const [selectedTreatment, setSelectedTreatment] = useState('')

    const [selectedItem, setSelectedItem] = useState({
        title: 'Rehabilitación Oral',
        imagePath: require('../images/img-destacados-rehabilitacion-oral.jpg'),
        description: 'Es una especialidad dentro de la odontología que combina en forma integral las áreas de prótesis fija, prótesis removible'
    })
    const handleFilter = (e:any) => {
        setSelectedTreatment(e)
        console.log(selectedTreatment)
    }

    useEffect(() =>{
        let tempSelected:TreatmentModel[] = TreatmentsList
        
        if(selectedTreatment != ""){
            tempSelected = TreatmentsList.filter((item)=>{
                return item.title.search(selectedTreatment) !== -1
            })
        }
        
        return() =>{
            setFilteredList(tempSelected)
        }
    })

    const filterBadges = [
        TreatmentsList.map((item) => (
            <div className="ph2">
                <span onClick={(e)=>handleFilter(item.title)}>
                    <Chip className={classes.root} label={item.title} />
                </span>
            </div>
        ))
    ]
    const handleModal = (item:any) => {
        console.log(item)
        setShowModal(true)
        setSelectedItem(item)
    }   

    const galleryItems = [
        filteredList.map((item,index) => (
            <div className="card-container ma3" id={"card-"+item}>
                <div className="card-image">
                    <img src={item.imagePath} alt={item.title} />
                </div>
                <h3 className="cards-title mb3 mt4">{item.title}</h3>
                <div className="treatment-description-container ph3 pt0 pb2">
                    <p className="treatment-description">{item.description.substring(0, 81) + "..."}</p>
                </div>
                <div className="w-100 flex ph3">
                    <Link className={`${classes.readMore} ttu read-more-card` } underline='none'>Leer más <Flecha /></Link>
                </div>
                <div className="pt3 pb4 flex justify-center">
                    <Link className={`${classes.dateLink} ttu card-date-button`} underline='none'  onClick={()=>handleModal(item)}>Pide tu cita aquí</Link>
                </div>

            </div>

        ))
    ]

    return (
        <div className="w-100">
            <h4 className="treatments-title">Tratamientos</h4>
            <div className="treatment-content">
                <div className="w-100 treatments-types flex pa3 justify-center">
                    {filterBadges}
                </div>
                <div className="treatments flex pa3 flex-wrap justify-center">
                    <div className="treatments-overlay w-100 absolute"></div>
                    {galleryItems}
                    <Modal
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        open={showModal}
                        onBackdropClick={()=>setShowModal(false)}
                    >
                        <div>
                        <div  className={`card-container ${classes.paper}`} >
                            <div className="card-image">
                                <img src={selectedItem.imagePath} alt={selectedItem.title} />
                            </div>
                            <h3 className="cards-title mb3 mt4">{selectedItem.title}</h3>
                            <div className="treatment-description-container ph3 pt0 pb2">
                                <p className="treatment-description">{selectedItem.description.substring(0, 81) + "..."}</p>
                            </div>
                            <div className="w-100 flex ph3">
                                <Link className={`${classes.readMore} ttu read-more-card` } underline='none'>Leer más <Flecha /></Link>
                            </div>
                            <div className="form-container">
                                <TreatmentsForm/>
                            </div>
                            <div className="pt3 pb4 flex justify-center">
                                <Link className={`${classes.dateLink} ttu card-date-button`} underline='none' >Pide tu cita aquí</Link>
                            </div>
                        </div>
                        </div>
                        
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default TreatmentsSection