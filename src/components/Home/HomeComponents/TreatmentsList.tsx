import { TreatmentModel } from '../../../shared/models/TreatmentModel'

const TreatmentsList:TreatmentModel[] = [
    {
        title: 'Rehabilitación Oral',
        imagePath: require('../../images/rehabilitacion-oral.jpg'),
        description: 'Es una especialidad dentro de la odontología que combina en forma integral las áreas de prótesis fija, prótesis removible, operatoria, oclusión e Implante dental, que realiza el diagnóstico y plan de tratamiento adecuado al paciente de alta complejidad que requiere recuperar su salud bucal y estetica, a través de las técnicas más modernas de rehabilitación.',
    },
    {
        title: 'Estética dental',
        imagePath: require('../../images/estetica-dental.jpg'),
        description: 'O cosmética es una especialidad de la odontología que soluciona problemas relacionados con la salud bucal y la armonía estética de la boca en su totalidad.',
    },
    {
        title: 'Aclaramiento dental',
        imagePath: require('../../images/aclaramiento-dental.jpg'),
        description: 'Es un tratamiento dental estético que logra reducir varios tonos el color original de las piezas dentales, dejando los dientes más blancos y brillantes.',
        discount: '10%'
    },
    {
        title: 'Operatoria dental',
        imagePath: require('../../images/operatoria-dental.jpg'),
        description: 'Es la rama de la odontología que estudia la prevención, diagnostico y restauración de las piezas dentarias afectadas por procesos patológicos, traumáticos, congénitos, etc. para devolverles su forma, función y estética.',
        discount: '10%'
    },
    {
        title: 'Periodoncia',
        imagePath: require('../../images/periodoncia.jpg'),
        description: 'Es una rama de la especialidad médico-quirúrgica odontológica que estudia la prevención, diagnóstico y tratamiento de las enfermedades y condiciones que afectan los tejidos que dan soporte a los órganos dentarios (encía, ligamento periodontal, cemento radicular y hueso alveolar) y a los substitutos implantados, para el mantenimiento de la salud, función y estética de los dientes y sus tejidos adyacentes.'
    },
    {
        title: 'Endodoncia',
        imagePath: require('../../images/endodoncia.jpg'),
        description: 'Consiste en la extirpación de la pulpa dental y el posterior relleno y sellado de la cavidad pulpar con un material inerte. Es una especialidad odontológica reconocida desde 1963 por la Asociación Dental Americana mientras que los odontólogos especializados en esta técnica reciben el nombre de endodoncistas.'
    },
    {
        title: 'Ortodoncia invisible',
        imagePath: require('../../images/ortodoncia-invisible.jpg'),
        description: 'Una de las principales novedades de los últimos años en el campo de la ortodoncia es lo que se ha denominado ortodoncia invisible o sin brackets. Se trata de una especie de férulas fabricadas en silicona o materiales similares al plástico, lo que permite que apenas sen perceptibles para los demás y se puedan quitar y poner siempre que sea necesario, con este procedimiento logramos la correccion total de las mal posiciones dentales, dejando armonia en todos tus dientes.'
    },
    {
        title: 'Cirugía oral',
        imagePath: require('../../images/cirugia-oral.jpg'),
        description: 'Es la especialidad de la odontología. Que engloba el diagnóstico y el tratamiento quirúrgico de las enfermedades que se producen en la boca, los maxilares y sus tejidos duros y blandos. Comprende todo tipo de extracciones, estirpación de lesiones y análisis histológico de los mismos, y podemos incluir implantes convensionales, y cigomaticos.'
    },
    {
        title: 'Exodoncias',
        imagePath: require('../../images/exodoncias.jpg'),
        description: 'Es aquella parte de la cirugía oral que se ocupa de practicar la avulsión o extracción de un diente o porción del mismo, mediante unas técnicas e instrumental adecuado, del lecho óseo que lo alberga.'
    },
    {
        title: 'Bichectomía',
        imagePath: require('../../images/bichectomia.jpg'),
        description: 'Es una técnica mínimamente invasiva, en la cual se extraen las bolsas de bichat, es decir, los cúmulos de grasa que se acumulan en las mejillas y consiste en hacer dos incisiones de un centímetro o dos aproximadamente en el interior de la boca, una a cada lado, a la altura de la parte intermedia entre las muelas. A partir de ahí, se extraen las bolsas de bichat, con el objetivo de perfilar el óvalo facial con resultados permanentes, debido a que la grasa eliminada no se vuelve a reproducir. '
    },
]
export default TreatmentsList