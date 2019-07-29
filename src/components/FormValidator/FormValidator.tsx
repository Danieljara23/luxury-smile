
export interface Errors{
    name: string
    cellPhone: string
    email: string
    telephone:string
    message: string
}

const FormValidator = (values:any) => {
    let errors:any = {};
    if (values.name) {
        // errors.name = 'Nombre completo requerido';
        if (!/^[a-zA-Z]+$/.test(values.name)) {
            errors.name = 'Nombre inválido';
        }
    }
    
    if (values.cellPhone) {
        // errors.cellPhone = 'Número de celular requerido';
        if (!/^[0-9]*$/.test(values.cellPhone)) {
            errors.cellPhone = 'Número de Celular inválido';
        }
    }
    if (values.email) {
        // errors.email = 'Email requerido';
        if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = 'Email inválido';
        }
    }
    if (values.telephone) {
        // errors.telephone = 'Teléfono requerido';
        if (!/^[0-9]*$/.test(values.telephone)) {
            errors.telephone = 'Teléfono inválido';
        }
    }
    if (values.message) {
        // errors.message = 'Mensaje requerido';
        if (!/^[a-zA-Z]+$/.test(values.message)) {
            errors.message = 'Mensaje inválido';
        }
    }
    return errors;
}

export default FormValidator