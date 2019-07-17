import { EspecialistModel } from '../../../shared/models/EspecialistModel'

export const EspecialistsList:EspecialistModel[] = [
    {
        name: 'Carlos Andres Enriquez N',
        fieldName: 'Rehabilitación Oral y Estética Dental',
        discount: '20%',
        prefixType: 'Dr',
        schoolName: 'Colegio Odontológico Colombiano',
        imgPath: require('../../images/img-especialistas-carlos.jpg')
    },
    {
        name: 'Sarita Fajardo Velasquez',
        fieldName: 'Periodoncia e Implantología Oral',
        prefixType: 'Dra',
        schoolName: 'Colegio Odontológico Colombiano',
        imgPath: require('../../images/img-especialistas-sarita.jpg')
    },
    {
        name: 'Anabel Giraldo',
        fieldName: 'Endodoncia',
        prefixType: 'Dra',
        schoolName: 'Universidad CES',
        imgPath: require('../../images/img-especialistas-anabel.jpg')
    },
]