import React, { useState, useEffect } from 'react'
import TreatmentsList from '../Home/HomeComponents/TreatmentsList'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Link from '@material-ui/core/Link';
import { ReactComponent as Flecha } from '../images/ico-flecha.svg'
import TreatmentsForm from '../CardsForms/TreatmentsForm'
import './Treatments.css'
import { TreatmentModel } from '../../shared/models/TreatmentModel'
import Dialog from '@material-ui/core/Dialog';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: 'white',
            color: '#AFAFAF',
            fontSize: '12px',
            fontWeight: 500, 
            cursor: 'pointer'
        },
        rootClose: {
            padding: 15,
            width: '10px',
            height: '10px',
            justifyContent: 'center',
            cursor: 'pointer'
        },
        dateLink: {
            color: 'white',
            padding: 10,
            paddingLeft: 12,
            paddingRight: 12,
            fontWeight: 600,
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: '#5A8A98'
            }
        },
        readMore:{
            color:'#69ABBE',
            fontWeight: 100
        },
        cardHeight:{
            height: 'auto'
        },
        paper: {
           '& .MuiPaper-root': {
                borderRadius: '9px'
           },
           '& .MuiDialog-paperWidthSm':{
               maxWidth: 'calc(100% - 44px)',
               margin: 30
           },
           '& .treatment-description-container':{
               height: 'auto'
           }
        },
        closeButton:{
            position: 'fixed',
            top: '2%',
            right: '2%',
            zIndex: 1400
        },
        filterCloseButton: {
            backgroundColor: '#4D5766',
            color: 'white',
            width: 30,
            height: 30
        }
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
    const [showClosefilter, setShowCloseFilter] =useState(false)
    const [selectedItem, setSelectedItem] = useState({
        title: 'Rehabilitación Oral',
        imagePath: require('../images/img-destacados-rehabilitacion-oral.jpg'),
        description: 'Es una especialidad dentro de la odontología que combina en forma integral las áreas de prótesis fija, prótesis removible'
    })
    const [toggleDescription, setToggleDescription] = useState({
        itemIndex: null,
        values: false
    })


    useEffect(() =>{
        let tempSelected:TreatmentModel[] = TreatmentsList
        
        if(selectedTreatment != ""){
            tempSelected = TreatmentsList.filter((item)=>{
                return item.title.search(selectedTreatment) !== -1
            })
        }
        
        
            setFilteredList(tempSelected)
        
    })

    const filterBadges = [
        TreatmentsList.map((item) => (
            <div className="ph2">
                <span onClick={()=>handleFilter(item.title)}>
                    <Chip className={classes.root} label={item.title} />
                </span>
            </div>
        ))
    ]
    const handleModal = (item:any) => {
        setShowModal(true)
        setSelectedItem(item)
    }
    const handleClose = (item:any) => {
        setShowModal(false)
    }
    const handleFilter = (e:any) => {
        setSelectedTreatment(e)
        setShowCloseFilter(true)
        document.getElementsByClassName('treatments-types')[0].scrollTo(0,0)
    }
    const handleCloseFilter = (e:any) => {
        setShowCloseFilter(false)
        setSelectedTreatment("")
    }
    const handleToggleParagraph = (e:any, index:any) => {
        if( toggleDescription.itemIndex == index ){
            setToggleDescription({itemIndex: index, values: !toggleDescription.values})
        }else{
            setToggleDescription({itemIndex: index, values: true})
        }
    }

    const galleryItems = [
        filteredList.map((item,index) => (
            <div className="relative card-container ma3" id={"card-"+item}>
                { item.discount ? (
                    <div className="absolute discount-badge"><p>{item.discount}<span> DCTO</span></p> </div>
                ):(
                    <div className="absolute discount-badge no-discount"><p></p> </div>
                )}
                <div className="card-image">
                    <img src={item.imagePath} alt={item.title} />
                </div>
                <h3 className="cards-title mb3 mt4" >{item.title}</h3>
                <div  className ={`treatment-description-container ph3 pt0 pb2 ${toggleDescription.itemIndex == index && toggleDescription.values == true ? 'dn':'db'}`}>
                    <p className="treatment-description">{item.description.substring(0, 81) + "..."}</p>
                </div>
                <div className={`ph3 pt0 pb2 full-description ${toggleDescription.itemIndex == index && toggleDescription.values == true ? 'db':'dn'}`}>
                    <p className="treatment-description">{item.description}</p>
                </div>
                <div className={`w-100 ph3 ${toggleDescription.itemIndex == index && toggleDescription.values == true ? 'dn':'flex'}`}>
                    <Link className={`${classes.readMore} ttu read-more-card pointer ` } underline='none' onClick={(e:any) => handleToggleParagraph(e, index)}>Leer más <Flecha /></Link>
                </div>
                <div className={`w-100 ph3 ${toggleDescription.itemIndex == index && toggleDescription.values == true ? 'flex':'dn'}`}>
                    <Link className={`${classes.readMore} ttu read-more-card pointer read-less` } underline='none' onClick={(e:any) => handleToggleParagraph(e, index)}>Leer menos <Flecha /></Link>
                </div>
                <div className="pt3 pb4 flex justify-center">
                    <Link className={`${classes.dateLink} ttu card-date-button`} underline='none'  onClick={()=>handleModal(item)}>Pide tu cita aquí</Link>
                </div>

            </div>

        ))
    ]

    return (
        <div className="w-100">
            <h4 className="treatments-title">Servicios</h4>
            <div className="treatment-content relative">
                <div className="w-100 treatments-types flex pa3 justify-center">
                    {
                        showClosefilter ? (
                            <div className="ph2" onClick={handleCloseFilter}>
                                <Chip className={`${classes.root} ${classes.filterCloseButton}`} label={"x"} />
                            </div>
                        ):<>
                        </>
                    }
                    {filterBadges}
                </div>
                <div className="treatments flex pa3 flex-wrap justify-center">
                    <div className="treatments-overlay w-100 absolute"></div>
                    {galleryItems}
                    <Dialog
                        open={showModal}
                        onClose={handleClose}
                        scroll={'body'}
                        aria-labelledby="scroll-dialog-title"
                        className={classes.paper}
                    >
                        <div  className={`card-container ${classes.cardHeight}`} >
                            <div className="card-image">
                                <img src={selectedItem.imagePath} alt={selectedItem.title} />
                            </div>
                            <h3 className="cards-title mb3 mt4">{selectedItem.title}</h3>
                            <div className="treatment-description-container ph3 pt0 ">
                                <p className="treatment-description">{selectedItem.description}</p>
                            </div>
                            
                            <div className="form-container">
                                <TreatmentsForm selected={selectedItem.title}/>
                            </div>
                            <div className={`pt3 pb4 justify-center ${showModal?'dn':'flex'}`}>
                                <Link className={`${classes.dateLink} ttu card-date-button`} underline='none' >Pide tu cita aquí</Link>
                            </div>
                        </div>
                    </Dialog>
                    { showModal ? (
                        <div className={`ph2 fixed ${classes.closeButton}`} onClick={handleClose}>
                                <Chip className={`${classes.root} ${classes.rootClose}`} label={"x"} />
                        </div>
                    ):<></>
                    }
                </div>
            </div>
        </div>
    )
}

export default TreatmentsSection