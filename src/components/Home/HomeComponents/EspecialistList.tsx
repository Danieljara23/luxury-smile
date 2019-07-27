import { EspecialistModel } from '../../../shared/models/EspecialistModel'

const EspecialistsList:EspecialistModel[] = [
    {
        name: 'Carlos Andres Enriquez N',
        fieldName: 'Rehabilitación Oral y Estética Dental',
        prefixType: 'Dr',
        schoolName: 'Colegio Odontológico Colombiano',
        imgPath: require('../../images/img-especialistas-carlos.png')
    },
    {
        name: 'Sarita Fajardo Velasquez',
        fieldName: 'Periodoncia e Implantología Oral',
        prefixType: 'Dra',
        schoolName: 'Colegio Odontológico Colombiano',
        imgPath: require('../../images/img-especialistas-sarita.png')
    },
    {
        name: 'Anabel Giraldo',
        fieldName: 'Endodoncia',
        prefixType: 'Dra',
        schoolName: 'Universidad CES',
        imgPath: require('../../images/img-especialistas-anabel.png')
    },
]
export default EspecialistsList