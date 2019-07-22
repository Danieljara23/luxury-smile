import { EspecialistModel } from '../../../shared/models/EspecialistModel'

const EspecialistsList:EspecialistModel[] = [
    {
        name: 'Carlos Andres Enriquez N',
        fieldName: 'Rehabilitación Oral y Estética Dental',
        discount: '20%',
        prefixType: 'Dr',
        schoolName: 'Colegio Odontológico Colombiano',
        description: 'lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
        imgPath: require('../../images/img-especialistas-carlos.jpg')
    },
    {
        name: 'Sarita Fajardo Velasquez',
        fieldName: 'Periodoncia e Implantología Oral',
        prefixType: 'Dra',
        schoolName: 'Colegio Odontológico Colombiano',
        description: 'lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
        imgPath: require('../../images/img-especialistas-sarita.jpg')
    },
    {
        name: 'Anabel Giraldo',
        fieldName: 'Endodoncia',
        prefixType: 'Dra',
        schoolName: 'Universidad CES',
        description: 'lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
        imgPath: require('../../images/img-especialistas-anabel.jpg')
    },
]
export default EspecialistsList