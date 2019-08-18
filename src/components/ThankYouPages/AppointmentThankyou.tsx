import React from 'react'
import '../Home/styles.css'
import './Thankyou.css'
import {withRouter} from 'react-router-dom';
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    dataLayer: {
        userId: '001',
        userProject: 'project',
        page: 'appointment-thank-you'
    },
    dataLayerName: 'PageDataLayer'
}
const AppointmentThankyou = () => {
    TagManager.dataLayer(tagManagerArgs)
    return(
        <div className="thank-you-page">
            <h4 className="appointment-title">Hemos agendado tu cita</h4>
            <div className="flex flex-row center mh3 justify-center mb4">
                <p className="thankyou-message w-100 center">Hemos agendado tu cita, nos estaremos comunicando contigo telefónicamente para confirmarla.</p>
            </div>
        </div>

    )
}

export default withRouter(AppointmentThankyou)

