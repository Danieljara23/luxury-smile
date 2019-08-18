import React from 'react'
import '../Home/styles.css'
import './Thankyou.css'
import TagManager from 'react-gtm-module'
import {withRouter} from 'react-router-dom';
const tagManagerArgs = {
    dataLayer: {
        userId: '001',
        userProject: 'project',
        page: 'contact-thank-you'
    },
    dataLayerName: 'PageDataLayer'
}

const ContactThankyou = () => {
    TagManager.dataLayer(tagManagerArgs)
    return(
        <div className="thank-you-page">
            <h4 className="appointment-title">Gracias por contactarnos</h4>
            <div className="flex flex-row center mh3 justify-center mb4">
                <p className="thankyou-message w-100 center">Gracias por ponerte en contacto con Luxury Smile, te responderemos en la mayor brevedad</p>
            </div>
        </div>

    )
}

export default withRouter(ContactThankyou)

