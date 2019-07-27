import { ExperienceModel } from '../../../shared/models/ExperienceModel'

export const ExperienceList: ExperienceModel[] = [
    {
        name: 'Daniel Largo',
        treatmentType: 'Estética dental',
        description: ' Personas y profesionales excelentes trabajan en este consultorio, uno se puede sentir cómodo y tranquilo con los resultados.',
        imgPath: require('../../images/img-testimonios-1.png')
    },
    {
        name: 'Marta Elena Quintero',
        treatmentType: 'Ortodoncia',
        description: 'Muy buenos especialistas, no dejan de lado la parte humana de sus trabajos, me he realizado varios tratamientos y en todos quedo muy contenta con los resultados, los recomiendo.',
        imgPath: require('../../images/img-testimonios-2.png')
    },
    {
        name: 'Ruth Martinez',
        treatmentType: 'Endondoncia',
        description: 'Excelente tabajo, muy profesionales y muy conforme con el resultado y mi sonrisa. Recomendados.',
        imgPath: require('../../images/img-testimonios-3.png')
    },
]