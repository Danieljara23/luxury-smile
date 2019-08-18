import React from 'react'
import '../Home/styles.css'
import './Thankyou.css'


const AppointmentThankyou = () => {
    return(
        <div className="thank-you-page">
            <h4 className="appointment-title">Hemos agendado tu cita</h4>
            <div className="flex flex-row center mh3 justify-center mb4">
                <p className="thankyou-message w-100 center">Hemos agendado tu cita, nos estaremos comunicando contigo telefónicamente para confirmarla.</p>
            </div>
        </div>

    )
}

export default AppointmentThankyou

